const inputCalc = document.querySelector('.account'),
resultCalc = document.querySelector('.result');


function input(i) {
    inputCalc.value = inputCalc.value + i
}

function result() {
    if (eval(inputCalc.value) == undefined) {
        resultCalc.value = '0,00';
        inputCalc.value = '0,00';
    }
    if (eval(inputCalc.value) == Infinity) {
        resultCalc.value = '0,00';
        inputCalc.value = 'Деление на ноль не допускается!';
    }
    resultCalc.value = eval(inputCalc.value);
    inputCalc.value = eval(inputCalc.value);
}

function backspace() {
    // inputCalc.value = inputCalc.substring(0, inputCalc.value.lenght - 1);
    
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, exp.lenght-1)
    
    
}

function reset() {
    resultCalc.value = '';
    inputCalc.value = '';
}