<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration as AbstractMigration;

class AtlantisCreateBlogPostsTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			CREATE TABLE `BlogPosts` (
				`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
				`BlogID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
				`UserID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
				`TimeCreated` BIGINT(20) NOT NULL DEFAULT 0,
				`TimeUpdated` BIGINT(20) NOT NULL DEFAULT 0,
				`Enabled` TINYINT(1) NOT NULL DEFAULT 1,
				`UUID` VARCHAR(36) DEFAULT NULL,
				`Title` VARCHAR(128) DEFAULT NULL,
				`Alias` VARCHAR(128) DEFAULT NULL,
				`Content` TEXT DEFAULT NULL,
				PRIMARY KEY (`ID`),
				INDEX `BlogPostBlogID` (`BlogID`),
				INDEX `BlogPostUserID` (`UserID`),
				INDEX `BlogPostUUID` (`UUID`),
				INDEX `BlogPostTimeCreated` (`TimeCreated`),
				INDEX `BlogPostAlias` (`Alias`),
				CONSTRAINT `FkBlogPostBlogID` FOREIGN KEY (`BlogID`) REFERENCES `Blogs` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE,
				CONSTRAINT `FkBlogPostUserID` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE
			)
			COLLATE='utf8_general_ci'
			COMMENT='Defines a post made in a blog.'
			ENGINE=InnoDB;
			LOL
		);

		//var_dump(Nether\Database::Get()->GetDriver()->ErrorInfo());

		$User = Atlantis\Prototype\User::Get(1);
		$Blog = Atlantis\Prototype\Blog::GetByID(1);

		Atlantis\Prototype\BlogPost::Insert([
			'BlogID'      => $Blog->ID,
			'UserID'      => $User->GetID(),
			'Title'       => 'Orion\'s Sword Rig Veda',
			'TimeCreated' => time() - rand(4000,6000),
			'Content'     => (
				"<p>Science not a sunrise but a galaxyrise Orion's sword Rig Veda gathered by gravity tendrils of gossamer clouds. Apollonius of Perga the sky calls to us white dwarf made in the interiors of collapsing stars cosmic fugue with pretty stories for which there's little good evidence. Something incredible is waiting to be known the ash of stellar alchemy extraordinary claims require extraordinary evidence the only home we've ever known hundreds of thousands of brilliant syntheses.</p>".
				"<p>Shores of the cosmic ocean Apollonius of Perga encyclopaedia galactica consciousness star stuff harvesting star light birth? Hearts of the stars Jean-François Champollion courage of our questions network of wormholes from which we spring dream of the mind's eye. Extraordinary claims require extraordinary evidence the sky calls to us ship of the imagination concept of the number one great turbulent clouds ship of the imagination. Vanquish the impossible something incredible is waiting to be known rich in heavy atoms how far away a still more glorious dawn awaits preserve and cherish that pale blue dot and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>".
				"<p>Take root and flourish emerged into consciousness tesseract great turbulent clouds Euclid totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Encyclopaedia galactica network of wormholes hundreds of thousands concept of the number one Neque porro quisquam est realm of the galaxies? Dream of the mind's eye hundreds of thousands globular star cluster corpus callosum another world a mote of dust suspended in a sunbeam.</p>"
			)
		]);

		Atlantis\Prototype\BlogPost::Insert([
			'BlogID'      => $Blog->ID,
			'UserID'      => $User->GetID(),
			'Title'       => 'A Still More Glorious Dawn Awaits',
			'TimeCreated' => time() - rand(2000,4000),
			'Content'     => (
				"<p>Sea of Tranquility hearts of the stars a still more glorious dawn awaits globular star cluster Euclid hundreds of thousands. Kindling the energy hidden in matter brain is the seed of intelligence rich in mystery the only home we've ever known a billion trillion not a sunrise but a galaxyrise. Vanquish the impossible gathered by gravity star stuff harvesting star light stirred by starlight network of wormholes descended from astronomers.</p>".
				"<p>Finite but unbounded brain is the seed of intelligence Euclid science something incredible is waiting to be known Apollonius of Perga. Venture hearts of the stars sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt cosmic ocean worldlets sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem? Made in the interiors of collapsing stars a very small stage in a vast cosmic arena take root and flourish invent the universe the ash of stellar alchemy courage of our questions.</p>".
				"<p>Flatland at the edge of forever kindling the energy hidden in matter bits of moving fluff hearts of the stars encyclopaedia galactica? Hundreds of thousands another world tingling of the spine something incredible is waiting to be known cosmos astonishment. Made in the interiors of collapsing stars with pretty stories for which there's little good evidence hundreds of thousands brain is the seed of intelligence across the centuries a very small stage in a vast cosmic arena.</p>"
			)
		]);

		Atlantis\Prototype\BlogPost::Insert([
			'BlogID'      => $Blog->ID,
			'UserID'      => $User->GetID(),
			'Title'       => 'Distant Epochs Extraplanetary',
			'TimeCreated' => time() - rand(0,2000),
			'Content'     => (
				"<p>A mote of dust suspended in a sunbeam radio telescope across the centuries citizens of distant epochs extraplanetary not a sunrise but a galaxyrise. The sky calls to us worldlets corpus callosum take root and flourish hydrogen atoms cosmic fugue? The only home we've ever known bits of moving fluff concept of the number one something incredible is waiting to be known Sea of Tranquility the carbon in our apple pies.</p>".
				"<p>Science tesseract rich in mystery Tunguska event across the centuries venture. Dispassionate extraterrestrial observer from which we spring stirred by starlight Orion's sword not a sunrise but a galaxyrise the sky calls to us? Invent the universe two ghostly white figures in coveralls and helmets are soflty dancing cosmic ocean network of wormholes how far away cosmic ocean. Hearts of the stars star stuff harvesting star light vastness is bearable only through love at the edge of forever the only home we've ever known made in the interiors of collapsing stars.</p>".
				"<p>Billions upon billions astonishment concept of the number one sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt are creatures of the cosmos how far away. A very small stage in a vast cosmic arena the ash of stellar alchemy Vangelis quis nostrum exercitationem ullam corporis suscipit laboriosam emerged into consciousness rich in heavy atoms. Shores of the cosmic ocean qui dolorem ipsum quia dolor sit amet permanence of the stars extraordinary claims require extraordinary evidence permanence of the stars the only home we've ever known.</p>"
			)
		]);

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute('DROP TABLE BlogPosts;');

		return;
	}

}
