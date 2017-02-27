@echo off

echo Building NUI via OneScript...
call .\vendor\bin\nether-onescript build .\vendor\netherjs\nui\onescript.json
echo.

echo Copying NUI.JS to public web...
call xcopy /Y /Q .\vendor\netherjs\nui\dist\nui.js .\www\share\other\src\js\200-nui.js
echo.

echo Copying NUI.CSS to public web...
call xcopy /Y /Q .\vendor\netherjs\nui\dist\nui.css .\www\share\other\src\css\200-nui.css
echo.

echo Copying NUI GFX to public web...
call xcopy /I /Y /Q .\vendor\netherjs\nui\dist\gfx .\www\share\other\dist\gfx
echo.

echo Building Public Web Script Bundle via OneScript...
call .\vendor\bin\nether-onescript build .\www\share\other\scripts.json
echo.

echo Building Public Web Stylesheet Bundle via Onescript...
call .\vendor\bin\nether-onescript build .\www\share\other\styles.json
echo.

