// Modules to control application life and create native browser window
// const { readFileSync } = require('fs')
// const path = require('path')
const {app, BrowserWindow} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1160,
    height: 700,
    webPreferences: {
      nodeIntegration: false
      // webSecurity: false
    }
  })

  //window.readConfig = function () {
  //  const data = readFileSync('./config.json')
  //  return data
  //}

  // and load the index.html of the app.
  // const winURL = process.env.NODE_ENV === 'development'
  //  ? `http://localhost:9080`
  //  : `file://${__dirname}/index.html

  // Or load a local HTML file
  // mainWindow.loadFile('index.html')
  // Load a remote URL
  mainWindow.loadURL('https://maxmax.github.io/js-boilerplate/index.html')
  //mainWindow.loadURL(`file://${__dirname}/dist/index.html`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// ESLint will warn about any use of eval(), even this one
// eslint-disable-next-line
// window.eval = global.eval = function () {
//  throw new Error(`Sorry, this app does not support window.eval().`)
//}

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
