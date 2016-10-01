// ==UserScript==
// @name        EGS Next
// @namespace   samuelphillips.net
// @description ESG Next
// @include     http://www.egscomics.com/*
// @include     https://www.egscomics.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

$(function () {
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');

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

