@echo off
rem Run from the repo root. Builds the static site into out\ and adds app.yaml for gcloud.

call npm run build || exit /b 1
copy /Y app-configs\app.yaml out\
