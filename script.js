/* This is the Java Script page For the 100 Emoji's code Program to display 
100 Emoji Div Boxes and Emojis on display*/
 
/*Setting the variable emojis by getting the id*/
const $emojis = document.getElementById('emojis');


/* This is the For loop to add emoji's to the Page up to 100 emojis */

for (let i = 129409; i < 129509; i++) {
   
/* This is the code to inject the inner HTML into the javascript page */
    
    $emojis.innerHTML += 
 `<div class= "emoji" style="text-align: center;">
<span style = "font-size: 4rem;">&#${i}</span>
<code>${i}</code>
</div>`

    
}
