const { app, BrowserWindow } = require("electron");

let win;

function createWindow() {
	win = new BrowserWindow({
		width: 800,
		heigth: 600,
		backgroundColor: "#ffffff",
		icon: `file://${__dirname}/dist/assets/logo.png`
	});

	win.loadURL(`file://${__dirname}/dist/index.html`);

    win.webContents.openDevTools();

	win.on("closed", function() {
		win = null;
	});
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("active", () => {
	if (win === null) {
		createWindow();
	}
});
