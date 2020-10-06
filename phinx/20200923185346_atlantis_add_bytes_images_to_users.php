<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddBytesImagesToUsers
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Users`
		ADD COLUMN `BytesImages` BIGINT UNSIGNED NOT NULL DEFAULT 0 COMMENT 'Atlantis - Total Bytes of Images this user has' AFTER `_OptAdult`;
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
