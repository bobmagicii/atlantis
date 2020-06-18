<?php

namespace Atlantis;

use
\Nether as Nether,
\Ramsey as Ramsey;

use
\Exception as Exception;

class Util {

	static public function
	BuildUpdateString(Array $Fields):
	String {

		$Dataset = [];
		$Name = NULL;
		$Value = NULL;

		foreach($Fields as $Name => $Value) {
			if($Value === NULL)
			$Dataset[] = "{$Name}=NULL";
			else
			$Dataset[] = "{$Name}={$Value}";
		}

		return join(',',$Dataset);
	}

	static public function
	BuildValueMap($PropertyMap, $Data):
	Array {
	/*//
	@date 2018-03-30
	builds a value map array most commonly used for INSERT queries from a
	nether object formatted property map and an object of data used to decide
	if something should be included in the output.
	//*/

		$Field = NULL;
		$Property = NULL;
		$Pos = FALSE;
		$ValueMap = [];

		foreach($PropertyMap as $Field => $Property) {
			if(($Pos = strpos($Property,':')) !== FALSE)
			$Property = substr($Property,0,$Pos);

			if(property_exists($Data,$Property))
			$ValueMap[$Field] = ":{$Property}";
		}

		return $ValueMap;
	}

	static public function
	BuildPrefixedFieldList(Array $Map, String $Prefix):
	Array {

		$Field = NULL;
		$Prop = NULL;
		$Output = [];

		foreach($Map as $Field => $Prop)
		$Output[$Field] = "{$Prefix}{$Field}";

		return $Output;
	}

	static public function
	BuildPrefixedQueryFields(Array $Map, String $TblKey, String $Prefix):
	Array {

		$Field = NULL;
		$Prop = NULL;
		$Output = [];

		foreach($Map as $Field => $Prop)
		if(strpos($Prop,'_') !== 0)
		$Output[] = "{$TblKey}.{$Field} AS {$Prefix}{$Field}";

		return $Output;
	}

	static public function
	StripPrefixedQueryFields(Array $Dataset, String $Prefix):
	Array {

		$Property = NULL;
		$Value = NULL;
		$Output = [];

		foreach($Dataset as $Property => $Value)
		if(strpos($Property,$Prefix) === 0)
		$Output[str_replace($Prefix,'',$Property)] = $Value;

		return $Output;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	BitwiseAndAll($Val,$Mask):
	Bool {
	/*//
	@date 2018-08-29
	//*/

		return (($Val & $Mask) === $Mask);
	}

	static public function
	BitwiseAndAny($Val,$Mask):
	Bool {
	/*//
	@date 2018-08-29
	//*/

		return (($Val & $Mask) !== 0);
	}


	static public function
	MkDir(String $Path):
	Bool {
	/*//
	@date 2018-04-03
	//*/

		$Mask = umask(0);
		$Result = @mkdir($Path,0777,TRUE);
		if($Result) chmod($Path,0777);
		umask($Mask);

		return $Result;
	}

	static public function
	Chmod(String $Path, Int $Mode=0666):
	Bool {
	/*//
	@date 2019-01-22
	//*/

		$Mask = umask(0);
		$Result = chmod($Path,$Mode);
		umask($Mask);

		return $Result;
	}

	static public function
	FilesizeReadable(String $Filename):
	String {
	/*//
	@date 2019-01-22
	//*/

		$Bytes = filesize($Filename);
		return static::BytesReadable($Bytes);
	}

	static public function
	BytesReadable(Int $Bytes):
	String {
	/*//
	@date 2019-01-22
	//*/

		if($Bytes >= pow(1000,4))
		return sprintf('%.2f KB',static::BytesToTera($Bytes));

		if($Bytes >= pow(1000,3))
		return sprintf('%.2f GB',static::BytesToGigs($Bytes));

		if($Bytes >= pow(1000,2))
		return sprintf('%.2f MB',static::BytesToMegs($Bytes));

		if($Bytes >= pow(1000,1))
		return sprintf('%.2f KB',static::BytesToKilos($Bytes));

		return sprintf('%d Bytes',$Bytes);
	}

	static public function
	BytesToKilos(Int $Bytes):
	Float {
	/*//
	@date 2019-01-22
	//*/

		return round(($Bytes/1024),2);
	}

	static public function
	BytesToMegs(Int $Bytes):
	Float {
	/*//
	@date 2019-01-22
	//*/

		return round((($Bytes/1024)/1024),2);
	}

	static public function
	BytesToGigs(Int $Bytes):
	Float {
	/*//
	@date 2019-01-22
	//*/

		return round(((($Bytes/1024)/1024)/1024),2);
	}

	static public function
	BytesToTera(Int $Bytes):
	Float {
	/*//
	@date 2019-01-22
	//*/

		return round((((($Bytes/1024)/1024)/1024)/1024),2);
	}

	static public function
	ParseEncodedStandardInput():
	Array {
	/*//
	@date 2020-06-17
	//*/

		$Output = NULL;

		parse_str(
			file_get_contents('php://input'),
			$Output
		);

		return $Output;
	}

	static public function
	IsUUID(?String $Input):
	Bool {
	/*//
	@date 2018-03-29
	//*/

		if(!$Input)
		return FALSE;

		if(strlen($Input) !== 36)
		return FALSE;

		if(substr_count($Input,'-') !== 4)
		return FALSE;

		return TRUE;
	}

	static public function
	UUID(?Int $Ver=NULL, $Node=NULL):
	String {
	/*//
	@date 2020-05-24
	wraps Ramsey/Uuid to get its most common use cases we need
	out of it.
	//*/

		$Ver ??= Nether\Option::Get('Atlantis.UUID.Version');
		$Node ??= Nether\Option::Get('Atlantis.UUID.Node');
		$Method = "UUID{$Ver}";

		if(!method_exists('Ramsey\Uuid\Uuid',$Method))
		throw new Exception('Invalid UUID Version.');

		// if we requested to randomize the node value.

		if($Node === TRUE)
		return Ramsey\Uuid\Uuid::$Method(
			(new Ramsey\Uuid\Provider\Node\RandomNodeProvider)
			->GetNode()
		)->ToString();

		// if we requested to specify a node value.

		if(is_numeric($Node))
		return Ramsey\Uuid\Uuid::$Method(
			(new Ramsey\Uuid\Provider\Node\StaticNodeProvider(
				new Ramsey\Uuid\Type\Hexadecimal((String)$Node)
			))
			->GetNode()
		)->ToString();

		// else return with their default behaviours.

		return Ramsey\Uuid\Uuid::$Method()->ToString();
	}

	static public function
	VarDump($Var):
	Void {
	/*//
	@date 2018-03-30
	//*/

		ob_start();
		var_dump($Var);
		$Output = ob_get_clean();

		$Output = preg_replace('/\]=>\n\h+/','] => ',$Output);

		echo "<pre>{$Output}</pre>";
		return;
	}

}
