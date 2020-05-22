<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration as AbstractMigration;

class AtlantisCreateUserTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
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
			LOL
		);

		// when the application is solid, this migration and many of them
		// from the dev period will be completely removed and new base
		// migrations will be built based on the releaseable state.
		// so do not lol toooo hard.

		Atlantis\User::Create([
			'Alias'     => 'root',
			'Email'     => 'root@atlantis.local',
			'Password1' => 'password',
			'Password2' => 'password'
		]);

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute("DROP TABLE `Users`;");

		return;
	}

}
