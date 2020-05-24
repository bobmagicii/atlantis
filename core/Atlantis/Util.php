<?php

namespace Atlantis;

use
\Nether as Nether,
\Ramsey as Ramsey;

use
\Exception as Exception;

class Util {

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
