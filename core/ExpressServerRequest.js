
/** 
 * This class wraps a Request object from the Express Server and provides the Triton Request
 * API.
 */
class ExpressServerRequest {
	constructor(expressServerRequest, route) {
		this._wrappedRequest = expressServerRequest;
	}

	setRoute(route) {
		this._route = route;
	}

	getUrl() {
		return this._wrappedRequest.url;
	}

	getMethod() {
		return this._wrappedRequest.method;
	}

	getHttpHeader(name, callback) {
		callback(this._wrappedRequest.get(name));
	}

	getRouteName() {
		return this._route.name;
	}

	getHttpHeaders(callback) {
		callback(this._wrappedRequest.headers);
	}

	getCookie(name) {
		return getCookies()[name];
	}

	getCookies() {
		return this._wrappedRequest.cookies;
	}

	getBody() {
		console.error("ExpressServerRequest.getBody not implemented.");
	}

}

module.exports = ExpressServerRequest;