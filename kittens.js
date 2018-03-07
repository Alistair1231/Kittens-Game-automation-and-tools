var bot = (
    function() 
    {
        
        return{
            export:function()
            {
            	$(".exported").remove();
                gamePage.saveExport();
                var text = $("textarea[id*='exportData']").val();
                console.log(text);
                $('#exportDiv').hide();
				$( "<div class='exported'><span id='exportedVal'>"+text+"</span></div>" ).insertBefore("a[onclick*='bot.export()']").hide();
				copyToClipboard("#exportedVal");
            },
            import:function()
            {
            	$('#importDiv').show();
            	$("#importData").select();
            		
            },
            trade:function()
            {
            	console.log('zebras:1/10');
            	for (var i = arguments.length - 1; i >= 0; i--) {
            		if(arguments[i]==1)
	            		zebras=setInterval(function(){gamePage.diplomacy.tradeAll(gamePage.diplomacy.get('zebras'));},10000);	
            		if(arguments[i]==10)
	            		clearInterval(zebras);	            	
            	};

            },
            start:function()
            {
                console.log("'compedium','manuscript','blueprint'");
                if(arguments.length>=1)
                {
                    var length = 15000;
                    for (var i = arguments.length - 1; i >= 0; i--) {
                        if(arguments[i]==30)
                        	clearInterval(compedium);
                        if(arguments[i]==3)
                            compedium = setInterval(function(){gamePage.craftAll('compedium');},length);
                        
                        if(arguments[i]==20)
                        	clearInterval(manuscript);
                        if(arguments[i]==2)
                            manuscript = setInterval(function(){gamePage.craftAll('manuscript');},length);

                        if(arguments[i]==10)
                        	clearInterval(parchment);
                        if(arguments[i]==1)
                            parchment = setInterval(function(){gamePage.craftAll('parchment');},length);
                		
                        
                        if(arguments[i]==40)
                        	clearInterval(blueprint);
                        if(arguments[i]==4)
                            blueprint = setInterval(function(){gamePage.craftAll('blueprint');},length);
                		
                		if(arguments[i]=='autoHunt')
                			clearInterval(autoHunt);    	
              			

		                // clearInterval(starClick);
		                // clearInterval(autoCraft);
		                // clearInterval(autoPray);
		                // clearInterval(autoObserve);

                    };
                }

                
                starClick = setInterval(function() 
                {
                    $("#gameLog").find("input").click();
                }, 2 * 1000);

                autoObserve = setInterval(function() 
                {
                    $("input[id*='observeBtn']").click();
                },10*1000);


                autoHunt = setInterval(function() 
                {
                    var catpower = gamePage.resPool.get('manpower');
                    if (catpower.value / catpower.maxValue > 0.95) 
                    {
                        $("a:contains('Send hunters')").click();
                        if (gamePage.workshop.getCraft('parchment').unlocked) 
                        {
                            //gamePage.craftAll('parchment');
                        }
                        if (gamePage.workshop.getCraft('manuscript').unlocked) 
                        {
                            //gamePage.craftAll('manuscript');
                        }
                        if (gamePage.workshop.getCraft('compedium').unlocked) 
                        {
                            //gamePage.craftAll('compedium');
                        }
                        //if (gamePage.workshop.getCraft('blueprint').unlocked)  { gamePage.craftAll('blueprint');  }

                    }
                }, 5 * 1000);


                autoCraft = setInterval(function() 
                {
                    var resources = 
                    [
                        ["wood", "beam"],
                        ["minerals", "slab"],
                        ["coal", "steel"],
                        ["iron", "plate"]
                    ];

                    for (var i = 0; i < resources.length; i++) 
                    {
                        var curRes = gamePage.resPool.get(resources[i][0]);
                        if (curRes.value / curRes.maxValue > 0.95 &&
                            gamePage.workshop.getCraft(resources[i][1]).unlocked) 
                        {
                            gamePage.craft(resources[i][1],10);
                            gamePage.craft(resources[i][1],10);
                            gamePage.craft(resources[i][1],10);
                            gamePage.craft(resources[i][1],10);
                            gamePage.craft(resources[i][1],10);
                        }
                    }
                }, 2 * 1000);

                autoPray = setInterval(function() 
                {
                    if (faith.value / faith.maxValue > 0.95) 
                    {
                 		this.game.religion.praise();
                    }

                }, 10 * 1000);


            }

        }
})();


function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

save = setInterval(function()
{
    gamePage.saveUI();
}, 1000*15);