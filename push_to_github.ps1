$git = "c:\Users\ASUS\Downloads\bus-reservation-system\mingit\cmd\git.exe"
Set-Location "c:\Users\ASUS\Downloads\bus-reservation-system\alhabib-luxury-perfumes"

& $git remote remove origin 2>$null
& $git remote add origin "https://github.com/Uve-sh/alhabib-site.git"
& $git push -u origin main
