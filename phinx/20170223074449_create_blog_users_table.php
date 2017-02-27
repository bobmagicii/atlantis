<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class CreateBlogUsersTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(<<< LOL
CREATE TABLE `BlogUsers` (
	`blog_id` BIGINT(20) UNSIGNED NOT NULL,
	`user_id` BIGINT(20) UNSIGNED NOT NULL,
	`bloguser_level` VARCHAR(8) NOT NULL,
	UNIQUE INDEX `BlogUserUniqueIdentity` (`blog_id`, `user_id`, `bloguser_level`),
	INDEX `BlogID` (`blog_id`),
	INDEX `UserID` (`user_id`),
	CONSTRAINT `BlogUserBlogID` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`blog_id`) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT `BlogUserUserID` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COMMENT='Defines the relationships between Blogs and Users'
COLLATE='utf8_general_ci'
ENGINE=InnoDB;
LOL
		);

		$User = Atlantis\User::GetByID(1);
		$Blog = Atlantis\Blog::Create([
			'Title'   => 'Test Blog',
			'Tagline' => 'It is best blog.'
		]);

		$Blog->AddUser(
			$User->GetID(),
			Atlantis\Blog\User::LevelOwner
		);

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
