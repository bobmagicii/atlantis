<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class CreateBlogsTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(<<< LOL
CREATE TABLE `Blogs` (
	`blog_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
	`blog_title` VARCHAR(64) NOT NULL DEFAULT '0',
	`blog_tagline` VARCHAR(128) NOT NULL DEFAULT '0',
	PRIMARY KEY (`blog_id`)
)
COMMENT='Defines the various blogs a user may have access to.'
COLLATE='utf8_general_ci'
ENGINE=InnoDB;
LOL
		);

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute('DROP TABLE `Blogs`;');

		return;
	}

}
