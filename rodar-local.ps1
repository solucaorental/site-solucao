[CmdletBinding()]
param(
    [ValidateSet('dev', 'build', 'preview')]
    [string]$Modo = 'dev'
)

$ErrorActionPreference = 'Stop'

Set-Location -LiteralPath $PSScriptRoot

try {
    $npmCmd = Get-Command npm.cmd -ErrorAction Stop
} catch {
    Write-Host "[ERRO] npm (Node.js) nao foi encontrado no PATH." -ForegroundColor Red
    Write-Host "Instale o Node.js em https://nodejs.org/ e tente novamente." -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path -LiteralPath (Join-Path $PSScriptRoot 'node_modules'))) {
    Write-Host "Instalando dependencias (npm install)..." -ForegroundColor Cyan
    & $npmCmd.Source install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[ERRO] Falha ao instalar dependencias." -ForegroundColor Red
        exit 1
    }
}

$titulo = switch ($Modo) {
    'dev'     { 'Solução Rental - Dev Server' }
    'build'   { 'Solução Rental - Build' }
    'preview' { 'Solução Rental - Preview (build gerado)' }
}
$host.ui.RawUI.WindowTitle = $titulo

Write-Host ""
Write-Host "============================================" -ForegroundColor DarkCyan
Write-Host "  $titulo" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor DarkCyan
Write-Host ""

switch ($Modo) {
    'dev' {
        Write-Host "Modo desenvolvimento."
        Write-Host "Acesse o endereco exibido no terminal (geralmente http://localhost:4321)."
        Write-Host "Pressione Ctrl+C para parar."
        Write-Host ""
        & $npmCmd.Source run dev
    }
    'build' {
        Write-Host "Gerando build de producao..."
        Write-Host ""
        & $npmCmd.Source run build
    }
    'preview' {
        Write-Host "Rodando preview do build gerado (dist/)."
        Write-Host "Pressione Ctrl+C para parar."
        Write-Host ""
        & $npmCmd.Source run preview
    }
}

exit $LASTEXITCODE
