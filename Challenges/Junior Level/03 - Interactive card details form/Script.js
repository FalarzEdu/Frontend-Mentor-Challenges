
//STORES EVERY INPUT FOR LATER USE
let submit = document.querySelector('#confirm');
let nameInp = document.querySelector('#nameInput')
let numberInp = document.querySelector('#numberInput')
let monthInp = document.querySelector('#monthInput')
let yearInp = document.querySelector('#yearInput')
let cvcInp = document.querySelector('#cvc')

//THESE FUNCTIONS TAKE THE INPUT VALUE AND WRITE IT IN THE CARD (IF THE USER LEAVE THE INPUTS BLANK THEY WILL RETURN TO THEIR GENERIC DATA)
function cardName() {
    const name = document.getElementById('nameInput').value.toUpperCase();
    document.getElementById('cardName').innerHTML = name;

    if (name == '') {
        document.getElementById('cardName').innerHTML = "JANE APPLESEED";
    }
}

function cardNumber() {

    let number = document.getElementById('numberInput').value.toUpperCase();

    const arr = number.split('');

    if (arr.length > 4) {
        arr.splice(4, 0, " ");
    }
    if (arr.length > 8) {
        arr.splice(9, 0, " ");
    }
    if (arr.length > 12) {
        arr.splice(14, 0, " ");
    }

    number = arr.join('');

    document.getElementById('cardNumber').innerHTML = number;

    if (number == '') {
        document.getElementById('cardNumber').innerHTML = "1234 5678 9123 0000";
    }

    return number;
}
function cardMonth() {
    const month = document.getElementById('monthInput').value.toUpperCase();
    document.getElementById('month').innerHTML = month;

    if (month == '') {
        document.getElementById('month').innerHTML = "MM";
    }
}
function cardYear() {
    const year = document.getElementById('yearInput').value.toUpperCase();
    document.getElementById('year').innerHTML = year;

    if (year == '') {
        document.getElementById('year').innerHTML = "YY";
    }
}
function cardCVC() {
    const cvc = document.getElementById('cvc').value.toUpperCase();
    document.getElementById('cardCode').innerHTML = cvc;

    if (cvc == '') {
        document.getElementById('cardCode').innerHTML = "123";
    }
}

//THIS EVENT LISTENER TRIGGER A FUNCTION THAT DOES NOT ALLOW THE BROWSER TO REFRESH AND PROCEEDS TO THE 'THANK YOU' PART BASED ON INPUTS VALIDATIONS
submit.addEventListener('click', (e) => {
    e.preventDefault();
    if (checkInputs() != false) {
        document.querySelector('#data').style.display = 'none';
        document.querySelector('#complete').style.display = 'flex';
    }
})

//THESE TWO FUNCTIONS MAKE THE BORDER CHANGE AND THE ERROR MESSAGE APPEAR OR DISAPPEAR IF THE INPUTS ARE VALID OR NOT
function genValidationInvalid(input, message) {
    const parent = input.parentElement;
    const small = parent.querySelector('small');
    small.innerHTML = message;
    input.className = 'invalid';
    small.className = 'smallInvalid';
}

function genValidationCorrect(input) {
    const parent = input.parentElement;
    const small = parent.querySelector('small');
    input.className = 'valid';
    small.className = 'smallValid';
}

//HERE ARE THE INPUTS VALIDATION FUNCTION
function checkInputs() {

    //NAME VALIDATION
    if (nameInp.value == '') {
        genValidationInvalid(nameInp, "Can't be blank");
    }
    else if (nameInp.value.match(/[0-9]/g) != null) {
        genValidationInvalid(nameInp, "Wrong format, letters only");
    }
    else {
        genValidationCorrect(nameInp);
    }
    //CREDIT NUMBER VALIDATION
    if (numberInp.value == '') {
        genValidationInvalid(numberInp, "Can't be blank")
    }
    else if (numberInp.value.match(/[a-zA-Z]/g) != null) {
        genValidationInvalid(numberInp, "Wrong format, numbers only")
    }
    else if (numberInp.value.split('').length < 16) {
        genValidationInvalid(numberInp, "Must have 16 (sixteen) digits")
    }
    else {
        genValidationCorrect(numberInp);
    }
    //MONTH VALIDATION
    if (monthInp.value == '') {
        genValidationInvalid(monthInp, "Can't be blank")
    }
    else if (monthInp.value > 12 || monthInp.value == 0) {
        genValidationInvalid(monthInp, "Invalid month")
    }
    else {
        genValidationCorrect(monthInp);
    }
    //YEAR VALIDATION
    if (yearInp.value == '') {
        genValidationInvalid(yearInp, "Can't be blank")
    }
    else {
        document.querySelector('#yearInput').className = 'valid';
    }
    //SECURITY CODE VALIDATION
    if (cvcInp.value == '') {
        genValidationInvalid(cvcInp, "Can't be blank")
    }
    else if (cvc.value.split('').length < 3) {
        genValidationInvalid(cvcInp, "Must have 3 (three) digits")
    }
    else {
        genValidationCorrect(cvcInp);
    }

    //CHECKS IF ALL INPUTS ARE VALID TO CONTINUE
    const inps = document.querySelectorAll('input');
    for (i = 0; i < 5; i++) {
        if (inps.item(i).classList.contains('invalid')) {
            console.log(inps.item(i).classList.contains('invalid'))
            return false;
        }
    }

}

//RESETS EVERYTHING WHEN THE USER HITS THE BUTTON 'CONTINUE' AFTER INPUTS WERE FILLED AND SENT
document.querySelector('#continue').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#data').style.display = 'flex';
    document.querySelector('#complete').style.display = 'none';
    nameInp.value = '';
    numberInp.value = '';
    monthInp.value = '';
    yearInp.value = '';
    cvcInp.value = '';
    cardName();
    cardNumber();
    cardMonth();
    cardYear();
    cardCVC();
})




