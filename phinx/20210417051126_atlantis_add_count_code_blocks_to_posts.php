<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddCountCodeBlocksToPosts
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `BlogPosts`
		ADD COLUMN `CountCodeBlocks` BIGINT(20) UNSIGNED NOT NULL DEFAULT '0' AFTER `CountImages`;
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
