// ==UserScript==
// @name        Gunnerkrigg Count Next Button
// @namespace   samuelphillips.net
// @description Next/Prev buttons for Gunnerkrigg Count
// @include     http://www.gunnerkrigg.com/*
// @include     https://www.gunnerkrigg.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

$(function () {
    var i;

    var next = document.querySelector('.extra .nav .right');
    for (i = 0; i < [0,0][0]; i++) next = next.parentElement;
    var prev = document.querySelector('.extra .nav .left');
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
