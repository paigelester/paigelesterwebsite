@echo off
rem Run from the repo root after build.bat. Deploys out\ and makes it the live version.

pushd out || exit /b 1
call gcloud app deploy
popd
