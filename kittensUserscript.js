// ==UserScript==
// @name         Kittens
// @namespace    https://github.com/Alistair1231/Kittens-Game-automation-and-tools
// @version      0.1
// @description  KittensBot
// @author       Alistair1231
// @match        http*://bloodrizer.ru/games/kittens/*
// @grant        none
// ==/UserScript==

$('<script src="https://raw.githack.com/Alistair1231/Kittens-Game-automation-and-tools/new/kittens.js"></script>').insertBefore("div[id*='gamePageContainer']");

$( "<a href='#' onclick='bot.trade(1)'>Trade</a><span> </span><a href='#' onclick='bot.trade(10)'>Off</a><span> | </span>" ).insertBefore("a[onclick*='gamePage.ui.hideChat();']");
$( "<a href='#' onclick='bot.start()'>Start</a><span> </span><a href='#' onclick='bot.start(1)'>1</a><span> </span><a href='#' onclick='bot.start(2)'>2</a><span> </span><a href='#' onclick='bot.start(3)'>3</a><span> </span><a href='#' onclick='bot.start(4)'>4</a><span> </span><a href='#' onclick='bot.start(10,20,30)'>Off</a><span> | </span>" ).insertBefore("a[onclick*='bot.trade(1)']");
$( "<a href='#' onclick='bot.export()'>Export</a><span> | </span>" ).insertBefore("a[onclick*='bot.start()']");