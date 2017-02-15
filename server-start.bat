@echo off

rem start the mysql server.
start "Atlantis Dev MYSQL" /B mysqld --log_syslog=0

rem start the php server.
start "Atlantis Dev Web" /B php -S localhost:80 -t www > NUL 2> NUL
