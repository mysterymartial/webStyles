let displayValue ="0";
function appendNumber(number){
    if(displayValue == '0') displayValue =''
    displayValue += number;
    updateDisplay();
}
function appendOperator(operator){
    displayValue += ' ' + operator + ' ';
    updateDisplay(); 
}
function appendDot(){
    if(!displayValue.includes('.')){
        displayValue += '.';
        updateDisplay();
    }
}
function clearDisplay(){
    if(displayValue.length > 1){
        displayValue = displayValue.slice(0,-1);
    }else{
        displayValue = "0";
    }
    updateDisplay();
        

}
function allClear(){
    displayValue = '0';
    updateDisplay();
}
function toggleSign(){
    if(displayValue.includes(' ')){
        let parts = displayValue.split(' ');
        let lastPart = parts.pop();
        parts.push(lastPart.startsWith('-') ? lastPart.slice(1) : '-' + lastPart);
        displayValue = parts.join(' ');
}else{
    displayValue = displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue;
}
updateDisplay();
}
function updateDisplay(){
    document.getElementById('display').value = displayValue;
}