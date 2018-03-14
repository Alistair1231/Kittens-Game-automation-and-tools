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

var script='<script src="https://rawcdn.githack.com/Alistair1231/Kittens-Game-automation-and-tools/f736cbf/kittens.js"></script>';
var script2='<script>let bot = new kittenBot();'+
	'bot.init();'+
	'bot.export();</script>';
var ln1="<br>"+
		"<div id='tableBot'>"+
			"<table>"+
	    	"<tr>"+
		    	"<td>"+
	    			"<input type='checkbox' name='1' value='1'>1</input>"+
		    	"</td>"+
		    	"<td>"+
					"<input type='checkbox' name='pray' value='pray'>Pray</input>"+
		    	"</td>"+
		    	"<td>"+
					"<a href='#' onclick='bot.run()'>Run</a>"+
		    	"</td>"+
	    	"</tr>"+
	    	"<tr>"+
	    		"<td>"+
	    			"<input type='checkbox' name='2' value='2'>2</input>"+
	    		"</td>"+
		    	"<td>"+
					"<input type='checkbox' name='hunt' value='hunt'>Hunt</input><span> </span>"+
		    	"</td>"+
		    	"<td>"+
					"<a href='#' onclick='bot.stop()'>Stop</a>"+
		    	"</td>"+
	    	"</tr>"+
	    	"<tr>"+
	    		"<td>"+
	    			"<input type='checkbox' name='3' value='3'>3</input>"+
	    		"</td>"+
		    	"<td>"+
					"<input type='checkbox' name='craft' value='craft'>Craft</input><span> </span>"+
		    	"</td>"+
		    	"<td>"+
					"<a href='#' onclick='bot.exportSave()'>Export</a>"+
		    	"</td>"+
	    	"</tr>"+
	    	"<tr>"+
	    		"<td>"+
	    			"<input type='checkbox' name='4' value='4'>4</input>"+
	    		"</td>"+
		    	"<td>"+
					"<span> </span>"+
		    	"</td>"+
		    	"<td>"+
					"<a href='#' onclick='bot.importSave()'>Import</a>"+
		    	"</td>"+
	    	"</tr>"+
	    	"</table>"+
	    "</div>";
var ln2="<a href='#' onclick='bot.exportSave()'>Export</a>"+
		"<span> </span>"+
		"<a href='#' onclick='bot.importSave()'>Import</a>"+
		"<span> </span>"+
		"<a href='#' onclick='bot.stop()'>Stop</a>"+
		"<br>"+
		"<span> | </span>";

$(script).insertBefore("div[id*='gamePageContainer']");
setTimeout(function(){
	$(script2).insertBefore("a[onclick*='gamePage.ui.hideChat();']");
	},2000);
$(ln1).insertBefore("a[onclick*='gamePage.ui.hideChat();']");
$(ln2).insertBefore("div[id*='tableBot']");
