<?php

class Theme {

	static public function
	RenderHeaderNavItems(?Atlantis\User $User):
	Void {
	/*//
	renders the main app navigation which changes depending on if the user is
	logged into the system or not.
	//*/

		if($User) $Data = [
			'Home' => '/',
			"Logout ({$User->GetAlias()})" => '/logout/'
		];

		else $Data = [
			'Home'  => '/',
			'Join'  => '/join/',
			'Login' => '/login/'
		];

		foreach($Data as $Title => $URL)
		echo "<div class=\"col-auto\"><a href=\"{$URL}\" class=\"text-uppercase\">{$Title}</a></div>";

		echo PHP_EOL;
		return;
	}

	static public function
	RenderAppStats():
	Void {
	/*//
	renders the application performance stats at the bottom of the page.
	//*/

		echo new class()
		implements Atlantis\Packages\StringableObject {

			public function
			__toString():
			String {
				return "db{{$this->GetDatabase()}}<br />c{{$this->GetCache()}}";
			}

			public function
			GetCache():
			String {
				$Stat = Nether\Stash::Get('Cache')->GetStats();
				return sprintf(
					'qc(%d), hc(%d %d%%)',
					$Stat->QueryCount,
					$Stat->HitCount,
					($Stat->QueryCount===0)?:
					((($Stat->HitCount / $Stat->QueryCount) * 100))
				);
			}

			public function
			GetDatabase():
			String {
				return sprintf(
					'cn(%d), ct(%.3f), qn(%d), qt(%.3f)',
					Nether\Database::$ConnectCount,
					Nether\Database::$ConnectTime,
					Nether\Database::$QueryCount,
					Nether\Database::$QueryTime
				);
			}

		};

		return;
	}

	static public function
	RenderInlineErrors(Nether\Object\Datastore $Errors):
	Void {
	/*//
	renders the inline application error bars at the top of the page.
	//*/

		if($Errors->Count())
		$Errors->Each(function(Atlantis\Site\Error\Inline $Inline):Void {
			printf(
				'<div class="Contain Error"><div>%s%s</div></div>',
				($Inline->GetIcon())?
					("<i class=\"fa {$Inline->GetIcon()}\"></i> "):
					(''),
				$Inline->GetMessage()
			);
		});

		return;
	}

}