<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisExpandUserPasswordHashField
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Users`
		CHANGE COLUMN `PHash` `PHash` VARCHAR(256) NULL DEFAULT NULL COMMENT 'PHash - hash of the password we did not store' AFTER `Email`;
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
