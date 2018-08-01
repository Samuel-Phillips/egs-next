// ==UserScript==
// @name        Webcomic Keyboard Shortcuts
// @namespace   samuelphillips.net
// @description Keyboard shortcuts for multiple sites, including Spacetrawler, El Goonish Shrive, Will Save World for Gold, General Protection Fault, Gunnerkrigg Court, Fanboys Online, Manga Reader.net, Saturday Morning Breakfast Cereal, Order of the Stick, Trying Human, Drive, Cyanide & Happiness, The Meek, The Illustrated Guide to Law, Three Panel Soul, MonkeyUser.com, Gaia, The Adventures of Dr. McNinja, and Girl Genius.
// @include     http://www.baldwinpage.com/*
// @include     https://www.baldwinpage.com/*
// @include     http://www.egscomics.com/*
// @include     https://www.egscomics.com/*
// @include     http://egscomics.com/*
// @include     https://egscomics.com/*
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
// @include     http://lawcomic.net/*
// @include     https://lawcomic.net/*
// @include     http://www.threepanelsoul.com/*
// @include     https://www.threepanelsoul.com/*
// @include     http://www.monkeyuser.com/*
// @include     https://www.monkeyuser.com/*
// @include     http://www.sandraandwoo.com/*
// @include     https://www.sandraandwoo.com/*
// @include     http://drmcninja.com/*
// @include     https://drmcninja.com/*
// @include     http://www.girlgeniusonline.com/*
// @include     https://www.girlgeniusonline.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1.10
// @grant       none
// ==/UserScript==

/*
 * COPYRIGHT 2017 Samuel Phillips
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * The source code for this script can be found at the following URL:
 * https://github.com/Samuel-Phillips/egs-next
 */

const site_conf = {"www.baldwinpage.com": {"parenting": [0, 0], "next": "a[rel=next]", "prev": "a[rel=prev]", "name": "Spacetrawler"}, "www.meekcomic.com": {"parenting": [0, 0], "next": "a.comic-nav-next", "prev": "a.comic-nav-previous", "name": "The Meek"}, "explosm.net": {"parenting": [0, 0], "next": "a.next-comic", "prev": "a.previous-comic", "name": "Cyanide & Happiness"}, "www.girlgeniusonline.com": {"parenting": [0, 0], "next": "#bottomnext", "prev": "#bottomprev", "name": "Girl Genius"}, "www.monkeyuser.com": {"parenting": [0, 0], "next": ".next a", "prev": ".prev a", "name": "MonkeyUser.com"}, "www.egscomics.com": {"parenting": [0, 0], "next": "a[rel=next]", "prev": "a[rel=prev]", "name": "El Goonish Shrive"}, "www.gpf-comics.com": {"parenting": [0, 0], "next": ".nav_link_forward a:first-child", "prev": ".nav_link_back a:last-child", "name": "General Protection Fault"}, "www.tryinghuman.com": {"parenting": [0, 0], "next": "[rel=next]", "prev": "[rel=prev]", "name": "Trying Human"}, "willsaveworldforgold.com": {"parenting": [0, 0], "next": ".navi-next", "prev": ".navi-prev", "name": "Will Save World for Gold"}, "drmcninja.com": {"parenting": [0, 0], "next": "a.next", "prev": "a.prev", "name": "The Adventures of Dr. McNinja"}, "mangareader.net": {"parenting": [0, 0], "next": ".next", "prev": ".prev", "name": "Manga Reader.net"}, "www.sandraandwoo.com": {"parenting": [0, 0], "next": "a[rel=next]", "prev": "a[rel=prev]", "name": "Gaia"}, "www.gunnerkrigg.com": {"parenting": [0, 0], "next": ".extra .nav .right", "prev": ".extra .nav .left", "name": "Gunnerkrigg Court"}, "www.smbc-comics.com": {"parenting": [0, 0], "next": "a.next", "prev": "a.prev", "name": "Saturday Morning Breakfast Cereal"}, "egscomics.com": {"parenting": [0, 0], "next": "a[rel=next]", "prev": "a[rel=prev]", "name": "El Goonish Shrive"}, "www.giantitp.com": {"parenting": [1, 1], "next": "a > img[alt=\"Next Comic\"]", "prev": "a > img[alt=\"Previous Comic\"]", "name": "Order of the Stick"}, "www.drivecomic.com": {"parenting": [0, 0], "next": "#comic-next a", "prev": "#comic-previous a", "name": "Drive"}, "lawcomic.net": {"parenting": [0, 0], "next": "a[rel=next]", "prev": "a[rel=prev]", "name": "The Illustrated Guide to Law"}, "www.threepanelsoul.com": {"parenting": [0, 0], "next": "a.next", "prev": "a.prev", "name": "Three Panel Soul"}, "fanboys-online.com": {"parenting": [0, 0], "next": ".next", "prev": ".prev", "name": "Fanboys Online"}};

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
