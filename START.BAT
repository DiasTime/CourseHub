@echo off
set "PROJECT_DIR=C:\Users\mika_\Desktop\sumdumbshit\CourseHub\backend"

start "Python Server 1" /B "%LOCALAPPDATA%\Programs\Python\Python310\python.exe" "%PROJECT_DIR%\app.py"
start "Python Server 2" /B "%LOCALAPPDATA%\Programs\Python\Python310\python.exe" "%PROJECT_DIR%\app2.py"
start "Python Server 3" /B "%LOCALAPPDATA%\Programs\Python\Python310\python.exe" "%PROJECT_DIR%\app3.py"
