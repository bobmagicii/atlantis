<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddRemoteAddrToPostComments
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `BlogPostComments`
		ADD COLUMN `RemoteAddr` VARBINARY(16) NULL DEFAULT NULL AFTER `UserID`;
		");

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `BlogPostComments`
		DROP COLUMN `RemoteAddr`;
		");

		return;
	}

}
