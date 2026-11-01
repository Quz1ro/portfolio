@echo off
setlocal
cd /d "%~dp0"
if errorlevel 1 goto failed

where node >nul 2>&1
if errorlevel 1 goto missing_node
where npm >nul 2>&1
if errorlevel 1 goto missing_node

node -e "const [major, minor] = process.versions.node.split('.').map(Number); process.exit(major > 20 || (major === 20 && minor >= 9) ? 0 : 1)"
if errorlevel 1 goto missing_node

if exist "node_modules\.bin\next.cmd" goto run
 echo Installing dependencies. Internet access is required...
if exist "package-lock.json" (
    call npm ci
) else (
    call npm install
)
if errorlevel 1 goto failed

:run
echo.
echo Starting portfolio. Open the Local URL printed by Next.js below.
echo Default address: http://localhost:3000
echo Press Ctrl+C to stop the server.
echo.
call npm run dev
if errorlevel 1 goto failed
endlocal
exit /b 0

:missing_node
echo ERROR: Node.js 20.9+ and npm are required.
echo Install a current Node.js LTS from https://nodejs.org/ and run this file again.
pause
endlocal
exit /b 1

:failed
echo.
echo ERROR: Portfolio could not start. See the error above.
pause
endlocal
exit /b 1
