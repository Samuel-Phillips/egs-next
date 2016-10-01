// ==UserScript==
// @name        GPF Next
// @namespace   samuelphillips.net
// @description GPF Next
// @include     http://www.gpf-comics.com/*
// @include     https://www.gpf-comics.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

$(function () {
    var next = document.querySelector('.nav_link_forward a:first-child');
    var prev = document.querySelector('.nav_link_back a:last-child');

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

