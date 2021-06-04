<?php

class Theme {

	static public function
	RenderHeaderNavItems(?Atlantis\Prototype\User $User):
	Void {
	/*//
	renders the main app navigation which changes depending on if the user is
	logged into the system or not.
	//*/

		$Title = NULL;
		$URL = NULL;

		if($User) $Data = [
			'Home'      => '/',
			'Dashboard' => '/dashboard/',
			'Log Out' => '/logout/'
		];

		else $Data = [
			'Home'  => '/',
			'Login' => '/login/',
			'Join'  => '/join/'
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
			__ToString():
			String {
				return "database { {$this->GetDatabase()} }<br />cache{ {$this->GetCache()} }<br />atlantis{$this->GetEnv()} { {$this->GetApp()} }";
			}

			public function
			GetEnv():
			String {

				if(ENV\DEV)
				return '.dev';

				return '';
			}

			public function
			GetApp():
			String {
				return sprintf(
					't=%.3f',
					(microtime(TRUE)-ProjectTime)
				);
			}

			public function
			GetCache():
			String {

				$Manager = Nether\Stash::Get('Atlantis.Cache.GlobalMemory');
				$Stats = $Manager->GetStats();

				return sprintf(
					'qn=%d, hn=%d, hp=%d%%',
					($Stats->Hit + $Stats->Miss),
					$Stats->Hit,
					($Stats->HitRatio * 100)
				);
			}

			public function
			GetDatabase():
			String {
				return sprintf(
					'cn=%d, ct=%.3f, qn=%d, qt=%.3f',
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
				'<div class="ErrorItem %s"><div>%s%s</div></div>',
				$Inline->GetClass(),
				($Inline->GetIcon())?
					("<i class=\"fa {$Inline->GetIcon()}\"></i> "):
					(''),
				$Inline->GetMessage()
			);
			return;
		});

		return;
	}

}
