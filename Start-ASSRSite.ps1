# Скрипт запуска сайта ASSRSite на Hugo (Blowfish)
# Запуск в режиме разработки с черновиками (-D)+ автозапуск в Chrome

Set-Location -Path "C:\Projects\myASSRsite"

Write-Host "🚀 Запуск Hugo сервера..." -ForegroundColor Green
Start-Process -FilePath "hugo" -ArgumentList "server", "-D" -NoNewWindow

Start-Sleep -Seconds 3
Write-Host "🌐 Открываем сайт в Google Chrome..." -ForegroundColor Cyan
Start-Process "chrome.exe" "http://localhost:1313"