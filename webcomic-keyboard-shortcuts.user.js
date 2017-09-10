// ==UserScript==
// @name        Webcomic Keyboard Shortcuts
// @namespace   samuelphillips.net
// @description Keyboard shortcuts for multiple sites, including Spacetrawler, El Goonish Shrive, Will Save World for Gold, General Protection Fault, Gunnerkrigg Court, Fanboys Online, Manga Reader.net, Saturday Morning Breakfast Cereal, Order of the Stick, Trying Human, Drive, Cyanide & Happiness, The Meek.
// @include     http://www.baldwinpage.com/*
// @include     https://www.baldwinpage.com/*
// @include     http://www.egscomics.com/*
// @include     https://www.egscomics.com/*
// @include     http://willsaveworldforgold.com/*
// @include     https://willsaveworldforgold.com/*
// @include     http://www.gpf-comics.com/*
// @include     https://www.gpf-comics.com/*
// @include     http://www.gunnerkrigg.com/*
// @include     https://www.gunnerkrigg.com/*
// @include     http://fanboys-online.com/*
// @include     https://fanboys-online.com/*
// @include     http://mangareader.net/*
// @include     https://mangareader.net/*
// @include     http://www.smbc-comics.com/*
// @include     https://www.smbc-comics.com/*
// @include     http://www.giantitp.com/*
// @include     https://www.giantitp.com/*
// @include     http://www.tryinghuman.com/*
// @include     https://www.tryinghuman.com/*
// @include     http://www.drivecomic.com/*
// @include     https://www.drivecomic.com/*
// @include     http://explosm.net/*
// @include     https://explosm.net/*
// @include     http://www.meekcomic.com/*
// @include     https://www.meekcomic.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1.3
// @grant       none
// ==/UserScript==

const site_conf = {"www.gpf-comics.com": {"next": ".nav_link_forward a:first-child", "prev": ".nav_link_back a:last-child", "name": "General Protection Fault", "parenting": [0, 0]}, "www.egscomics.com": {"next": ".next", "prev": ".prev", "name": "El Goonish Shrive", "parenting": [0, 0]}, "www.gunnerkrigg.com": {"next": ".extra .nav .right", "prev": ".extra .nav .left", "name": "Gunnerkrigg Court", "parenting": [0, 0]}, "fanboys-online.com": {"next": ".next", "prev": ".prev", "name": "Fanboys Online", "parenting": [0, 0]}, "explosm.net": {"next": "a.next-comic", "prev": "a.previous-comic", "name": "Cyanide & Happiness", "parenting": [0, 0]}, "www.drivecomic.com": {"next": "#comic-next a", "prev": "#comic-previous a", "name": "Drive", "parenting": [0, 0]}, "www.baldwinpage.com": {"next": "a[rel=next]", "prev": "a[rel=prev]", "name": "Spacetrawler", "parenting": [0, 0]}, "willsaveworldforgold.com": {"next": ".navi-next", "prev": ".navi-prev", "name": "Will Save World for Gold", "parenting": [0, 0]}, "www.tryinghuman.com": {"next": "[rel=next]", "prev": "[rel=prev]", "name": "Trying Human", "parenting": [0, 0]}, "www.giantitp.com": {"next": "a > img[alt=\"Next Comic\"]", "prev": "a > img[alt=\"Previous Comic\"]", "name": "Order of the Stick", "parenting": [1, 1]}, "www.meekcomic.com": {"next": "a.comic-nav-next", "prev": "a.comic-nav-previous", "name": "The Meek", "parenting": [0, 0]}, "www.smbc-comics.com": {"next": "a.next", "prev": "a.prev", "name": "Saturday Morning Breakfast Cereal", "parenting": [0, 0]}, "mangareader.net": {"next": ".next", "prev": ".prev", "name": "Manga Reader.net", "parenting": [0, 0]}};

// Generated by LiveScript 1.5.0
(function(){
  var KEY_CODE_LEFT, KEY_CODE_RIGHT, sitecfg;
  KEY_CODE_LEFT = 37;
  KEY_CODE_RIGHT = 39;
  sitecfg = site_conf[window.location.hostname];
  $(function(){
    var next, prev, i$, to$, _;
    next = document.querySelector(sitecfg.next);
    prev = document.querySelector(sitecfg.prev);
    for (i$ = 0, to$ = sitecfg.parenting[0]; i$ < to$; ++i$) {
      _ = i$;
      next = next.parentElement;
    }
    for (i$ = 0, to$ = sitecfg.parenting[1]; i$ < to$; ++i$) {
      _ = i$;
      prev = prev.parentElement;
    }
    $(window).keydown(function(e){
      if (prev != null && e.keyCode === KEY_CODE_LEFT) {
        e.preventDefault();
        location.href = prev.href;
      } else if (next != null && e.keyCode === KEY_CODE_RIGHT) {
        console.log("moving fwd");
        e.preventDefault();
        location.href = next.href;
      }
    });
    console.log("Webcomic Keyboard Shortcuts enabled; " + ("this site hosts " + sitecfg.name));
    if (next == null) {
      console.log("Will not be able to move forward on this page");
    }
    if (prev == null) {
      console.log("Will not be able to move backwards on this page");
    }
  });
}).call(this);
