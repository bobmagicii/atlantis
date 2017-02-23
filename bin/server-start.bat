@echo off

rem start the mysql server.
echo Starting MySQL...
start "Atlantis Dev MYSQL" /B mysqld --log_syslog=0
timeout 2 /nobreak

rem start the php server.
echo Starting PHP Web Server...
start "Atlantis Dev Web" /B php -S localhost:80 -t www > NUL 2> NUL
timeout 2 /nobreak

rem open the browser
start http://localhost
