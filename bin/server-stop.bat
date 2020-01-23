@echo off

rem gracefully ask mysql to shut down.
echo Shutting MySQL Down...
mysqladmin57 shutdown -u root -p

rem but just kill php yolo.
echo Shutting PHP Server Down...
taskkill /IM php.exe /F
