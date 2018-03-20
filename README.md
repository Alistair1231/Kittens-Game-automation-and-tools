# Kittens-Game-automation-and-tools  

> #### Hey there my fellow KG addicts. :D  
> #### I was pretty annoyed with wasting so much resources and all the grind, so that I at first looked for some scripts to automate some game aspects. 
> #### I started to use the snippets from [this](https://redd.it/2eqlt5) Reddit thread, but then started to write my own Userscript based on the snippets. The Userscript (kittens.user.js) only handles the UI, the rest is done in kittens.js, which gets injected via the userscript. 
> #### At this time there is nearly nothing of the code snippets left in my script and I integrated a simple UI: ![screen](https://i.imgur.com/wmIclj9.png)
>> I use a modified CSS, the script only adds the stuff above the chat button  

> #### Also I added a lot of features.
> #### I waited before posting the script, so that you get the script with the new UI. Everything *should* work, I use the script daily myself... 
> #### If somthing is broken or if you want to suggest/request something, feel free to check out the [GitHub](https://github.com/Alistair1231/Kittens-Game-automation-and-tools) page. I usually answer pretty quick. I am no master of JS or anything like that, so if you have suggestions for improvements, just tell me. :) 
> #### The script is published under GPL, so feel free to modify it, fork it, or whatever, as long as you publish it under GPL as well in the end ([more info](https://choosealicense.com/licenses/gpl-3.0/)) 
> #### If some of you just want to use it as a script from the js console, then just say so and I will add a quick usage guide for the functions... 

- **UI** now with better UI. just check the boxes you want and click run. *Also planned is saving the state of the checkboxes together with the Kittens Game save. For now, some are prechecked.*
- **auto pray** clicks pray when faith full  
- **auto workshop** craft resources when full  
  - only when > 95% full and doesn't craft all so you have always some available  
  	- now also concrete crafting while 90000 < slab < 120000 and alloy if titanium full and steel amount > 10% of max coal amount   
- **auto hunt** when catpower full  
  - 1,2,3 and 4 stand for auto crafting of parchment, manuscript, compendium, blueprint  
- **auto trade** trade button enables auto trade with zebras but if uranium amount is < 5, it will trade for that first  
- **export/import** makes savegame export and _copies code to clipboard_ // import only opens import window and selects the textarea, because I couldn't get pasting to work. but simply ctrl-v tab return return does the trick...  
- **stop** script uses setInterval for automation, stop button runs clearInterval for everything, apart from observe, so that you don't have to reload the site if you want to stop autoTrade for example.  
- **auto observe** auto collection of star charts.  
- **autosave** autosave delay set to 20 ticks (approx 3 seconds)

Install from [here](https://greasyfork.org/en/scripts/39218-kittens-game-automation) or [here](https://openuserjs.org/scripts/Alistair1231/Kittens_Game_Automation), If you can't, install [this](http://tampermonkey.net/) first  
[GitHub](https://github.com/Alistair1231/Kittens-Game-automation-and-tools) if you want to stay up to date, or if you have suggestions or issues..  

originally based off of the code snippets in [this](https://redd.it/2eqlt5) Reddit Thread    
  
### Changelog (new to old)  
```
- Finally completly reworked UI! 
- reworked kittens.js so that it now is a class, bc of that  
  now clearInterval does what it's supposed to, so readded stop button
- readded concrete, tweaked alloy`so that it only crafts  
  when titanium >0.95 full, while also steel amount >  0.1 * maxCoal  
  so that there is always steel available  
- concrete crafting freezes page every time removed it for now...  
- added concrete crafting while slab between 120000 and 90000  
- added auto titanium to alloy conversion  
- trading fixed for less than 250 titan and less than 5 uranium  
- fixed save  
- autosave delay 20  
- start isn't use by itself anymore so removed it  
- reworked functions, autosave, unlocked  
- uranium trade added  
- fixed prraying... v2  
- fixed auto pray  
- added basic import function  
- removed off bittons for now and changed craft  
  50 to 5 times craft 10, so that you can autocraft steel early game
- hopefully fix off button    
```
