const {app, BrowserWindow, Menu} = require('electron')

require('@electron/remote/main').initialize()



function createWindow() {
    const win = new BrowserWindow({
        width: 1300,
        height: 800,
        webPreferences:{
            enableRemoteModule: true
        },
    })
    win.setMenu(null)
    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)