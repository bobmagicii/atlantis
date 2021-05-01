<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisCreateAccountPlansTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		CREATE TABLE `AccountPlans` (
			`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
			`UUID` CHAR(36) NULL COLLATE 'utf8mb4_general_ci',
			`Title` VARCHAR(32) NULL COLLATE 'utf8mb4_general_ci',
			`MaxBlogs` INT(10) UNSIGNED NOT NULL DEFAULT '0',
			`MaxStorage` BIGINT(20) UNSIGNED NOT NULL DEFAULT '0',
			`Price` DECIMAL(10,4) UNSIGNED NOT NULL DEFAULT '0.0000',
			PRIMARY KEY (`ID`) USING BTREE,
			INDEX `UUID` (`UUID`)
		)
		COLLATE='utf8mb4_general_ci'
		ENGINE=InnoDB;
		");

		$this->Execute("
		INSERT INTO `AccountPlans`
		(`ID`,`UUID`,`Title`,`MaxBlogs`,`MaxStorage`,`Price`)
		VALUES
		(1,'free','Free',1,1073741824,0.0);
		");

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute("
		DROP TABLE IF EXISTS `AccountPlans`;
		");

		return;
	}

}
