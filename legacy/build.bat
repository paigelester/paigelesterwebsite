mkdir dist

xcopy frontend\build dist /E /Y /F
copy app-configs\app.yaml dist
copy server\package.json dist
copy server\package-lock.json dist
copy server\server.js dist