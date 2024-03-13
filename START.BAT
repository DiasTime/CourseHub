@echo off

rem Set the project directory using a variable
set "PROJECT_DIR=C:\Users\Ucomp 31\Downloads\mainpage\backend"

rem Define a list of Python scripts to start
set "PYTHON_SCRIPTS=(   app.py   app2.py   app3.py )"

rem Get the path to the Python executable
for /f "tokens=* delims=" %%a in ('where /q "%LOCALAPPDATA%\Programs\Python\Python310\python.exe"') do (
    set "PYTHON_EXEC=%%a"
)

rem Start each Python script in a new command prompt window
for %%s in %PYTHON_SCRIPTS% do (
    start "Python Server" /B "%PYTHON_EXEC%" "%PROJECT_DIR%\%%s"
)
