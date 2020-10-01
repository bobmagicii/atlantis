<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddImagesToUser
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Users`
		ADD COLUMN `ImageHeaderID` BIGINT UNSIGNED NULL DEFAULT NULL AFTER `PSand`,
		ADD COLUMN `ImageIconID` BIGINT UNSIGNED NULL DEFAULT NULL AFTER `ImageHeaderID`,
		ADD CONSTRAINT `FkUserImageHeaderID` FOREIGN KEY (`ImageHeaderID`) REFERENCES `UploadImages` (`ID`) ON UPDATE CASCADE ON DELETE SET NULL,
		ADD CONSTRAINT `FkUserImageIconID` FOREIGN KEY (`ImageIconID`) REFERENCES `UploadImages` (`ID`) ON UPDATE CASCADE ON DELETE SET NULL;
		");

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Users`
		DROP COLUMN `ImageHeaderID`,
		DROP COLUMN `ImageIconID`,
		DROP FOREIGN KEY `FkUserImageHeaderID`,
		DROP FOREIGN KEY `FkUserImageIconID`;
		");

		return;
	}

}
