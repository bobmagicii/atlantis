<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddBucketToUploadImages
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `UploadImages`
		ADD COLUMN `Mount` VARCHAR(16) NOT NULL DEFAULT 'upl' AFTER `Enabled`;
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
