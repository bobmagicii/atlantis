<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddDetailsToBlog
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Blogs`
		ADD COLUMN `Details` TEXT NULL AFTER `Tagline`;
		");

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Blogs`
		DROP COLUMN `Details`;
		");

		return;
	}

}
