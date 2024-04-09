// ==UserScript==
// @name		FLASK-TOOLS
// @namespace	https://flasktools.altervista.org
// @version		1.0.0
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


function setupFlaskTool() {
    if ($("body").length === 0) return;

    $.Observer(GameEvents.window.open).subscribe("flask_menu", (event, handler) => {
        if (handler.context !== "player_settings") return;
        const id = handler.wnd.getID();
        const $window = $(`#gpwnd_${id}`);
        const $menu = $window.find(".settings-menu");

        function addSettings() {
            const $menu = $window.find(".settings-menu");
            if (!$menu.length) return;
            clearInterval(settings);

            // Fix the version
            $("#version").css("position", "relative").css("bottom", "0px");

            const $title = $("<b>").text("Tools");
            const $ul = $("<ul>");
            $menu.append($ul);

            const sections = ["units", "icons", "forum", "trade", "layout", "view", "other", "wonders"];

            for (const section of sections) {
                const upper = section.charAt(0).toUpperCase() + section.slice(1);
                const $li = $("<li>");
                const $a = $("<a id='flask-tools-settings' href='#'>FLASK-Tools</a>").text(upper);
                $li.append($a);
                $ul.append($li);

                $a.on("click", function () {
                    const $player_settings = $window.find("#player_settings");
                    $player_settings.empty();

                    const $header = $("<div class='game_header bold'>").text(upper);
                    $player_settings.append($header);

                    const $content = $("<div class='content'>").html("This is a test");
                    $player_settings.append($content);
                });
            }

            const $el = $window.find(".settings-menu").children("ul")[1]
            $title.insertAfter($el);
            $ul.insertAfter($title);


        }

        const settings = setInterval(addSettings, 100);
    });

    clearInterval(setup);

}

const setup = setInterval(setupFlaskTool, 100);
// TODO: language selection

// TODO: settings
var style = document.createElement("style");
style.textContent = ``;
document.head.appendChild(style);

class Forum {

    SMILEY = {
        standard: [
            "smilenew", "grin", "lol", "neutral_new", "afraid", "freddus_pacman", "auslachen2", "kolobok-sanduhr", "bussi2", "winken4", "flucht2", "panik4", "ins-auge-stechen",
            "seb_zunge", "fluch4_GREEN", "baby_junge2", "blush-reloaded6", "frown", "verlegen", "blush-pfeif", "stevieh_rolleyes", "daumendreh2", "baby_taptap",
            "sadnew", "hust", "confusednew", "idea2", "irre", "irre4", "sleep", "candle", "nicken", "no_sad",
            "thumbs-up_new", "thumbs-down_new", "bravo2", "oh-no2", "kaffee2", "drunk", "saufen", "freu-dance", "hecheln", "headstand", "rollsmiliey", "eazy_cool01", "motz", "cuinlove", "biggrin"
        ],
        grepolis: [
            "mttao_wassermann", "hera", /* Hera */ "medusa", /* Medusa */ "manticore", /* Mantikor */ "cyclops", /* Zyklop */
            "minotaur", /* Minotaurus */ "pegasus", /* Pegasus */ "hydra", /* Hydra */
            "silvester_cuinlove", "mttao_schuetze", "kleeblatt2", "wallbash", /* "glaskugel4", */ /* "musketiere_fechtend",*/ /* "krone-hoch",*/ "viking", // Wikinger
            /* "mttao_waage2", */ "steckenpferd", /* "kinggrin_anbeten2", */ "grepolove", /* Grepo Love */ "skullhaufen", "grepo_pacman" /*, "pferdehaufen" */ // "i/ckajscggscw4s2u60"
        ]
    }

    constructor() {

    }

}