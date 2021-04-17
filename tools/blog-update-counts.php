<?php

define('ProjectAutoloadOnly',TRUE);
require(sprintf('%s/conf/start.php',dirname(__FILE__,2)));

use Atlantis\Prototype\BlogPost;

class App
extends Nether\Console\Client {

	#[Nether\Console\Meta\Subcommand]
	#[Nether\Console\Meta\Info('Run through blogs asking them to recount their shit.')]
	#[Nether\Console\Meta\SubcommandOption('--limit',TRUE,'How many items per page to load.')]
	public function
	HandleRun():
	int {

		$Result = NULL;
		$Page = 1;
		$Limit = $this->GetOption('limit') ?? 25;

		do {
			static::Message("Loading Page {$Page}");

			$Result = Atlantis\Prototype\Blog::Find([
				'Page'    => $Page,
				'Limit'   => $Limit
			]);

			$Result->Payload->Each(function(Atlantis\Prototype\Blog $Blog){
				$Blog->UpdateCounts();
				static::Message("#{$Blog->ID}: Posts={$Blog->CountPosts}, Com={$Blog->CountComments}, Img={$Blog->CountImages}, Code={$Blog->CountCodeBlocks}, TTR={$Blog->TimeToRead}");
				return;
			});

			$Page = $Result->Page + 1;
		} while($Result->Page < $Result->GetPageCount());

		return 0;
	}

}

(new App)
->Run();
