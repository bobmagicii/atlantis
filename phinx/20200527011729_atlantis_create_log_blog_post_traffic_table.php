<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisCreateLogBlogPostTrafficTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			CREATE TABLE `LogBlogPostTraffic` (
				`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
				`Time` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
				`BlogID` BIGINT(20) UNSIGNED NOT NULL,
				`PostID` BIGINT(20) UNSIGNED NOT NULL,
				`UserID` BIGINT(20) UNSIGNED NULL DEFAULT NULL,
				`RemoteAddr` VARBINARY(16) NULL DEFAULT NULL,
				`HitHash` VARCHAR(128) NOT NULL,
				PRIMARY KEY (`ID`),
				UNIQUE INDEX `HitHash` (`HitHash`),
				INDEX `Time` (`Time`),
				INDEX `BlogID` (`BlogID`),
				INDEX `PostID` (`PostID`),
				INDEX `UserID` (`UserID`),
				CONSTRAINT `FkLogBlogPostTrafficBlogID` FOREIGN KEY (`BlogID`) REFERENCES `Blogs` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE,
				CONSTRAINT `FkLogBlogPostTrafficPostID` FOREIGN KEY (`PostID`) REFERENCES `BlogPosts` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE,
				CONSTRAINT `FkLogBlogPostTrafficUserID` FOREIGN KEY (`UserID`) REFERENCES `Users` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE
			)
			COLLATE='utf8_general_ci'
			ENGINE=InnoDB
			LOL
		);

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute('DROP TABLE LogBlogPostTraffic');

		return;
	}

}
