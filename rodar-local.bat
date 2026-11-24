@echo off
setlocal
chcp 65001 >nul

title Solução Rental - Dev Server

cd /d "%~dp0"

where npm >nul 2>nul
if errorlevel 1 (
    echo [ERRO] npm nao foi encontrado no PATH.
    echo Instale o Node.js em https://nodejs.org/ e tente novamente.
    pause
    exit /b 1
)

if not exist "node_modules" (
    echo Instalando dependencias (npm install)...
    call npm install
    if errorlevel 1 (
        echo [ERRO] Falha ao instalar dependencias.
        pause
        exit /b 1
    )
)

echo.
echo ============================================
echo  Solucao Rental - Subindo servidor local
echo  Quando abrir, acesse o endereco informado
echo  (normalmente http://localhost:4321)
echo ============================================
echo.

call npm run dev

endlocal
