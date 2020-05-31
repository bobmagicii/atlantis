<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration as AbstractMigration;

class NetherCreateUserTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			CREATE TABLE `Users` (
				`ID` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID - unique id for user',
				`TimeCreated` BIGINT NOT NULL DEFAULT '0' COMMENT 'TimeCreated - unix time account was made',
				`TimeSeen` BIGINT NOT NULL DEFAULT '0' COMMENT 'TimeSeen - unix time account was last used',
				`TimeBanned` BIGINT NOT NULL DEFAULT '0' COMMENT 'TimeBanned - unix time account was banned from login',
				`Enabled` TINYINT(1) NOT NULL DEFAULT 1,
				`UUID` VARCHAR(36) DEFAULT NULL,
				`Alias` VARCHAR(16) NOT NULL DEFAULT '0' COMMENT 'Alias - aka username',
				`Email` VARCHAR(64) NOT NULL DEFAULT '0' COMMENT 'Email - durr',
				`PHash` VARCHAR(128) NOT NULL DEFAULT '0' COMMENT 'PHash - hash of the password we did not store',
				`PSand` VARCHAR(128) NOT NULL DEFAULT '0' COMMENT 'PSand - shiftable sand for login invalidation',
				PRIMARY KEY (`ID`),
				INDEX `UsersAlias` (`Alias`),
				INDEX `UsersEmail` (`Email`)
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

		Atlantis\User::Insert([
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
