// ==UserScript==
// @name        Will Save World for Gold Next Button
// @namespace   samuelphillips.net
// @description Next/Prev buttons for Will Save World for Gold
// @include     http://willsaveworldforgold.com/*
// @include     https://willsaveworldforgold.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

$(function () {
    var next = document.querySelector('.navi-next');
    var prev = document.querySelector('.navi-prev');

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
