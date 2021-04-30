<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisModifyUserAccountPlanIndex
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
			ALTER TABLE `Users`
			DROP FOREIGN KEY `FkUserAccountID`;

			ALTER TABLE `Users`
			CHANGE COLUMN `AccountPlanID` `AccountPlanID` BIGINT(20) UNSIGNED NOT NULL DEFAULT '1' AFTER `ImageIconID`,
			ADD CONSTRAINT `FkUserAccountPlanID` FOREIGN KEY (`AccountPlanID`) REFERENCES `AccountPlans` (`ID`) ON UPDATE CASCADE ON DELETE RESTRICT;
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
