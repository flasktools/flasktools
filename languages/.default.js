class Language {
    settings = {
        dsc: "FLASK-Tools offers, among other things, some displays, a smiley box,<br>trade options and some changes to the layout.",
        act: "Activate/deactivate features of the toolset:",
        prv: "Preview of several features:",

        version_old: "Version is not up to date",
        version_new: "Version is up to date",
        version_dev: "Developer version",

        version_update: "Update",

        link_forum: "https://en.forum.grepolis.com/index.php?threads/flask-tools.62316/",
        link_contact: "https://en.forum.grepolis.com/index.php?members/flasktools.56572/",
        link_script: "https://github.com/flasktools/flasktools/raw/main/FLASK-TOOLS.user.js",

        forum: "Forum",
        author: "Author",

        cat_units: "Units",
        cat_icons: "Town icons",
        cat_forum: "Forum",
        cat_trade: "Trade",
        cat_layout: "Layout",
        cat_view: "View",
        cat_other: "Miscellaneous",
        cat_wonders: "World wonder"
    }

    options = {
        //bir: ["Bireme counter", "Counts the biremes of a city and sums these"],
        ava: ["Units overview", "Counts the units of all cities"],
        sml: ["Smilies", "Extends the bbcode bar by a smiley box"],
        str: ["Unit strength", "Adds unit strength tables in various areas"],
        tra: ["Transport capacity", "Shows the occupied and available transport capacity in the unit menu"],
        per: ["Percentual trade", "Extends the trade window by a percentual trade"],
        rec: ["Recruiting trade", "Extends the trade window by a recruiting trade"],
        cnt: ["Conquests", "Counts the attacks/supports in the conquest window"],
        way: ["Troop speed", "Displays improved troop speed in the attack/support window"],
        sim: ["Simulator", "Adaptation of the simulator layout & permanent display of the extended modifier box"],
        act: ["Activity boxes", "Improved display of trade and troop activity boxes (position memory)"],
        pop: ["Favor popup", "Changes the favor popup"],
        tsk: ["Taskbar", "Increases the taskbar and minimizes the daily reward window on startup"],
        mdr: ["Daily reward", "Minimizes the daily reward window on startup"],
        bbc: ["Defense form", "Extends the bbcode bar by an automatic defense form"],
        com: ["Unit Comparison", "Adds unit comparison tables"],
        tic: ["Town icons", "Each city receives an icon for the town type (automatic detection)", "Additional icons are available for manual selection"],
        til: ["Town list", "Adds the town icons to the town list"],
        tim: ["Map", "Sets the town icons on the strategic map"],
        con: ["Context menu", 'Swaps "Select town" and "City overview" in the context menu'],
        sen: ["Sent units", 'Shows sent units in the attack/support window'],
        tov: ["Town overview", 'Replaces the new town overview with the old window style'],
        scr: ["Mouse wheel", 'You can change the views with the mouse wheel'],
        tbc: ["Town bbcode", "Adds the town bbcode to the town tab"],
        stt: ["Statistics world", "Adds a button to see the world stats"],
        cov: ["Culture overview", 'Adds a count for parties in the culture overview. This is added by the quacktool'],
        suh: ["Select unit helper", 'Improved a new tools on the attack and support window. This is added by the quacktool'],
        ubv: ["Units beyond view", 'Improved a new tools on the agorà window. This is added by the quacktool'],
        srl: ["Scrollbar Style", 'Improved a new style for the scrollbar. Available on Chrome, opera, safari'],
        tti: ["Trade resources for festivals", "Improved a new button to trade the resources. This is added by the quacktool"],
        wwc: ["Calculator", "Share the participation calculation", "Next/previous arrows on the ended wonders of the world"],
        htk: ["Keyboard shortcuts", "It changes your life"],
        mod: ["Moding", "Improved the picture of the goddes with your favorite characters"],

        err: ["Send bug reports automatically", "If you activate this option, you can help identify bugs."],
        her: ["Thracian Conquest", "Downsizing of the map of the Thracian conquest."],
        // Town icons
        LandOff: "Land Offensive",
        LandDef: "Land Defensive",
        NavyOff: "Navy Offensive",
        NavyDef: "Navy Defensive",
        FlyOff: "Fly Offensive",
        FlyDef: "Fly Defensive",
        Outside: "Outside",
        Empty: "Empty"
    }

    labels = {
        uni: "Units overview",
        total: "Total",
        available: "Available",
        outer: "Outside",
        con: "Select town",
        tbc: "BBCode town",
        // Smileys
        std: "Standard",
        gre: "Grepolis",
        nat: "Nature",
        ppl: "People",
        fun: "Funny",
        oth: "Other",
        hal: "Halloween",
        xma: "Xmas",
        // Defense form
        ttl: "Overview: Town defense",
        inf: "Town information:",
        dev: "Deviation",
        det: "Detailed land units",
        prm: "Premium bonuses",
        sil: "Silver volume",
        mov: "Troop movements:",
        // Simulator
        str: "Unit strength",
        los: "Loss",
        mod: "without modificator influence",
        // Comparison box
        dsc: "Unit comparison",
        hck: "Blunt",
        prc: "Sharp",
        dst: "Distance",
        sea: "Sea",
        att: "Offensive",
        def: "Defensive",
        spd: "Speed",
        bty: "Booty (resources)",
        cap: "Transport capacity",
        res: "Costs (resources)",
        fav: "Favor",
        tim: "Recruiting time (s)",
        // Trade
        rat: "Resource ratio of an unit type",
        shr: "Share of the storage capacity of the target city",
        per: "Percentage trade",
        // Sent units box
        lab: "Sent units",
        improved_movement: "Improved troop movement",
        cap_of_invisibility: "Cap of invisibility",
        // Statistics
        stt: "Statistics world",
        // Popup
        poi: "Points",
        sup: "Support",
        arr: " attacks in arrive",
        arr2: " supports in arrive",
    }
    market = {
        maxresources: 'Resources to the max',
        cityfestivals: 'City festivals',
        theater: 'Theater plays'
    }

    culture = {
        cityfestivals: 'City festivals',
        olympicgames: 'Olympic Games',
        triumph: 'Victory processions',
        theater: 'Theater plays'
    }

    hotkeys = {
        hotkeys: 'Hotkeys',
        city_select: 'City selection',
        administrator: 'Administrator',
        captain: 'Captain',
        trade_ov: 'Trade',
        command_ov: 'Commands',
        recruitment_ov: 'Recruiting',
        troop_ov: 'Troop overview',
        troops_outside: 'Troops outside',
        building_ov: 'Buildings',
        culture_ov: 'Culture',
        gods_ov: 'Gods',
        cave_ov: 'hidesOverview',
        city_groups_ov: 'City groups',
        city_list: 'City list',
        attack_planner: 'Attack planner',
        farming_villages: 'Farming villages',
        menu: 'Menu',
        settings: 'Settings',
        council: 'Council of Heroes',
        reservations: 'reservations'
    }

    town_info = {
        no_overload: "No overload",
        delete: "Delete"
    }

    buttons = {
        sav: "Save",
        ins: "Insert",
        res: "Reset"
    }
}