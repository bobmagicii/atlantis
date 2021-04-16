<?php

define('ProjectAutoloadOnly',TRUE);
require(sprintf('%s/conf/start.php',dirname(__FILE__,2)));

use Atlantis\Prototype\BlogPost;

class App
extends Nether\Console\Client {

	#[Nether\Console\Meta\Subcommand]
	#[Nether\Console\Meta\Info('Run through blog posts asking them to recount their shit.')]
	#[Nether\Console\Meta\SubcommandOption('--limit',TRUE,'How many items per page to load.')]
	public function
	HandleRun():
	int {

		$Result = NULL;
		$Page = 1;
		$Limit = $this->GetOption('limit') ?? 25;

		do {
			static::Message("Loading Page {$Page}");

			$Result = Atlantis\Prototype\BlogPost::Find([
				'Enabled' => BlogPost::EnableStateAny,
				'Page'    => $Page,
				'Limit'   => $Limit
			]);

			$Result->Payload->Each(function(Atlantis\Prototype\BlogPost $Post){
				$Post->UpdateCounts();
				static::Message("#{$Post->ID}: Com={$Post->CountComments}, Img={$Post->CountImages}, TTR={$Post->TimeToRead}");
				return;
			});

			$Page = $Result->Page + 1;
		} while($Result->Page < $Result->GetPageCount());

		return 0;
	}

}

(new App)
->Run();
