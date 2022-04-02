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
