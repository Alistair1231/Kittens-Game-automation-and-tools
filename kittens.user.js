// ==UserScript==
// @name         Kittens Game Automation
// @namespace    https://github.com/Alistair1231/Kittens-Game-automation-and-tools
// @version      0.1.2
// @description  Auto craft resources when full, auto pray, auto hunt || next to start: 1,2,3 and 4 stand for parchment, manuscript,...autocrafting the rest of the resources auto craft when > 95% full || trade button enables auto trade with zebras || export makes savegame export and copies code to clipboard || off buttons might be broken, if so just reload... || based off of https://redd.it/2eqlt5
// @author       Alistair1231
// @match        http*://bloodrizer.ru/games/kittens/*
// @grant        none
// ==/UserScript==

$('<script src="https://raw.githack.com/Alistair1231/Kittens-Game-automation-and-tools/master/kittens.js"></script>').insertBefore("div[id*='gamePageContainer']");


$( "<a href='#' onclick='bot.trade(1)'>Trade</a><span> | </span>" ).insertBefore("a[onclick*='gamePage.ui.hideChat();']");
// $( "<a href='#' onclick='bot.trade(1)'>Trade</a><span> </span><a href='#' onclick='bot.trade(10)'>Off</a><span> | </span>" ).insertBefore("a[onclick*='gamePage.ui.hideChat();']");
$( "<a href='#' onclick='bot.start()'>Start</a><span> </span><a href='#' onclick='bot.start(1)'>1</a><span> </span><a href='#' onclick='bot.start(2)'>2</a><span> </span><a href='#' onclick='bot.start(3)'>3</a><span> </span><a href='#' onclick='bot.start(4)'>4</a><span> | </span>" ).insertBefore("a[onclick*='bot.trade(1)']");
// $( "<a href='#' onclick='bot.start()'>Start</a><span> </span><a href='#' onclick='bot.start(1)'>1</a><span> </span><a href='#' onclick='bot.start(2)'>2</a><span> </span><a href='#' onclick='bot.start(3)'>3</a><span> </span><a href='#' onclick='bot.start(4)'>4</a><span> </span><a href='#' onclick='bot.start(10,20,30,40)'>Off</a><span> | </span>" ).insertBefore("a[onclick*='bot.trade(1)']");
$( "<a href='#' onclick='bot.export()'>Export</a><span> </span><a href='#' onclick='bot.import()'>Import</a><span> | </span>" ).insertBefore("a[onclick*='bot.start()']");
