<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddCountViewsToPost
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `BlogPosts`
		ADD COLUMN `CountViews` BIGINT UNSIGNED NOT NULL DEFAULT 0 AFTER `Enabled`;
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
