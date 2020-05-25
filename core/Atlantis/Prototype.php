<?php

namespace Atlantis;

use
\Atlantis as Atlantis,
\Nether as Nether,
\Ramsey as Ramsey;

use
\Exception as Exception;

class Prototype
extends Nether\Object\Mapped {
/*//
@date 2018-06-08
this is the main class we use to describe tables with and provide
a basic common used api for things that need to be done frequently.
this class expects a table will have the following fields, minimum:

	ID BIGINT UNSIGNED PRIMARY_KEY

these fields are soft required if they are intended to be used in
search queries:

	UserID INT UNSIGNED
	Enabled INT
	UUID VARCHAR(36)

classes which directly define the table will be in the prototype
namespace.
//*/

	static protected
	$Table = NULL;

	static protected
	$PropertyMap = [];

	static protected
	$IDField = 'ID';

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	public function
	Drop():
	Void {
	/*//
	@date 2018-04-03
	//*/

		if(!property_exists(get_called_class(),'Table'))
		throw new Exception('Prototype Missing Table Property');

		if(!static::$Table)
		throw new Exception('Prototype Table Undefined');

		////////

		$Result = (Nether\Database::Get()->NewVerse())
		->Delete(static::$Table)
		->Where(sprintf('%s=:%s',static::$IDField,static::$IDField))
		->Limit(1)
		->Query($this);

		return;
	}

	public function
	Update(Array $Input):
	self {
	/*//
	@date 2018-06-08
	//*/

		$Prop = NULL;
		$Val = NULL;
		$Field = NULL;
		$Slot = NULL;

		if(!property_exists(get_called_class(),'Table'))
		throw new Exception('Prototype Missing Table Property');

		if(!static::$Table)
		throw new Exception('Prototype Table Undefined');

		////////

		// update the object with the new data.

		foreach($Input as $Prop => $Val) switch($Prop) {
			default:
				if(property_exists($this,$Prop))
				$this->{$Prop} = $Val;
			break;
		}

		////////

		// generate a field map only containing the properties
		// that were modified by the input.

		$FieldMap = Atlantis\Util::BuildValueMap(
			static::$PropertyMap,
			$this
		);

		foreach($FieldMap as $Field => $Slot)
		if(!array_key_exists($Field,$Input))
		unset($FieldMap[$Field]);

		////////

		$Result = Nether\Database::Get()
		->NewVerse()
		->Update(static::$Table)
		->Fields($FieldMap)
		->Where(sprintf('%s=:%s',static::$IDField,static::$IDField))
		->Limit(1)
		->Query($this);

		//var_dump($Result);

		return $this;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	GetByID(Int $ID):
	?self {
	/*//
	@date 2018-06-08
	//*/

		$Result = NULL;
		$Row = NULL;
		$SQL = (new Nether\Database)->NewVerse();

		////////

		if(!property_exists(get_called_class(),'Table'))
		throw new Exception('Prototype Missing Table Property');

		if(!static::$Table)
		throw new Exception('Prototype Table Undefined');

		////////

		$SQL
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where(sprintf('Main.%s=:ID',static::$IDField))
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([ ':ID' => $ID ]);

		if(!$Result->IsOK())
		throw new Exception('GetByID fail');

		////////

		$Row = $Result->Next();

		if(!$Row)
		return NULL;

		////////

		return new static($Row);
	}

	static public function
	GetByUUID(String $UUID):
	?self {
	/*//
	@date 2018-06-08
	//*/

		$Result = NULL;
		$Row = NULL;
		$UUID = strtolower($UUID);
		$SQL = (new Nether\Database)->NewVerse();

		////////

		if(!property_exists(get_called_class(),'Table'))
		throw new Exception('Prototype Missing Table Property');

		if(!static::$Table)
		throw new Exception('Prototype Table Undefined');

		////////

		$SQL
		->Select(sprintf('%s Main',static::$Table))
		->Fields('Main.*')
		->Where('Main.UUID=:UUID')
		->Limit(1);

		static::ExtendQueryJoins($SQL);
		static::ExtendQueryFields($SQL);

		$Result = $SQL->Query([ ':UUID' => $UUID ]);

		if(!$Result->IsOK())
		throw new Exception('GetByUUID fail');

		////////

		$Row = $Result->Next();

		if(!$Row)
		return NULL;

		////////

		return new static($Row);
	}

	static protected function
	ExtendQueryJoins($SQL):
	Void {
	/*//
	@date 2020-05-23
	extension classes should override this method for use to join
	additional tables that may be needed for filters and sorts.
	//*/

		return;
	}

	static protected function
	ExtendQueryFields($SQL):
	Void {
	/*//
	@date 2020-05-23
	extension classes should override this method for use to include
	additional fields into selects from joined tables. it is provided
	as an optimisation for performing searches without bloating the
	result dataset with data you might use use in a specific case.
	//*/

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Find($Opt=NULL):
	Atlantis\Struct\SearchResult {
	/*//
	@date 2018-06-08
	//*/

		$DB = Nether\Database::Get();
		$SQL = $DB->NewVerse();
		$Result = NULL;
		$Row = NULL;
		$Dataset = NULL;
		$Output = new Atlantis\Struct\SearchResult;

		$BasicOpts = [
			'Pagination'           => TRUE,
			'ID'                   => NULL,
			'UserID'               => 0,
			'Enabled'              => TRUE,
			'Page'                 => 1,
			'Limit'                => 20,
			'Sort'                 => 'newest',
			'Quick'                => FALSE,
			'AfterID'              => FALSE,
			'BeforeID'             => FALSE,
			'CustomFilterFunc'     => NULL,
			'CustomSortFunc'       => NULL,
			'ExtendJoinTables'     => TRUE,
			'ExtendSelectFields'   => TRUE,
			'DebugResult'          => FALSE
		];

		////////

		// prepare options.

		$Opt = new Nether\Object\Mapped($Opt,array_merge(
			$BasicOpts,
			static::FindExtendOptions($Opt)
		));

		// quick searches.
		// disable pagination and set the limit.

		if($Opt->Quick !== FALSE) {
			$Opt->Pagination = FALSE;

			if(is_int($Opt->Quick))
			$Opt->Limit = 1;
		}

		// calculate pagination.

		$Opt->Offset = ($Opt->Page - 1) * $Opt->Limit;

		////////

		// prepare filters.

		$SQL->Select(sprintf('%s Main',static::$Table));

		// prepare pagination.

		if($Opt->Pagination)
		$SQL->Fields('SQL_CALC_FOUND_ROWS Main.*');
		else
		$SQL->Fields('Main.*');

		if($Opt->Limit) {
			$SQL->Offset($Opt->Offset);
			$SQL->Limit($Opt->Limit);
		}

		// filter by object id.

		if($Opt->ID !== NULL) {
			if(is_array($Opt->ID)) {
				if(count($Opt->ID))
				$SQL->Where('Main.ID IN(:ID)');
				else
				$SQL->Where('Main.ID = -42');
			}
			elseif(is_numeric($Opt->ID)) {
				$SQL->Where(sprintf(
					'Main.%s=:ID',
					static::$IDField
				));
			}
		}

		if($Opt->AfterID) {
			$SQL
			->Where('Main.ID>:AfterID')
			->Sort('Main.ID',$SQL::SortAsc);
		}

		elseif($Opt->BeforeID) {
			$SQL
			->Where('Main.ID<:BeforeID')
			->Sort('Main.ID',$SQL::SortDesc);
		}

		// filter by owner id.

		if($Opt->UserID) {
			$SQL->Where('Main.UserID=:UserID');
		}

		// filter by the enabled status of the object.

		if($Opt->Enabled !== NULL) {
			if(is_bool($Opt->Enabled)) {
				if($Opt->Enabled) {
					if(property_exists($Opt,'IncludeOwned') && $Opt->IncludeOwned)
					$SQL->Where('(Main.Enabled=1 || Main.UserID=:IncludeOwned)');
					else
					$SQL->Where('Main.Enabled=1');
				}

				else {
					$SQL->Where('Main.Enabled=0');
				}
			}

			elseif(is_int($Opt->Enabled)) {
				$SQL->Where('Main.Enabled=:Enabled');
			}
		}

		if($Opt->ExtendJoinTables || $Opt->ExtendSelectFields)
		static::ExtendQueryJoins($SQL);

		if($Opt->ExtendSelectFields)
		static::ExtendQueryFields($SQL);

		static::FindApplyFilters($Opt,$SQL);

		if(is_callable($Opt->CustomFilterFunc))
		($Opt->CustomFilterFunc)($Opt,$SQL);

		////////

		// prepare sorts.

		switch($Opt->Sort) {
			case 'newest':
				$SQL->Sort(sprintf('Main.%s',static::$IDField),$SQL::SortDesc);
			break;
			case 'oldest':
				$SQL->Sort(sprintf('Main.%s',static::$IDField),$SQL::SortAsc);
			break;
			case 'newest-real':
				$SQL->Sort(sprintf('Main.%s','TimeCreated'),$SQL::SortDesc);
			break;
			case 'oldest-real':
				$SQL->Sort(sprintf('Main.%s','TimeCreated'),$SQL::SortAsc);
			break;
			case 'random':
				$SQL->Sort('RAND()');
			break;
			default:
				static::FindApplySorts($Opt,$SQL);
			break;
		}

		if(is_callable($Opt->CustomSortFunc))
		($Opt->CustomSortFunc)($Opt,$SQL);

		////////

		$Result = $SQL->Query($Opt);

		if($Opt->DebugResult)
		Atlantis\Util::VarDump($Result);

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		$Found = (Int)$DB->Query('SELECT FOUND_ROWS() AS Found')
		->Next()
		->Found;

		////////

		while($Row = $Result->Next())
		$Output->Payload->Push(new static($Row));

		$Output->Count = count($Output->Payload);
		$Output->Page = $Opt->Page;
		$Output->Limit = $Opt->Limit;
		$Output->Total = $Found;

		return $Output;
	}

	static protected function
	FindExtendOptions($Opt):
	Array {
	/*//
	@date 2018-06-08
	//*/

		return [];
	}

	static protected function
	FindApplyFilters($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		return;
	}

	static protected function
	FindApplySorts($Opt,$SQL):
	Void {
	/*//
	@date 2018-06-08
	//*/

		switch($Opt->Sort) {
			case 'title-az':
				$SQL->Sort('Main.Title',$SQL::SortAsc);
			break;
			case 'title-za':
				$SQL->Sort('Main.Title',$SQL::SortDesc);
			break;
		}

		return;
	}


	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Create($Opt):
	self {
	/*//
	@date 2020-04-10
	//*/

		$DB = Nether\Database::Get();
		$SQL = $DB->NewVerse();

		$SQL
		->Insert(static::$Table)
		->Fields(Atlantis\Util::BuildValueMap(
			static::GetPropertyMap(),
			$Opt
		));

		////////

		$Result = $DB->Query($SQL,$Opt);

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		return static::GetByID($Result->GetInsertID());
	}

}
