
document.getElementById("btn").addEventListener("click", variableCharts); // Activate the function whenever the button is pressed

function variableCharts() { //The function that makes everything works

    //The variables from input are collected here
    const monday = document.getElementById("mon");
    const tuesday = document.getElementById("tue");
    const wednesday = document.getElementById("wed");
    const thursday = document.getElementById("thu");
    const friday = document.getElementById("fry");
    const saturday = document.getElementById("sat");
    const sunday = document.getElementById("sun");

    //The variables are transformed into float in here
    const mon = parseFloat(monday.value);
    const tue = parseFloat(tuesday.value);
    const wed = parseFloat(wednesday.value);
    const thu = parseFloat(thursday.value);
    const fri = parseFloat(friday.value);
    const sat = parseFloat(saturday.value);
    const sun = parseFloat(sunday.value);


    //Little conditional to verify if all inputs are greater or equal to 0 and have data (inputs with no data would make everything work weirdly)
    if (((mon && tue && wed && thu && fri && sat && sun) !== isNaN) && (mon >= 0 && tue >= 0 && wed >= 0 && thu >= 0 && fri >= 0 && sat >= 0 &&
        sun >= 0)) {

        //This is where some important data is taken to perform all the calcs for the dynamic graphs
        const hg = window.getComputedStyle(document.querySelector(".graph")).getPropertyValue("height"); //Gets the max. height of the graphs based on an pre-existing CSS element 

        const dayname = window.getComputedStyle(document.querySelector(".dayname")).getPropertyValue("height")
        const daynameMargin = window.getComputedStyle(document.querySelector(".dayname")).getPropertyValue("margin-bottom")
        const daynameCorrect = parseFloat(dayname) + parseFloat(daynameMargin); //These two above just pick the values of the written elements to make sure the graph bars will base their height correctly (without this the bars sizes were higher than what they should be because the bars and the written content are inside the same flexbox)

        //Here we find the highest number to make the other graph's heights be based on this element
        const total = Math.max(mon, tue, wed, thu, fri, sat, sun);

        //This is where all inputs are added together and limited to have only 2 numbers after the comma
        const sumBefore = (mon + tue + wed + thu + fri + sat + sun);
        const sum = parseFloat(sumBefore.toFixed(2));

        //This displays the total spent over the weekend
        document.getElementById('totMoney').innerText = "$" + sum;

        //Here we compare the total spent over the current and the past week (i picked a random value for the past week just to implemente the function)
        const compareBefore = (((sum / 2500) * 100) - 100);
        const compare = parseFloat(compareBefore.toFixed(2));

        //This fragment just adds a "+" if the percentage is higher than 0
        sum >= 2500 ? document.getElementById('compareMoney').innerText = "+" + compare + "%" : document.getElementById('compareMoney').innerText = compare + "%";

        //Here is done the calc for the height of the graph bars (based on the higher of them)
        const percentMon = (mon) / (total);
        const percentTue = (tue) / (total);
        const percentWed = (wed) / (total);
        const percentThu = (thu) / (total);
        const percentFri = (fri) / (total);
        const percentSat = (sat) / (total);
        const percentSun = (sun) / (total);

        //This justs takes the maximum value for the bar's height and resize them according to their %
        const heightMon = ((parseFloat(hg) - parseFloat(daynameCorrect)) * percentMon);
        const heightTue = ((parseFloat(hg) - parseFloat(daynameCorrect)) * percentTue);
        const heightWed = ((parseFloat(hg) - parseFloat(daynameCorrect)) * percentWed);
        const heightThu = ((parseFloat(hg) - parseFloat(daynameCorrect)) * percentThu);
        const heightFri = ((parseFloat(hg) - parseFloat(daynameCorrect)) * percentFri);
        const heightSat = ((parseFloat(hg) - parseFloat(daynameCorrect)) * percentSat);
        const heightSun = ((parseFloat(hg) - parseFloat(daynameCorrect)) * percentSun);

        //And finally this part takes every single bar and modifies the CSS to show it for the user
        document.getElementById("chart1").style.height = heightMon + "px";
        document.getElementById("chart2").style.height = heightTue + "px";
        document.getElementById("chart3").style.height = heightWed + "px";
        document.getElementById("chart4").style.height = heightThu + "px";
        document.getElementById("chart5").style.height = heightFri + "px";
        document.getElementById("chart6").style.height = heightSat + "px";
        document.getElementById("chart7").style.height = heightSun + "px";

    }
    else {
        alert('One or more fields are invalid!') //If one or more spaces are invalid, an alert is shown to the user
    }
}