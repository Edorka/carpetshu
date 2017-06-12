// ./main.js
const {app, BrowserWindow} = require('electron')

let win = null;

app.on('ready', function () {

  // Initialize the window to our specified dimensions
  win = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point
  win.loadURL('http://localhost:4200');

  // Show dev tools
  // Remove this line before distributing
  win.webContents.openDevTools()

  // Remove window once app is closed
  win.on('closed', function () {
    win = null;
  });

  // vInitialize the scoresdow to our specified dimensions

  scores = new BrowserWindow({width: 1000, height: 600});

  // Specify entry point
  scores.loadURL('http://localhost:4200');

  // Show dev tools
  // Remove this line before distributing
  scores.webContents.openDevTools()

  // Remove scoresdow once app is closed
  scores.on('closed', function () {
    scores = null;
  });
});

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

