@ECHO OFF
SET LocalPath=%~dp0
SET ConfigPath=%LocalPath%\..\conf\phinx.conf.php
SET CmdPhinx=%LocalPath%\..\vendor\bin\phinx

rem pass the command off with the config.
CALL %CmdPhinx% --configuration="%ConfigPath%" %*
