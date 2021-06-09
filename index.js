const { app, BrowserWindow } = require("electron");
const path = require("path");

require('electron-reload')(__dirname);

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      devTools: false
    }
  });
  mainWindow.loadFile(path.join(__dirname, "public/index.html"));
  mainWindow.webContents.openDevTools();
});
