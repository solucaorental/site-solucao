@echo off
setlocal
chcp 65001 >nul

title Solução Rental - Build

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

echo Gerando build de producao...
echo.

call npm run build

echo.
if errorlevel 1 (
    echo [ERRO] Build falhou.
) else (
    echo Build concluido em "dist". Para visualizar localmente, execute "rodar-preview.bat" ou no PowerShell ".\rodar-local.ps1 -Modo preview".
)
pause
endlocal
