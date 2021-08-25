var keys = document.getElementsByClassName('keys');
var screen = document.getElementById('screen');
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i < keys.length; i++){
    keys[i].addEventListener('click', function (){
        var value = this.getAttribute('data-value');
        if(value=='ac'){
            screen.innerText = '';
        }
        else if(value=='+' || value=='-' || value=='*' || value=='/'){
            operator = value;
            operand1 = screen.innerText;
            if(operand1 == 0){
                screen.innerText = 'Choose a Number'
            }
            else{
                screen.innerText = '';
            }
        }
        else if(value=='%'){
            if(operand1 == 0){
                screen.innerText = 'Choose a Number'
            }
            else{
                var s = screen.innerText;
                screen.innerText = s/100;
            }
        }
        else if(value=='='){
            operand2 = screen.innerText;
            var result = eval(operand1 + operator + operand2);
            if(result == 'Infinity'){
                screen.innerText = 'ERROR';
            }
            else{
                screen.innerText = result;
            }
        }
        else if(value == '+-'){
            var s = screen.innerText;
            if(s == ''){
                screen.innerText = '-';
            }
            else if(s == '-'){
                screen.innerText = '';
            }
            else{
                screen.innerText = s * (-1);
            }
        }
        else{
            screen.innerText += value;
        }
        
    });
}









