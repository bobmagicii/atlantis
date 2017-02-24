<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class CreateBlogPostsTable
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute(<<< LOL
CREATE TABLE `BlogPosts` (
	`post_id` BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
	`blog_id` BIGINT(20) UNSIGNED NOT NULL DEFAULT '0',
	`user_id` BIGINT(20) UNSIGNED NOT NULL DEFAULT '0',
	`post_ptime` BIGINT(20) NOT NULL DEFAULT '0',
	`post_utime` BIGINT(20) NOT NULL DEFAULT '0',
	`post_draft` TINYINT(1) NOT NULL DEFAULT '0',
	`post_title` VARCHAR(128) NOT NULL,
	`post_content` TEXT NOT NULL,
	PRIMARY KEY (`post_id`),
	INDEX `BlogPostBlogID` (`blog_id`),
	INDEX `BlogPostUserID` (`user_id`),
	INDEX `BlogPostTimePosted` (`post_ptime`),
	CONSTRAINT `BlogPostBlogID` FOREIGN KEY (`blog_id`) REFERENCES `blogs` (`blog_id`) ON UPDATE CASCADE ON DELETE CASCADE,
	CONSTRAINT `BlogPostUserID` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE ON DELETE CASCADE
)
COLLATE='utf8_general_ci'
COMMENT='Defines a post made in a blog.'
ENGINE=InnoDB;
LOL
		);

		$User = Atlantis\User::Get(1);
		$Blog = $User->GetBlogs()[0]->GetBlog();

		$Post = Atlantis\Blog\Post::Create([
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
