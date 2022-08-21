
function getResult(ElementId) {
    const element = document.getElementById(ElementId);
    const value = element.value;
    const isString = parseInt(value);
    element.value = '';
    return isString;
}

function getText(text, innerText) {
    const textElement = document.getElementById(text);
    textElement.innerText = innerText;        
}

document.getElementById('btn-result').addEventListener('click', function(){
    const incomeValue = getResult('income-value');
    const foodValue = getResult('food-value');
    const rentValue = getResult('rent-value');
    const othersValue = getResult('others-value');
    const getExpenese = foodValue + rentValue + othersValue;
    const getBalence = incomeValue - getExpenese;
    const saveParsentage = incomeValue * .3;
    const remaingBalence = getBalence - saveParsentage;
    getText('Total-Expenses',getExpenese);
    getText('Total-Balence',getBalence);
    getText('Total-Saving',saveParsentage);
    getText('Remaing-Balence',remaingBalence);

})