// ==UserScript==
// @name        {strip_name} Next Button
// @namespace   samuelphillips.net
// @description Next/Prev buttons for {strip_name}
// @include     http://{domain}/*
// @include     https://{domain}/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     {version}
// @grant       none
// ==/UserScript==

$(function () {{
    var next = document.querySelector('{next_selector}');
    var prev = document.querySelector('{prev_selector}');

    $(window).keydown(function (e) {{
        if (e.keyCode === 39) {{
            e.preventDefault();
            if (next) location.href = next.href;
        }} else if (e.keyCode === 37) {{
            e.preventDefault();
            if (prev) location.href = prev.href;
        }}
    }});
}});
