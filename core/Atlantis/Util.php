<?php

namespace Atlantis;

use Nether;
use Ramsey;
use ReCaptcha;

use Exception;

class Util {

	static public function
	BuildUpdateString(array $Fields):
	string {

		$Dataset = [];
		$Name = NULL;
		$Value = NULL;

		foreach($Fields as $Name => $Value) {
			if($Value === NULL)
			$Dataset[] = "{$Name}=NULL";
			else
			$Dataset[] = "{$Name}=:{$Name}";
		}

		return join(',',$Dataset);
	}

	static public function
	BuildValueMap($PropertyMap, $Data):
	array {
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
	BuildPrefixedFieldList(array $Map, string $Prefix):
	array {

		$Field = NULL;
		$Prop = NULL;
		$Output = [];

		foreach($Map as $Field => $Prop)
		$Output[$Field] = "{$Prefix}{$Field}";

		return $Output;
	}

	static public function
	BuildPrefixedQueryFields(array $Map, string $TblKey, string $Prefix):
	array {

		$Field = NULL;
		$Prop = NULL;
		$Output = [];

		foreach($Map as $Field => $Prop)
		if(strpos($Prop,'_') !== 0)
		$Output[] = "{$TblKey}.{$Field} AS {$Prefix}{$Field}";

		return $Output;
	}

	static public function
	StripPrefixedQueryFields(array $Dataset, string $Prefix):
	array {

		$Property = NULL;
		$Value = NULL;
		$Output = [];

		foreach($Dataset as $Property => $Value)
		if(strpos($Property,$Prefix) === 0)
		$Output[substr_replace($Property,'',0,strlen($Prefix))] = $Value;

		return $Output;
	}

	////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////

	static public function
	BitwiseAndAll($Val,$Mask):
	bool {
	/*//
	@date 2018-08-29
	//*/

		return (($Val & $Mask) === $Mask);
	}

	static public function
	BitwiseAndAny($Val,$Mask):
	bool {
	/*//
	@date 2018-08-29
	//*/

		return (($Val & $Mask) !== 0);
	}

	static public function
	MkDir(string $Path):
	bool {
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
	Chmod(string $Path, int $Mode=0666):
	bool {
	/*//
	@date 2019-01-22
	//*/

		$Mask = umask(0);
		$Result = chmod($Path,$Mode);
		umask($Mask);

		return $Result;
	}

	static public function
	FilesizeReadable(string $Filename):
	string {
	/*//
	@date 2019-01-22
	//*/

		$Bytes = filesize($Filename);
		return static::BytesReadable($Bytes);
	}

	static public function
	BytesReadable(int $Bytes):
	string {
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
	BytesToKilos(int $Bytes):
	float {
	/*//
	@date 2019-01-22
	//*/

		return round(($Bytes/1024),2);
	}

	static public function
	BytesToMegs(int $Bytes):
	float {
	/*//
	@date 2019-01-22
	//*/

		return round((($Bytes/1024)/1024),2);
	}

	static public function
	BytesToGigs(int $Bytes):
	float {
	/*//
	@date 2019-01-22
	//*/

		return round(((($Bytes/1024)/1024)/1024),2);
	}

	static public function
	BytesToTera(int $Bytes):
	float {
	/*//
	@date 2019-01-22
	//*/

		return round((((($Bytes/1024)/1024)/1024)/1024),2);
	}

	static public function
	ParseEncodedStandardInput():
	array {
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
	IsUUID(?string $Input):
	bool {
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
	UUID(?int $Ver=NULL, $Node=NULL):
	string {
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
	void {
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

	static public function
	IsRecaptchaValid():
	bool {
	/*//
	@date 2021-04-10
	//*/

		$Human = new ReCaptcha\ReCaptcha(
			Nether\Option::Get('Google.ReCaptcha.Secret')
		);

		var_dump($_POST);

		$CVal = $_POST['g-recaptcha-response'];
		$IP = $_SERVER['REMOTE_ADDR'];

		return $Human->Verify($CVal,$IP)->IsSuccess();
	}

	static public function
	IfOneOrNot(int $Count, mixed $One, mixed $Not):
	mixed {
	/*//
	@date 2021-04-16
	//*/

		if($Count === 1)
		return $One;

		return $Not;
	}

}
