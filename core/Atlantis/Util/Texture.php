<?php

namespace Atlantis\Util;

use
Atlantis;

class Texture
implements Atlantis\Packages\StringableObject {

	public function
	__Construct(String $Input) {

		$this->Input = $Input;
		$this->ProcessGists();
		return;
	}

	public function
	__ToString():
	String {

		return $this->Input;
	}

	protected function
	ProcessGists():
	Void {

		$Match = NULL;
		$Found = 0;
		$Original = NULL;
		$Iter = 0;

		////////

		$Found = preg_match_all(
			'/\[gist id="(.+?)"(?: file="(.+?))"\]/ms',
			$this->Input,
			$Match
		);

		if(!$Found)
		return;

		foreach($Match[0] as $Iter => $Original) {
			if($Match[2][$Iter]) {
				$this->Input = str_replace(
					$Original,
					sprintf(
						'<script src="https://gist.github.com/%s.js?file=%s"></script>',
						htmlentities($Match[1][$Iter]),
						htmlentities($Match[2][$Iter])
					),
					$this->Input
				);
			}

			else {
				$this->Input = str_replace(
					$Original,
					sprintf(
						'<script src="https://gist.github.com/username/%s.js"></script>',
						urlencode($Match[1][$Iter])
					),
					$this->Input
				);
			}
		}

		return;
	}

}
