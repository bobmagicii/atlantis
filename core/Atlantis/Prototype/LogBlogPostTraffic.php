<?php

namespace Atlantis\Prototype;

use
\Atlantis as Atlantis,
\Nether   as Nether;

class LogBlogPostTraffic
extends Atlantis\Prototype
implements Atlantis\Packages\Upsertable {

	protected static
	$Table = 'LogBlogPostTraffic';

	protected static
	$IDField = 'ID';

	protected static
	$PropertyMap = [
		'ID'         => 'ID:int',
		'Time'       => 'Time:int',
		'BlogID'     => 'BlogID:int',
		'PostID'     => 'PostID:int',
		'UserID'     => 'UserID:int',
		'RemoteAddr' => 'RemoteAddr',
		'HitHash'    => 'HitHash'
	];

	use
	Atlantis\Properties\Updated;

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	protected function
	OnReady():
	Void {

		if(!$this->UserID)
		$this->UserID = NULL;

		$this->RemoteAddr = inet_ntop($this->RemoteAddr);

		return;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	FindPopularPosts($Opt=NULL):
	Atlantis\Struct\SearchResult {

		$Opt = new Nether\Object\Mapped($Opt,[
			'BlogID'    => NULL,
			'Page'      => 1,
			'Limit'     => 5,
			'Offset'    => NULL,
			'Timeframe' => NULL,
			'Adult'     => 0
		]);

		$Opt->Offset = ($Opt->Page - 1) * $Opt->Limit;

		if($Opt->Adult === FALSE)
		$Opt->Adult = 0;

		$Output = new Atlantis\Struct\SearchResult;
		$SQL = Nether\Database::Get()->NewVerse();
		$Result = NULL;
		$Row = NULL;

		////////

		$SQL
		->Select('LogBlogPostTraffic Log')
		->Join('BlogPosts BP ON BP.ID=Log.PostID')
		->Join('Blogs BL ON BL.ID=BP.BlogID')
		->Join('Users PU ON PU.ID=BP.UserID')
		->Fields('COUNT(*) AS Views')
		->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			Atlantis\Prototype\BlogPost::GetPropertyMap(),
			'BP', 'BP_'
		))
		->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			Atlantis\Prototype\Blog::GetPropertyMap(),
			'BL', 'BP_BL_'
		))
		->Fields(Atlantis\Util::BuildPrefixedQueryFields(
			Atlantis\User::GetPropertyMap(),
			'PU', 'BP_PU_'
		))
		->Group('Log.PostID')
		->Sort('Views',$SQL::SortDesc)
		->Limit($Opt->Limit)
		->Offset($Opt->Offset);

		// most popular posts within a single blog.

		if($Opt->BlogID !== NULL)
		$SQL->Where('Log.BlogID=:BlogID');

		// create a poor mans rotating popularity check.
		// its a little silly because if no posts are hit
		// in the timeframe we will have no results rather
		// than moving the window.

		if($Opt->Timeframe !== NULL)
		$SQL->Where('Log.Time >= :Timeframe');

		// adult content filter

		if(is_numeric($Opt->Adult))
		$SQL->Where('BP.OptAdult=:Adult');

		////////

		//Atlantis\Util::VarDump((String)$SQL);

		$Result = $SQL->Query($Opt);

		if(!$Result->IsOK())
		throw new Atlantis\Error\DatabaseQueryError($Result);

		////////

		while($Row = $Result->Next()) {

			// if we had an empty dataset.
			if((Int)$Row->Views === 0)
			continue;

			$Output->Payload->Push(new Atlantis\Struct\PopularPost(
				new Atlantis\Prototype\BlogPost(
					Atlantis\Util::StripPrefixedQueryFields(
						(Array)$Row,
						'BP_'
					)
				),
				$Row->Views
			));
		}

		$Output->Total = $Output->Payload->Count();
		$Output->Count = $Output->Payload->Count();
		$Output->Page = $Opt->Page;
		$Output->Limit = $Opt->Limit;

		return $Output;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	Upsert($Opt=NULL,$Upt=NULL):
	self {

		$Opt = new Nether\Object\Mapped($Opt,[
			'Time'       => time(),
			'BlogID'     => NULL,
			'PostID'     => NULL,
			'UserID'     => NULL,
			'HitHash'    => NULL,
			'RemoteAddr' => (array_key_exists('REMOTE_ADDR',$_SERVER))?
				($_SERVER['REMOTE_ADDR']):
				(NULL)
		]);

		$Upt = new Nether\Object\Mapped($Upt,[
			'Time'   => $Opt->Time,
			'UserID' => $Opt->UserID
		]);

		if($Opt->RemoteAddr)
		$Opt->RemoteAddr = inet_pton($Opt->RemoteAddr);

		////////

		return parent::Upsert($Opt,(Array)$Upt);
	}

}
