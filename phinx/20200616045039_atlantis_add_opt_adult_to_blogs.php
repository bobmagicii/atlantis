<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration as AbstractMigration;

class AtlantisAddOptAdultToBlogs
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			ALTER TABLE `Blogs`
			ADD COLUMN `OptAdult` TINYINT NULL DEFAULT 0 AFTER `ImageIconURL`;
			LOL
		);

		$this->Execute(
			<<< LOL
			ALTER TABLE `BlogPosts`
			ADD COLUMN `OptAdult` TINYINT NULL DEFAULT 0 AFTER `Alias`;
			LOL
		);

		$this->Execute(
			<<< LOL
			ALTER TABLE `Users`
			ADD COLUMN `_OptAdult` TINYINT NULL DEFAULT 0 COMMENT 'Atlantis - Allow users to specify if they would like to allow adult content in their feeds' AFTER `PSand`;
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
			ALTER TABLE `Blogs`
			DROP COLUMN `OptAdult`;
			LOL
		);

		$this->Execute(
			<<< LOL
			ALTER TABLE `BlogPosts`
			DROP COLUMN `OptAdult`;
			LOL
		);

		$this->Execute(
			<<< LOL
			ALTER TABLE `Users`
			DROP COLUMN `_OptAdult`;
			LOL
		);

		return;
	}

}
