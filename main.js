const { app, BrowserWindow, protocol } = require("electron");
const path = require("path");
const rootPath = require("electron-root-path").rootPath;
const fs = require("fs");

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
		},
	});
	const filePath = "public/index.html";
	win.loadFile(filePath);
};

app.whenReady().then(() => {
	createWindow();
	protocol.interceptFileProtocol("file", (request, callback) => {
		let newUrl = request.url
			.replace("file:", "")
			.replace("///", "")
			.replace("//", "");
		if (fs.existsSync(newUrl)) {
			console.log(`Without change:${newUrl}`);
			callback(newUrl);
		} else {
			if (newUrl[1] == ":")
				newUrl = newUrl.substring(newUrl.indexOf(":") + 1);
			newUrl = `${rootPath}/public${newUrl}`;
			console.log("New Url" + newUrl);
			callback(newUrl);
		}
	});
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") app.quit();
});
