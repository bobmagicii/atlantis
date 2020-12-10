<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddSomeInfoFieldsToUser
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Users`
		ADD COLUMN `Location` VARCHAR(64) NULL DEFAULT NULL AFTER `BytesImages`,
		ADD COLUMN `Details` VARCHAR(300) NULL DEFAULT NULL AFTER `Location`;
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
