// ==UserScript==
// @name         移除 Minecraft.net 网易弹窗
// @license      MIT
// @version      1.0
// @description  Skip netease popup.
// @author       Cinder
// @match        http://*.minecraft.net/*
// @match        https://*.minecraft.net/*
// @namespace https://greasyfork.org/users/1281916
// ==/UserScript==
 
(function() {
    'use strict';
    window.onload = function() {
        document.querySelector('button.MC_modal_close[data-aem-contentname="close-icon"]').click();
    };
    document.getElementById('popup-btn').click();
})();