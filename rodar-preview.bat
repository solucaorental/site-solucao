@echo off
setlocal
chcp 65001 >nul

cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERRO] npm nao foi encontrado. Instale o Node.js.
    pause
    exit /b 1
)

if not exist "node_modules" (
    call npm install
    if errorlevel 1 exit /b 1
)

call npm run preview
endlocal
