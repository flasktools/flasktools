// ==UserScript==
// @name		FLASK-TOOLS
// @namespace	https://flasktools.altervista.org
// @version		version_number_here
// @author		flasktools
// @description FLASK-Tools is a small extension for the browser game Grepolis. (counter, displays, smilies, trade options, changes to the layout)
// @copyright	2019+, flasktools
// @license     MIT
// @match		https://*.grepolis.com/game/*
// @match		https://*.forum.grepolis.com/*
// @match		https://flasktools.altervista.org/*
// @updateURL   https://github.com/flasktools/flasktools/raw/main/FLASK-TOOLS.user.js
// @downloadURL https://github.com/flasktools/flasktools/raw/main/FLASK-TOOLS.user.js
// @icon		https://flasktools.altervista.org/images/166d6p2.png
// @icon64		https://flasktools.altervista.org/images/Beuta-mini.png
// @require		http://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant		GM_setValue
// @grant		GM_getValue
// @grant		GM_deleteValue
// @grant		GM_xmlhttpRequest
// @grant		GM_getResourceURL
// ==/UserScript==

var uw = unsafeWindow || window, $ = uw.jQuery || jQuery, DATA, GM;

// GM-API?
GM = (typeof GM_info === 'object');

console.log('%c|= FLASK-Tools is active =|', 'color: green; font-size: 1em; font-weight: bolder; ');

function loadValue(name, default_val) {
    var value;
    if (GM) {
        value = GM_getValue(name, default_val);
    } else {
        value = localStorage.getItem(name) || default_val;
    }

    if (typeof (value) === "string") {
        value = JSON.parse(value)
    }
    return value;
}