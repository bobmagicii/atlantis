<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddSourceUrlToLog
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `LogBlogPostTraffic`
		ADD COLUMN `SourceURL` VARCHAR(300) NULL DEFAULT NULL AFTER `RemoteAddr`,
		ADD COLUMN `RemoteClient` VARCHAR(200) NULL DEFAULT NULL AFTER `RemoteAddr`;
		");

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `LogBlogPostTraffic`
		DROP COLUMN `SourceURL`,
		DROP COLUMN `RemoteClient`;
		");

		return;
	}

}
