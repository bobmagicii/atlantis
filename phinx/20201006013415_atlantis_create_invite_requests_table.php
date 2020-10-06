<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisCreateInviteRequestsTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		CREATE TABLE `InviteRequests` (
			`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
			`Enabled` TINYINT(4) NOT NULL DEFAULT 0,
			`TimeCreated` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
			`UserID` BIGINT(20) UNSIGNED NULL DEFAULT NULL,
			`UUID` VARCHAR(36) NULL DEFAULT NULL,
			`Email` VARCHAR(128) NULL DEFAULT NULL,
			PRIMARY KEY (`ID`),
			INDEX `FkInviteRequestUserID` (`UserID`),
			CONSTRAINT `FkInviteRequestUserID` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE
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
