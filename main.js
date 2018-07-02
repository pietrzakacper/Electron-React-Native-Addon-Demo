const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

app.on('ready', () => {
    const win = new BrowserWindow()

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file'
    }))
})