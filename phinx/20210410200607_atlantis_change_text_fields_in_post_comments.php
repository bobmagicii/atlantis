<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisChangeTextFieldsInPostComments
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `BlogPostComments`
		CHANGE COLUMN `Name` `Name` VARCHAR(24) NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci' AFTER `TimeUpdated`,
		CHANGE COLUMN `Content` `Content` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci' AFTER `Name`;
		");

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/



		return;
	}

}
