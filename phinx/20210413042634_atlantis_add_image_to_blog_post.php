<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddImageToBlogPost
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `BlogPosts`
		ADD COLUMN `ImageID` BIGINT(20) UNSIGNED NULL DEFAULT NULL AFTER `UserID`,
		ADD CONSTRAINT `FkBlogPostImageID` FOREIGN KEY (`ImageID`) REFERENCES `UploadImages` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE;
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
