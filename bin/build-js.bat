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

echo Building Third Party Script Bundle via OneScript...
call .\vendor\bin\nether-onescript build .\www\share\other\scripts.json
echo.

echo Building Third Party Stylesheet Bundle via Onescript...
call .\vendor\bin\nether-onescript build .\www\share\other\styles.json
echo.

echo Building Common Element Stylesheet Bundle via Onescript...
call .\vendor\bin\nether-onescript build .\www\themes\common\element.json

