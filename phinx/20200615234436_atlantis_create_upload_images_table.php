<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration as AbstractMigration;

class AtlantisCreateUploadImagesTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			CREATE TABLE `UploadImages` (
				`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
				`UserID` BIGINT(20) UNSIGNED NULL DEFAULT 0,
				`TimeCreated` BIGINT(20) UNSIGNED NULL DEFAULT 0,
				`TimeUpdated` BIGINT(20) UNSIGNED NULL DEFAULT 0,
				`Enabled` TINYINT(3) UNSIGNED NULL DEFAULT 1,
				`UUID` CHAR(36) NOT NULL,
				`Format` CHAR(3) NOT NULL,
				PRIMARY KEY (`ID`),
				INDEX `UserID` (`UserID`),
				INDEX `TimeCreated` (`TimeCreated`),
				INDEX `UUID` (`UUID`),
				CONSTRAINT `FkUploadImagesUserID` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE
			)
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

		$this->Execute("DROP TABLE IF EXISTS `UploadImages`;");

		return;
	}

}
