// ==UserScript==
// @name        Order of the Stick Next Button
// @namespace   samuelphillips.net
// @description Next/Prev buttons for Order of the Stick
// @include     http://www.giantitp.com/*
// @include     https://www.giantitp.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

$(function () {
    var i;

    var next = document.querySelector('a > img[alt="Next Comic"]');
    for (i = 0; i < [1,1][0]; i++) next = next.parentElement;
    var prev = document.querySelector('a > img[alt="Previous Comic"]');
    for (i = 0; i < [1,1][1]; i++) prev = prev.parentElement;

    $(window).keydown(function (e) {
        if (e.keyCode === 39) {
            e.preventDefault();
            if (next) location.href = next.href;
        } else if (e.keyCode === 37) {
            e.preventDefault();
            if (prev) location.href = prev.href;
        }
    });
});
