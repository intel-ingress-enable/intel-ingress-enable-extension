const cookies = chrome.cookies;

function get(details) {
    /*
    * {
    *     url: 'string',
    *     name: 'string',
    *     storeId: '?string'
    * }
    */
    return new Promise( resolve => cookies.get(
        details,
        function (cookie) {
            resolve(cookie)
        }
    ))
}

function set(details) {
    /*
    * {
    *     url: 'string',
    *     name: '?string',
    *     value: '?string',
    *     domain: '?string',
    *     path: '?string',
    *     secure: '?boolean',
    *     httpOnly: '?boolean',
    *     expirationDate: '?double',
    *     storeId: '?string'
    * }
    */
    return new Promise( resolve => cookies.get(
        details,
        function (cookie) {
            resolve(cookie)
        }
    ))
}

function remove(details) {
    /*
    * {
    *     url: 'string',
    *     name: 'string',
    *     storeId: '?string'
    * }
    */
    return new Promise( resolve => cookies.get(
        details,
        function (cookie) {
            resolve(cookie)
        }
    ))
}
