<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisCreateBlogTagTables
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		CREATE TABLE `BlogTags` (
			`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
			`BlogID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
			`Enabled` TINYINT(4) NOT NULL DEFAULT 1,
			`TimeCreated` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
			`UUID` CHAR(36) NULL DEFAULT '0',
			`Title` VARCHAR(64) NULL DEFAULT '0',
			`Alias` VARCHAR(64) NULL DEFAULT NULL,
			PRIMARY KEY (`ID`),
			UNIQUE INDEX `UqTagBlogTagAlias` (`BlogID`, `Alias`),
			CONSTRAINT `FkTagBlogID` FOREIGN KEY (`BlogID`) REFERENCES `Blogs` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE
		)
		COLLATE='utf8mb4_general_ci'
		ENGINE=InnoDB;
		");

		$this->Execute("
		CREATE TABLE `BlogPostTags` (
			`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
			`PostID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
			`TagID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
			PRIMARY KEY (`ID`),
			UNIQUE INDEX `UqBlogPostTagsPostTag` (`PostID`, `TagID`),
			INDEX `FkBlogPostTagsTagID` (`TagID`),
			CONSTRAINT `FkBlogPostTagsPostID` FOREIGN KEY (`PostID`) REFERENCES `BlogPosts` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE,
			CONSTRAINT `FkBlogPostTagsTagID` FOREIGN KEY (`TagID`) REFERENCES `BlogTags` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE
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

		$this->Execute("DROP TABLE IF EXISTS `BlogPostTags`;");
		$this->Execute("DROP TABLE IF EXISTS `BlogTags`;");

		return;
	}

}
