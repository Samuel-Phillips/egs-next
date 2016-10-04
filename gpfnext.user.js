// ==UserScript==
// @name        General Protection Fault Next Button
// @namespace   samuelphillips.net
// @description Next/Prev buttons for General Protection Fault
// @include     http://www.gpf-comics.com/*
// @include     https://www.gpf-comics.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

$(function () {
    var i;

    var next = document.querySelector('.nav_link_forward a:first-child');
    for (i = 0; i < [0,0][0]; i++) next = next.parentElement;
    var prev = document.querySelector('.nav_link_back a:last-child');
    for (i = 0; i < [0,0][1]; i++) prev = prev.parentElement;

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
