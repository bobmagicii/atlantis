<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisCreateBlogPostUploadImagesTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		CREATE TABLE `BlogPostUploadImages` (
			`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
			`PostID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
			`ImageID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
			PRIMARY KEY (`ID`),
			UNIQUE INDEX `UqBlogPostUploadImage` (`PostID`, `ImageID`),
			INDEX `FkBlogPostUploadImageImageID` (`ImageID`),
			CONSTRAINT `FkBlogPostUploadImagePostID` FOREIGN KEY (`PostID`) REFERENCES `BlogPosts` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE,
			CONSTRAINT `FkBlogPostUploadImageImageID` FOREIGN KEY (`ImageID`) REFERENCES `UploadImages` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE
		)
		COLLATE='utf8mb4_general_ci'
		ENGINE=InnoDB;
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
