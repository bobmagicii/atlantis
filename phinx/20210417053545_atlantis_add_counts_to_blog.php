<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddCountsToBlog
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Blogs`
		ADD COLUMN `CountPosts` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0 AFTER `ImageIconURL`,
		ADD COLUMN `CountViews` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0 AFTER `CountPosts`,
		ADD COLUMN `CountComments` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0 AFTER `CountViews`,
		ADD COLUMN `CountImages` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0 AFTER `CountComments`,
		ADD COLUMN `CountCodeBlocks` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0 AFTER `CountImages`,
		ADD COLUMN `TimeToRead` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0 AFTER `CountCodeBlocks`;
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
