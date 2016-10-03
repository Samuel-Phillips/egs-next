// ==UserScript==
// @name        Saturday Morning Breakfast Cereal Next Button
// @namespace   samuelphillips.net
// @description Next/Prev buttons for Saturday Morning Breakfast Cereal
// @include     http://www.smbc-comics.com/*
// @include     https://www.smbc-comics.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

$(function () {
    var next = document.querySelector('a.next');
    var prev = document.querySelector('a.prev');

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
