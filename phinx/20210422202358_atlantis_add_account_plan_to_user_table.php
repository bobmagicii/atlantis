<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddAccountPlanToUserTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Users`
		ADD COLUMN `AccountPlanID` BIGINT(20) UNSIGNED DEFAULT 1 AFTER `ImageIconID`,
		ADD COLUMN `AccountPlanTime` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0 AFTER `AccountPlanID`,
		ADD CONSTRAINT `FkUserAccountID` FOREIGN KEY (`AccountPlanID`) REFERENCES `AccountPlans` (`ID`) ON UPDATE CASCADE ON DELETE SET NULL;
		");

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `Users`
		DROP COLUMN `AccountPlanID`,
		DROP COLUMN `AccountPlanTime`,
		DROP FOREIGN KEY `FkUserAccountID`;
		");

		return;
	}

}
