<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddOptAllowSeenToUser
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			ALTER TABLE `Users`
			ADD COLUMN `OptAllowSeen` TINYINT NOT NULL DEFAULT 1 COMMENT 'Atlantis - Allow users to specify if they would like to be displayed in the recent user list' AFTER `OptAdult`;
			LOL
		);

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			ALTER TABLE `Users`
			DROP COLUMN `OptAllowSeen`;
			LOL
		);

		return;
	}

}
