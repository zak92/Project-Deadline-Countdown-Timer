var update;

/*
Calculates the duration in days, hours, minutes, seconds
between the current date and the countdown date
*/

function targetDate(){
    
    //retrieve the time entered by the user
    var timeCount = document.getElementById("day").value;
    //get the cuurent date as per computer time and convert to milliseconds
    var currentDate = new Date().getTime();
    //convert the date entered by the user into milliseconds
    var countDownDate = new Date(timeCount).getTime();

    var difference = countDownDate - currentDate;
    
    //time calculations - convert milliseconds to days, hours, minutes, seconds
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    days = addZero(days);
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    
    //if the countdown date exceeds the current date
    if(difference > 0){
        document.querySelector(".timeDurationD").innerHTML = days + ": " ;
         document.querySelector(".timeDurationH").innerHTML = hours + ": ";
         document.querySelector(".timeDurationM").innerHTML =  minutes + ": " 
         document.querySelector(".timeDurationS").innerHTML = seconds;
        
        //every second the function targetDate is called; allows for the timer on 
        //screen to decrement 1 second every second
        update = setTimeout(targetDate, 1000);
        
        document.querySelector(".timeMeasureD").innerHTML = "DAYS ";
        document.querySelector(".timeMeasureH").innerHTML =  "HOURS ";
        document.querySelector(".timeMeasureM").innerHTML = "MIN ";
        document.querySelector(".timeMeasureS").innerHTML = "SEC";
        document.querySelector(".deadline").innerHTML = " ";
    }
    
     //if the current date exceeds the countdown date, the deadline has passed
    else {
        document.querySelector(".deadline").innerHTML = "DEADLINE";
        document.querySelector(".timeDurationD").innerHTML = "00" + ": " ;
        document.querySelector(".timeDurationH").innerHTML = "00" + ": ";
        document.querySelector(".timeDurationM").innerHTML = "00" + ": " 
        document.querySelector(".timeDurationS").innerHTML = "00";
        
        deadline();
       
    }
}

/*
if the time duration in days, minutes, hoours and seconds is less than 10, 
then add a zero in frot of the number
*/
function addZero(x){
    if(x < 10){
        x = "0"+ x;
    }
    return x;
}

//stops the countdown
function stopTime(){
    clearTimeout(update);
}

//this is called when the timer counts down to zero
function deadline(){
    window.scrollTo(0, 690);
}

//Scrolls down when user clicks start button
var scrollDown = document.getElementById("start")

scrollDown.addEventListener("click", function(){
    window.scrollTo(0, 1200);
})

//Scrolls up when user clicks the stop button
var scrollUp = document.getElementById("stop")

scrollUp.addEventListener("click", function(){
    window.scrollTo(0, 0);
})