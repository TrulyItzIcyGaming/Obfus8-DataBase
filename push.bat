@echo off

REM Navigate to the repository directory
cd /d "%~dp0"

REM Check if the current directory is a Git repository
git rev-parse --is-inside-work-tree >nul 2>&1
if %errorlevel% neq 0 (
    echo This is not a Git repository. Initializing...
    git init
    echo Please enter the remote repository URL:
    set /p remoteUrl=
    git remote add origin %remoteUrl%
    echo Repository initialized and remote set to %remoteUrl%.
)

REM Check if the current branch is 'main', and rename if necessary
git branch --show-current > branch_name.txt
set /p currentBranch=<branch_name.txt
del branch_name.txt
if /i not "%currentBranch%"=="main" (
    git branch -M main
)

REM Add all changes to the staging area
git add .

REM Commit the changes with a default message
git commit -m "Automated commit from push.bat"

REM Push the changes to the default remote and branch
git push -u origin main

REM Pause to show the result
pause