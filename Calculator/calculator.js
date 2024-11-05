let displayValue = ''; 


function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}

function clearDisplay() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}


function allClear() {
    displayValue = '';
    updateDisplay();

}


function toggleSign() {
    if(displayValue){
        if(displayValue.startsWith("-")){
            displayValue = displayValue.substring(1);
        }else{
            displayValue = "-" + displayValue;
        }
    }else{
        displayValue = "-"
    }
    updateDisplay();
}
function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}


function appendOperator(operator) {
   if(operator === '-' && displayValue === ''){
        displayValue = '-'
   } else if(displayValue && !isNaN(displayValue[displayValue.length-1])){
        displayValue += operator
   }
   updateDisplay();
}

function appendDot() {
    
   if(!displayValue.includes('.') ||/[+\-*/]/.test(display[displayValue.length-1])){
        displayValue += '.'
        updateDisplay();
   }
    
}


function calculatePercentage() {
    if(displayValue){
        displayValue = (parseFloat(displayValue)/100).toString()
        updateDisplay();
        
    }
}


function calculateResult() {
    try{
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error){
        displayValue = 'Error'
        updateDisplay();
        displayValue = '';
    }
}