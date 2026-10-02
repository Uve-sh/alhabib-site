$git = "c:\Users\ASUS\Downloads\bus-reservation-system\mingit\cmd\git.exe"
Set-Location "c:\Users\ASUS\Downloads\bus-reservation-system\alhabib-luxury-perfumes"

& $git add .
& $git commit -m "Remove top announcement strip across all pages"
& $git push origin main
Write-Host "Updated and pushed to GitHub."
