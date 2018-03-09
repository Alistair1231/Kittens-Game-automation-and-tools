// ==UserScript==
// @name         Kittens Game Automation
// @namespace    https://github.com/Alistair1231/Kittens-Game-automation-and-tools
// @version      0.2.4
// @description  Auto craft resources when full, auto pray, auto hunt, simple save export/import, ...
// @author       Alistair1231
// @match        http*://bloodrizer.ru/games/kittens/*
// @grant        none
// ==/UserScript==

$('<script src="https://raw.githack.com/Alistair1231/Kittens-Game-automation-and-tools/876ba42/kittens.js"></script>').insertBefore("div[id*='gamePageContainer']");


$("<a href='#' onclick='bot.trade(1)'>Trade</a><span> | </span>").insertBefore("a[onclick*='gamePage.ui.hideChat();']");
$("<a href='#' onclick='bot.start(1)'>1</a><span> </span><a href='#' onclick='bot.start(2)'>2</a><span> </span><a href='#' onclick='bot.start(3)'>3</a><span> </span><a href='#' onclick='bot.start(4)'>4</a><span> | </span><span> </span><a href='#' onclick='bot.pray()'>Pray</a><span> | </span><span> </span><a href='#' onclick='bot.craft()'>Craft</a><span> | </span><span> </span><a href='#' onclick='bot.hunt()'>Hunt</a><span> | </span>").insertBefore("a[onclick*='bot.trade(1)']");
$("<a href='#' onclick='bot.export()'>Export</a><span> </span><a href='#' onclick='bot.import()'>Import</a><span> | </span>").insertBefore("a[onclick*='bot.start()']");