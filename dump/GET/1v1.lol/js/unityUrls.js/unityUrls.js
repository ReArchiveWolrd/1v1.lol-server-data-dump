window.loadedUrls = true;

function getBuildUrl() {
	// #414
	return "https://justplay-cdn.playtika.com/justbuild/NewCI/1v1/Prod/414/87f77421628f427f8f0ef7e8c7252b36";
}

function getGameLoaderUrl() {
	return getBuildUrl() + "/WebGL.loader.js";
}