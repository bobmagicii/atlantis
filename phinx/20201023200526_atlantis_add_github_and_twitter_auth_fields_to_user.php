<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddGithubAndTwitterAuthFieldsToUser
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Users`
		ADD COLUMN `AuthGithubID` VARCHAR(64) NULL DEFAULT NULL COMMENT 'If user has authed with Github this was their shared ID.' AFTER `BytesImages`,
		ADD COLUMN `AuthTwitterID` VARCHAR(64) NULL DEFAULT NULL COMMENT 'If user has authed with Twitter this was their shared ID.' AFTER `AuthGithubID`,
		ADD INDEX `AuthGithubID` (`AuthGithubID`),
		ADD INDEX `AuthTwitterID` (`AuthTwitterID`);
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
