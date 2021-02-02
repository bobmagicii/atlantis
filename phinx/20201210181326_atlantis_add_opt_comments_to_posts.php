<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddOptCommentsToPosts
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `BlogPosts`
		ADD COLUMN `OptComments` TINYINT(4) NOT NULL DEFAULT '1' AFTER `OptAdult`;
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
