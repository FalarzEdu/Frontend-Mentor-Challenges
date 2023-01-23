/*

var percentage = 0;
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const cust = document.querySelector("#custom");

document.querySelector("#bill").addEventListener('keyup', calcTip);
document.querySelector("#nbrPerson").addEventListener('keyup', calcTip);

btn1.addEventListener('click', () => { btn1.classList.add("active"); btn2.classList.remove("active"); btn3.classList.remove("active"); btn4.classList.remove("active"); btn5.classList.remove("active"); cust.value = ""; percentage = 0.05; calcTip(); });

btn2.addEventListener('click', () => { btn2.classList.add("active"); btn1.classList.remove("active"); btn3.classList.remove("active"); btn4.classList.remove("active"); btn5.classList.remove("active"); cust.value = ""; percentage = 0.1; calcTip(); });

btn3.addEventListener('click', () => { btn3.classList.add("active"); btn1.classList.remove("active"); btn2.classList.remove("active"); btn4.classList.remove("active"); btn5.classList.remove("active"); cust.value = ""; percentage = 0.15; calcTip(); });

btn4.addEventListener('click', () => { btn4.classList.add("active"); btn1.classList.remove("active"); btn2.classList.remove("active"); btn3.classList.remove("active"); btn5.classList.remove("active"); cust.value = ""; percentage = 0.25; calcTip(); });

btn5.addEventListener('click', () => { btn5.classList.add("active"); btn1.classList.remove("active"); btn2.classList.remove("active"); btn3.classList.remove("active"); btn4.classList.remove("active"); cust.value = ""; percentage = 0.5; calcTip(); });

document.querySelector("#custom").addEventListener('click', () => { btn1.classList.remove("active"); btn2.classList.remove("active"); btn3.classList.remove("active"); btn4.classList.remove("active"); btn5.classList.remove("active"); percentage = 0; calcTip(); })
document.querySelector("#custom").addEventListener('keyup', () => {
    percentage = (parseFloat(document.querySelector("#custom").value) / 100);
    calcTip();
});

function calcTip() {
    const bill = Number(document.querySelector("#bill").value);
    const numberPerson = Number(document.querySelector("#nbrPerson").value);

    if ((bill > -Infinity && bill < Infinity) && bill != 0 && percentage != 0 && (numberPerson > -Infinity && numberPerson < Infinity) && numberPerson != 0) {
        document.querySelector("#tipNumber").innerHTML = "$" + ((bill * percentage) / numberPerson).toFixed(2);
        document.querySelector("#totalNumber").innerHTML = "$" + ((bill + (bill * percentage)) / numberPerson).toFixed(2);
    }
    else {
        document.querySelector("#tipNumber").innerHTML = "$0.00";
        document.querySelector("#totalNumber").innerHTML = "$0.00";
    }
}

*/

function changeColor(button) {
    var btn = document.getElementById(button);

    document.querySelector('#btn').querySelectorAll('button').forEach(classList.remove('active'));
    btn.classList.add("active");
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


