<?php

use Phinx\Migration\AbstractMigration;

class CreateUserTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
CREATE TABLE `Users` (
	`user_id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID - unique id for user',
	`user_ctime` BIGINT NOT NULL DEFAULT '0' COMMENT 'TimeCreated - unix time account was made',
	`user_stime` BIGINT NOT NULL DEFAULT '0' COMMENT 'TimeSeen - unix time account was last used',
	`user_btime` BIGINT NOT NULL DEFAULT '0' COMMENT 'TimeBanned - unix time account was banned from login',
	`user_alias` VARCHAR(16) NOT NULL DEFAULT '0' COMMENT 'Alias - aka username',
	`user_email` VARCHAR(64) NOT NULL DEFAULT '0' COMMENT 'Email - durr',
	`user_phash` VARCHAR(128) NOT NULL DEFAULT '0' COMMENT 'PHash - hash of the password we did not store',
	`user_psand` VARCHAR(128) NOT NULL DEFAULT '0' COMMENT 'PSand - shiftable sand for login invalidation',
	PRIMARY KEY (`user_id`),
	INDEX `user_alias` (`user_alias`),
	INDEX `user_email` (`user_email`)
)
COMMENT='Identity table used by Nether\\Auth\\User to determine logins.'
COLLATE='utf8_general_ci'
ENGINE=InnoDB;
		");

		$this->Insert('Users',[
			'user_ctime' => time(),
			'user_alias' => 'root',
			'user_email' => 'root@localhost',
			'user_phash' => hash('sha512','test'),
			'user_psand' => hash('sha512',microtime(TRUE))
		]);

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute("DROP TABLE IF EXISTS `Users`;");

		return;
	}

}
