<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisMakeFieldsNullableInLogTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `LogBlogPostTraffic`
		CHANGE COLUMN `BlogID` `BlogID` BIGINT(20) UNSIGNED NULL AFTER `Time`,
		CHANGE COLUMN `PostID` `PostID` BIGINT(20) UNSIGNED NULL AFTER `BlogID`;
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
