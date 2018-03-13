// ==UserScript==
// @name         Kittens Game Automation
// @namespace    https://github.com/Alistair1231/Kittens-Game-automation-and-tools
// @version      0.3.0
// @description  Auto craft resources when full, auto pray, auto hunt, auto trade, fast autosave, simple save export/import, ...
// @author       Alistair1231
// @match        http*://bloodrizer.ru/games/kittens/*
// @grant        none
// @license GPL-3.0
// @copyright 2018, Alistair1231 (https://openuserjs.org/users/Alistair1231)
// @run-at document-idle
// ==/UserScript==

// ==OpenUserJS==
// @author Alistair1231
// ==/OpenUserJS==

var script='<script src="https://rawcdn.githack.com/Alistair1231/Kittens-Game-automation-and-tools/1833db9/kittens.js"></script>';
var script2='<script>let bot = new kittenBot();'+
	'bot.init();'+
	'bot.export();</script>';
var ln1="<a href='#' onclick='bot.trade(1)'>Trade</a><span> | </span>";
var ln2="<a href='#' onclick='bot.start(1)'>1</a><span> </span><a href='#' onclick='bot.start(2)'>2</a><span> </span>"+
	"<a href='#' onclick='bot.start(3)'>3</a><span> </span><a href='#' onclick='bot.start(4)'>4</a><span> | </span>"+
	"<span> </span><a href='#' onclick='bot.pray()'>Pray</a><span> | </span><span> </span>"+
	"<a href='#' onclick='bot.craft()'>Craft</a><span> | </span><span> </span>"+
	"<a href='#' onclick='bot.hunt()'>Hunt</a><span> | </span>";
var ln3="<a href='#' onclick='bot.exportSave()'>Export</a><span> </span><a href='#' onclick='bot.importSave()'>Import</a>"+
	"<span> </span><a href='#' onclick='bot.stop()'>Stop</a><span> | </span>";

$(script).insertBefore("div[id*='gamePageContainer']");
setTimeout(function(){
	$(script2).insertBefore("a[onclick*='gamePage.ui.hideChat();']");
	},2000);
$(ln1).insertBefore("a[onclick*='gamePage.ui.hideChat();']");
$(ln2).insertBefore("a[onclick*='bot.trade(1)']");
$(ln3).insertBefore("a[onclick*='bot.start(1)']");