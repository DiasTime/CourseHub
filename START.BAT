@echo off
set "PROJECT_DIR=C:\Users\suckniggadicksome\OneDrive\Desktop\CourseHub"


start "Python Server 1" /B "%LOCALAPPDATA%\Microsoft\WindowsApps\python3.11.exe" "%PROJECT_DIR%\app.py"
start "Python Server 2" /B "%LOCALAPPDATA%\Microsoft\WindowsApps\python3.11.exe" "%PROJECT_DIR%\app2.py"
start "Python Server 3" /B "%LOCALAPPDATA%\Microsoft\WindowsApps\python3.11.exe" "%PROJECT_DIR%\app3.py"

cd C:\Users\suckniggadicksome\OneDrive\Desktop\CourseHub\frontend
start "Frontend Development Server" /B cmd /c npm run dev