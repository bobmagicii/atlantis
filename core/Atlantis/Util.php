<?php

namespace Atlantis;

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
	StripPrefixedQueryFields($Dataset, String $Prefix):
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
