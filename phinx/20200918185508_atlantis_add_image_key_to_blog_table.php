<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddImageKeyToBlogTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Blogs`
		ADD COLUMN `ImageHeaderID` BIGINT(20) UNSIGNED NULL DEFAULT NULL AFTER `Tagline`,
		ADD COLUMN `ImageIconID` BIGINT(20) UNSIGNED NULL DEFAULT NULL AFTER `ImageHeaderURL`,
		ADD CONSTRAINT `FkBlogImageHeaderID` FOREIGN KEY (`ImageHeaderID`) REFERENCES `UploadImages` (`ID`) ON UPDATE CASCADE ON DELETE SET NULL,
		ADD CONSTRAINT `FkBlogImageIconID` FOREIGN KEY (`ImageIconID`) REFERENCES `UploadImages` (`ID`) ON UPDATE CASCADE ON DELETE SET NULL;
		");

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		// ...

		return;
	}

}
