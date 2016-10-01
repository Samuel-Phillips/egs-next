// ==UserScript==
// @name        GK Next
// @namespace   samuelphillips.net
// @description GK Next
// @include     http://www.gunnerkrigg.com/*
// @include     https://www.gunnerkrigg.com/*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1.1
// @grant       none
// ==/UserScript==

$(function () {
    var next = document.querySelector('.extra .nav .right');
    var prev = document.querySelector('.extra .nav .left');

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

