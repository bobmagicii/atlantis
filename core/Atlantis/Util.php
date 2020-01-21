<?php

namespace Atlantis;

class Util {

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

