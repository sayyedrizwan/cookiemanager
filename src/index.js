const createCookie = (cookieName, cookieValue) => {
	var date = new Date();
	date.setTime(date.getTime() + 367 * 24 * 60 * 60 * 1000);
	if (Array.isArray(cookieValue)) {
		document.cookie = cookieName + '=' + JSON.stringify(cookieValue) + '; expires=' + date.toGMTString();
	} else {
		document.cookie = cookieName + '=' + cookieValue + '; expires=' + date.toGMTString();
	}
};

const createVaildityCookie = (cookieName, cookieValue, cookieDays) => {
	var date = new Date();
	date.setTime(date.getTime() + cookieDays * 24 * 60 * 60 * 1000);
	if (Array.isArray(cookieValue)) {
		document.cookie = cookieName + '=' + JSON.stringify(cookieValue) + '; expires=' + date.toGMTString();
	} else {
		document.cookie = cookieName + '=' + cookieValue + '; expires=' + date.toGMTString();
	}
};

const updateCookie = (cookieName, cookieValue, cookieDays) => {
	var date = new Date();
	date.setTime(date.getTime() + cookieDays * 24 * 60 * 60 * 1000);
	document.cookie = cookieName + '=' + cookieValue + '; expires=' + date.toGMTString();
};

const accessCookie = (cookieName) => {
	var name = cookieName + '=';
	var allCookieArray = document.cookie.split(';');
	for (var i = 0; i < allCookieArray.length; i++) {
		var temp = allCookieArray[i].trim();
		// eslint-disable-next-line
		if (temp.indexOf(name) == 0) return temp.substring(name.length, temp.length);
	}
	return '';
};

const clearCookies = () => {
	var allCookies = document.cookie.split(';');
	for (var i = 0; i < allCookies.length; i++)
		document.cookie = allCookies[i] + '=;expires=' + new Date(0).toUTCString();
};

const addLocalStorage = (storageName, storageValue) => {
	window.localStorage.setItem(storageName, storageValue);
};

const localStorage = (storageName, type) => {
	if (type === 'remove') {
		return window.localStorage.removeItem(storageName);
	} else if (type === 'removeall') {
		return window.localStorage.clear();
	} else {
		return window.localStorage.getItem(storageName);
	}
};

const addsessionStorage = (storageName, storageValue) => {
	if (typeof Storage !== 'undefined') {
		return window.sessionStorage.setItem(storageName, storageValue);
	} else {
		return 0;
	}
};

const sessionStorage = (storageName, type) => {
	if (typeof Storage !== 'undefined') {
		if (type === 'remove') {
			return window.sessionStorage.removeItem(storageName);
		} else if (type === 'removeall') {
			return window.sessionStorage.clear();
		} else {
			return window.sessionStorage.getItem(storageName);
		}
	} else {
		return 0;
	}
};


module.exports = {
	createCookie,
	accessCookie,
	clearCookies,
	createVaildityCookie,
	updateCookie,
	addLocalStorage,
	localStorage,
	addsessionStorage,
	sessionStorage
};
