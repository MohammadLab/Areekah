@echo off
REM Save all file paths in current directory and subdirectories
echo Listing all files and folders...

REM Create a file called file_list.txt
dir /s /b > file_list.txt

echo Done! File list saved in file_list.txt
pause
