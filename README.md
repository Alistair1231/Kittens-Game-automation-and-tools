# Kittens-Game-automation-and-tools  
- **auto pray** clicks pray when faith full  
- **auto workshop** craft resources when full  
  - only when > 95% full and doesn't craft all so you have always some available  
  	- now also concrete crafting while 90000 < slab < 120000 and alloy if titanium full  
- **auto hunt** when catpower full  
  - 1,2,3 and 4 stand for parchment, manuscript, compendium, blueprint  
- **auto trade** trade button enables auto trade with zebras but if uranium amount is < 5, it will trade for that first  
- **export/import** makes savegame export and _copies code to clipboard_ // import only opens import window and selects the textarea, because I couldn't get pasting to work. but simply ctrl-v tab return return does the trick...  
- **auto observe** auto collection of star charts.  
- **autosave** autosave delay set from 400 ticks (I think totally forgot, pretty long though), to 20 ticks (like 3 seconds)

Install from [here](https://greasyfork.org/en/scripts/39218-kittens-game-automation), If you can't, install [this](http://tampermonkey.net/) first  
[Github](https://github.com/Alistair1231/Kittens-Game-automation-and-tools) if you want to stay up to date, or if you have suggestions or issues..  

originally based off of the code snippets in [this](https://redd.it/2eqlt5) Reddit Thread    
  
### Changelog  
```
- hopefully fix off button  
- removed off bittons for now and changed craft 50 to 5 times craft 10, so that you can autocraft steel early game  
- added basic import function  
- fixed auto pray  
- fixed prraying... v2  
- uranium trade added  
- reworked functions, autosave, unlocked  
- start isn't use by itself anymore so removed it  
- autosave delay 20  
- fixed save  
- trading fixed for less than 250 titan and less than 5 uranium  
- added auto titanium to alloy conversion  
- added concrete crafting while slab between 120000 and 90000  
```