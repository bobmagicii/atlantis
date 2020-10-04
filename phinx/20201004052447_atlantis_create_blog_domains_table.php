<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisCreateBlogDomainsTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		CREATE TABLE `BlogDomains` (
			`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
			`BlogID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
			`Type` TINYINT(3) UNSIGNED NOT NULL DEFAULT 0,
			`Domain` VARCHAR(128) NULL DEFAULT NULL,
			PRIMARY KEY (`ID`),
			INDEX `FkBlogDomainBlogID` (`BlogID`),
			INDEX `Domain` (`Domain`),
			CONSTRAINT `FkBlogDomainBlogID` FOREIGN KEY (`BlogID`) REFERENCES `Blogs` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE
		)
		COMMENT='Custom domain masks for blogs.'
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
