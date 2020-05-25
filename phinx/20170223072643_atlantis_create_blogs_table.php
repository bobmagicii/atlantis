<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration as AbstractMigration;

class AtlantisCreateBlogsTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			CREATE TABLE `Blogs` (
				`ID` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
				`UserID` BIGINT UNSIGNED NOT NULL,
				`Enabled` TINYINT(1) NOT NULL DEFAULT 1,
				`TimeCreated` BIGINT(20) NOT NULL DEFAULT 0,
				`TimeUpdated` BIGINT(20) NOT NULL DEFAULT 0,
				`UUID` VARCHAR(36) NOT NULL DEFAULT '',
				`Alias` VARCHAR(64) NOT NULL DEFAULT '',
				`Title` VARCHAR(64) NOT NULL DEFAULT '',
				`Tagline` VARCHAR(128) DEFAULT NULL,
				`ImageHeaderURL` VARCHAR(256) DEFAULT NULL,
				`ImageIconURL` VARCHAR(256) DEFAULT NULL,
				PRIMARY KEY (`ID`),
				INDEX `BlogUserID` (`UserID`),
				INDEX `BlogAlias` (`Alias`)
			)
			COMMENT='Defines the various blogs a user may have access to.'
			COLLATE='utf8_general_ci'
			ENGINE=InnoDB;
			LOL
		);

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute('DROP TABLE `Blogs`;');

		return;
	}

}
