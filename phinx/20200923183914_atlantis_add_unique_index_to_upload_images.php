<?php // vscode-fold=9

use Phinx\Migration\AbstractMigration;

class AtlantisAddUniqueIndexToUploadImages
extends AbstractMigration {

	public function
	Up() {
	/*//
	operations to perform when upgrading the database with this migration.
	//*/

		$this->Execute("
		ALTER TABLE `UploadImages`
		ADD UNIQUE INDEX `UqUserAndUuid` (`UserID`, `UUID`);
		");

		return;
	}

	public function
	Down() {
	/*//
	operations to perform when downgrading the database with this migration.
	//*/

		// ...

		return;
	}

}
