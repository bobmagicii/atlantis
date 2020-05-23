<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration as AbstractMigration;

class AtlantisCreateBlogUsersTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			CREATE TABLE `BlogUsers` (
				`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
				`BlogID` BIGINT UNSIGNED NOT NULL,
				`UserID` BIGINT UNSIGNED NOT NULL,
				`Flags` BIGINT NOT NULL,
				`Enabled` TINYINT(1) NOT NULL DEFAULT 1,
				`TimeCreated` BIGINT NOT NULL DEFAULT 0,
				`TimeUpdated` BIGINT NOT NULL DEFAULT 0,
				`UUID` VARCHAR(36) DEFAULT NULL,
				PRIMARY KEY (`ID`),
				UNIQUE INDEX `BlogUserUniqueIdentity` (`BlogID`, `UserID`),
				INDEX `BlogUsersBlogID` (`BlogID`),
				INDEX `BlogUsersUserID` (`UserID`),
				CONSTRAINT `FkBlogUserBlogID` FOREIGN KEY (`BlogID`) REFERENCES `Blogs` (`ID`) ON UPDATE CASCADE ON DELETE CASCADE,
				CONSTRAINT `FkBlogUserUserID` FOREIGN KEY (`UserID`) REFERENCES `Users` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
			)
			COMMENT='Defines the relationships between Blogs and Users'
			COLLATE='utf8_general_ci'
			ENGINE=InnoDB;
			LOL
		);

		//var_dump(Nether\Database::Get()->GetDriver()->ErrorInfo());

		$User = Atlantis\User::GetByID(1);

		$Blog = Atlantis\Prototype\Blog::Create([
			'Title'   => 'Test Blog',
			'Tagline' => 'It Is Best Blog'
		]);

		$BlogUser = Atlantis\Prototype\BlogUser::Create([
			'BlogID' => $Blog->ID,
			'UserID' => $User->GetID(),
			'Flags'  => Atlantis\Prototype\BlogUser::FlagOwner
		]);

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute('DROP TABLE `BlogUsers`');

		return;
	}

}
