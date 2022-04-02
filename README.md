# Major Contribution and Thanks to

My Parents

CodeWithHarry

## Used JavaScript code in this website - by CodeWithHarry

```javascript
// JavaScript Code Starts - by CodeWithHarry
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');

let screenValue = "";

for (item of buttons) {
     item.addEventListener('click', (e) => {
          buttonText = e.target.innerText;
          console.log(buttonText);

          if (buttonText == 'C') {
               screenValue = "";
               screen.value = screenValue;
          }
          else if (buttonText == '=') {
               answer = eval(screen.value);
               screen.value = '';
               screen.value = answer;
          }
          else if (buttonText == '←') {
               array = screen.value.split('');
               array.pop();
               screen.value = array.join('');
          }
          else {
               screenValue += buttonText;
               screen.value += buttonText;
          }

     })
}

```

## Description 
I've learnt HTML, CSS and JavaScript (in-short Web developement) by watching only CodeWithHarry's videos and playlists. And now only in 1 year, a 14-year old child can make fully responsive digital calculator. So, a lot of thanks to CodeWithHarry contribution to our Programming society by uploading courses of paid content at no cost.
## CodeWithHarry's Main Website Link
[CodeWithHarry.com](https://www.codewithharry.com/)
