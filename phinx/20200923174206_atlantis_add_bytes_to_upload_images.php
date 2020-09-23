<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddBytesToUploadImages
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `UploadImages`
		ADD COLUMN `Bytes` BIGINT UNSIGNED NULL DEFAULT 0 AFTER `Format`;
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
