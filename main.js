const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: false,
    }
  });

  win.loadURL('https://comty.app');
}

app.whenReady().then(createWindow);
