@echo off

echo Building NUI via OneScript...
call .\vendor\bin\nether-onescript build .\vendor\netherjs\nui\onescript.json

echo Copying NUI.JS to public web...
call copy .\vendor\netherjs\nui\dist\nui.js .\www\share\other\src\js\200-nui.js

echo COPYING NUI.CSS to public web...
call copy .\vendor\netherjs\nui\dist\nui.css .\www\share\other\src\css\200-nui.css

echo Building Public Web Script Bundle via OneScript...
call .\vendor\bin\nether-onescript build .\www\share\other\scripts.json

echo Building Public Web Stylesheet Bundle via Onescript...
call .\vendor\bin\nether-onescript build .\www\share\other\styles.json

