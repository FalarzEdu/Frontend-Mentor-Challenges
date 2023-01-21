var percentage = 0;
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const cust = document.querySelector("#custom");

document.querySelector("#bill").addEventListener('keyup', calcTip);
document.querySelector("#nbrPerson").addEventListener('keyup', calcTip);

//document.querySelector("#bill").addEventListener('focusout', () => {});
//document.querySelector("#nbrPerson").addEventListener('focusout', invalid);

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

    if (bill != NaN && bill != 0 && percentage != 0 && numberPerson != NaN && numberPerson != 0) {
        document.querySelector("#tipNumber").innerHTML = "$" + ((bill * percentage) / numberPerson).toFixed(2);
        document.querySelector("#totalNumber").innerHTML = "$" + ((bill + (bill * percentage)) / numberPerson).toFixed(2);
    }
    else {
        document.querySelector("#tipNumber").innerHTML = "$0.00";
        document.querySelector("#totalNumber").innerHTML = "$0.00";
    }
}


