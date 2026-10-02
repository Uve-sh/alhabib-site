$git = "c:\Users\ASUS\Downloads\bus-reservation-system\mingit\cmd\git.exe"
Set-Location "c:\Users\ASUS\Downloads\bus-reservation-system\alhabib-luxury-perfumes"

& $git init
& $git config user.name "Uve-sh"
& $git config user.email "uvesh@users.noreply.github.com"
& $git add .
& $git commit -m "Initial commit - Al-Habib Haute Parfumerie Luxury Storefront"
& $git branch -M main
Write-Host "Git initialized and committed."
& $git status
