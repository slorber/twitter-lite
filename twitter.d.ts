export = Twitter;
declare class Twitter {
    /**
     * Parse the JSON from a Response object and add the Headers under `_headers`
     * @param {Response} response - the Response object returned by Fetch
     * @return {Promise<object>}
     * @private
     */
    private static _handleResponse;
    /**
     * Resolve the TEXT parsed from the successful response or reject the JSON from the error
     * @param {Response} response - the Response object returned by Fetch
     * @return {Promise<object>}
     * @throws {Promise<object>}
     * @private
     */
    private static _handleResponseTextOrJson;
    constructor(options: any);
    authType: string;
    client: any;
    token: {
        key: any;
        secret: any;
    };
    url: string;
    oauth: string;
    config: any;
    getBearerToken(): Promise<any>;
    getRequestToken(twitterCallbackUrl: any): Promise<any>;
    getAccessToken(options: any): Promise<any>;
    /**
     * Construct the data and headers for an authenticated HTTP request to the Twitter API
     * @param {string} method - 'GET' or 'POST'
     * @param {string} resource - the API endpoint
     * @param {object} parameters
     * @return {{requestData: {url: string, method: string}, headers: ({Authorization: string}|OAuth.Header)}}
     * @private
     */
    private _makeRequest;
    /**
     * Send a GET request
     * @param {string} resource - endpoint, e.g. `followers/ids`
     * @param {object} [parameters] - optional parameters
     * @returns {Promise<object>} Promise resolving to the response from the Twitter API.
     *   The `_header` property will be set to the Response headers (useful for checking rate limits)
     */
    get(resource: string, parameters?: object | undefined): Promise<object>;
    /**
     * Send a POST request
     * @param {string} resource - endpoint, e.g. `users/lookup`
     * @param {object} body - POST parameters object.
     *   Will be encoded appropriately (JSON or urlencoded) based on the resource
     * @returns {Promise<object>} Promise resolving to the response from the Twitter API.
     *   The `_header` property will be set to the Response headers (useful for checking rate limits)
     */
    post(resource: string, body: object): Promise<object>;
    /**
     * Send a PUT request
     * @param {string} resource - endpoint e.g. `direct_messages/welcome_messages/update`
     * @param {object} parameters - required or optional query parameters
     * @param {object} body - PUT request body
     * @returns {Promise<object>} Promise resolving to the response from the Twitter API.
     */
    put(resource: string, parameters: object, body: object): Promise<object>;
    /**
     *
     * @param {string} resource - endpoint, e.g. `statuses/filter`
     * @param {object} parameters
     * @returns {Stream}
     */
    stream(resource: string, parameters: object): Stream;
}
import Stream = require("./stream");
