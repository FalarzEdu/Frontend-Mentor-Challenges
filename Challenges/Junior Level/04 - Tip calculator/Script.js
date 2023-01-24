
var bill = 0;
var personNumber = 0;
var percentage = 0;

document.querySelector("#bill").addEventListener('keyup', () => { bill = parseFloat(document.querySelector("#bill").value) });
document.querySelector("#nbrPerson").addEventListener('keyup', () => { personNumber = parseFloat(document.querySelector("#nbrPerson").value) });

function changeColor(button) {
    const btn = document.getElementById(button);
    const array = Array.from(document.querySelector('#btn').querySelectorAll('button'));

    for (var i = 0; i < array.length; i++) {
        document.getElementById(array[i].id).classList.remove('active');
    }

    if (btn.id != "custom") {
        document.querySelector("#custom").value = '';
        btn.classList.add("active");
        percentage = (parseFloat(btn.innerHTML)) / 100;
    }
    else {
        percentage = (parseFloat(btn.value)) / 100;
    }
}

function validation(elemen) {
    const elm = document.getElementById(elemen);
    const elmValue = parseFloat(elm.value);
    const small = elm.parentElement.querySelector('div').querySelector('small');

    if (elmValue == 0) {
        elm.style.borderColor = 'red';
        small.innerHTML = "Can't be zero!";
        small.style.visibility = 'visible';
    }
    else if ((elmValue > -Infinity && elmValue < Infinity) == false) {
        elm.style.borderColor = 'red';
        small.innerHTML = "Can't be blank!";
        small.style.visibility = 'visible';
    }
    else if ((elmValue > 0 && elmValue < Infinity) == false) {
        elm.style.borderColor = 'red';
        small.innerHTML = "Can't be negative!";
        small.style.visibility = 'visible';
    }
    else {
        elm.style.borderColor = 'hsl(189, 41%, 97%)'
        small.innerHTML = "";
        small.style.visibility = 'hidden';
    }

}

document.querySelector("#bill").addEventListener('keyup', valueCalc);
document.querySelector("#nbrPerson").addEventListener('keyup', valueCalc);
document.querySelector("#custom").addEventListener('keyup', valueCalc);
document.querySelector("#custom").addEventListener('click', valueCalc);

function valueCalc() {

    const cust = document.querySelector('#custom').value;

    if ((cust != '' || percentage != 0) && (bill != 0) && (bill > 0 && bill < Infinity) && (percentage >= 0 && percentage < Infinity) && (personNumber != 0) && (personNumber > 0 && bill < Infinity)) {

        document.querySelector('#tipNumber').innerHTML = "$" + ((bill * percentage) / personNumber).toFixed(2);
        document.querySelector('#totalNumber').innerHTML = "$" + ((bill + (bill * percentage)) / personNumber).toFixed(2);
        document.querySelector('#resetBtn').style.backgroundColor = 'hsl(172, 67%, 45%)';
    }
    else {
        document.querySelector('#tipNumber').innerHTML = "$" + "0.00";
        document.querySelector('#totalNumber').innerHTML = "$" + "0.00";
        document.querySelector('#resetBtn').style.backgroundColor = 'hsl(186, 80%, 23%)';
    }
}

document.querySelector('#resetBtn').addEventListener('mouseover', () => {
    if (document.querySelector('#totalNumber').innerHTML != '$0.00') {
        document.querySelector('#resetBtn').style.backgroundColor = 'hsl(175, 48%, 76%)'
    }
})

document.querySelector('#resetBtn').addEventListener('mouseout', () => {
    if (document.querySelector('#totalNumber').innerHTML != '$0.00') {
        document.querySelector('#resetBtn').style.backgroundColor = 'rgb(37, 191, 171)'
    }
})

document.querySelector('#resetBtn').addEventListener('click', () => {
    if (document.querySelector('#totalNumber').innerHTML != '$0.00') {

        const array = Array.from(document.querySelector('#btn').querySelectorAll('button'));
        bill = 0;
        personNumber = 0;
        percentage = 0;

        document.querySelector('#bill').value = '';
        document.querySelector('#nbrPerson').value = '';
        document.querySelector('#tipNumber').innerHTML = '$0.00';
        document.querySelector('#totalNumber').innerHTML = '$0.00';
        valueCalc();

        for (var i = 0; i < array.length; i++) {
            document.getElementById(array[i].id).classList.remove('active');
        }
        document.querySelector("#custom").value = '';

    }
})

