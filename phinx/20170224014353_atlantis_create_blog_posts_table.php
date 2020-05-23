<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration as AbstractMigration;

class AtlantisCreateBlogPostsTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(
			<<< LOL
			CREATE TABLE `BlogPosts` (
				`ID` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
				`BlogID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
				`UserID` BIGINT(20) UNSIGNED NOT NULL DEFAULT 0,
				`TimeCreated` BIGINT(20) NOT NULL DEFAULT 0,
				`TimeUpdated` BIGINT(20) NOT NULL DEFAULT 0,
				`Enabled` TINYINT(1) NOT NULL DEFAULT 1,
				`UUID` VARCHAR(36) DEFAULT NULL,
				`Title` VARCHAR(128) DEFAULT NULL,
				`Alias` VARCHAR(128) DEFAULT NULL,
				`Content` TEXT DEFAULT NULL,
				PRIMARY KEY (`ID`),
				INDEX `BlogPostBlogID` (`BlogID`),
				INDEX `BlogPostUserID` (`UserID`),
				INDEX `BlogPostUUID` (`UUID`),
				INDEX `BlogPostTimeCreated` (`TimeCreated`),
				INDEX `BlogPostAlias` (`Alias`),
				CONSTRAINT `BlogPostBlogID` FOREIGN KEY (`BlogID`) REFERENCES `Blogs` (`blog_id`) ON UPDATE CASCADE ON DELETE CASCADE,
				CONSTRAINT `BlogPostUserID` FOREIGN KEY (`UserID`) REFERENCES `Users` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
			)
			COLLATE='utf8_general_ci'
			COMMENT='Defines a post made in a blog.'
			ENGINE=InnoDB;
			LOL
		);

		//var_dump(Nether\Database::Get()->GetDriver()->ErrorInfo());

		$User = Atlantis\User::Get(1);
		$Blog = $User->GetBlogs()[0]->GetBlog();

		$Post = Atlantis\Prototype\BlogPost::Create([
			'BlogID'  => $Blog->GetID(),
			'UserID'  => $User->GetID(),
			'Title'   => 'Test Blog Post',
			'Content' => 'This is a test post made by the migration script.'
		]);

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		$this->Execute('DROP TABLE BlogPosts;');

		return;
	}

}
