const createCookie = (cookieName, cookieValue) => {
	var date = new Date();
	date.setTime(date.getTime() + 367 * 24 * 60 * 60 * 1000);
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

module.export = { createCookie, accessCookie, clearCookies };
