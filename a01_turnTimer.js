const minus = document.querySelector("#minus");
const plus  = document.querySelector("#plus");
const turnTime = document.querySelector("#turnTime");
const set = document.querySelector("#set");
const reset = document.querySelector("#reset");
const overlay = document.querySelector("#overlay");
const setUpModal = document.querySelector("#setUpModal");
const clock = document.querySelector("#clock");
const playerABtn = document.querySelector("#playerA");
const playerBBtn = document.querySelector("#playerB");
const turnOverLayer = document.querySelector("#turnOverLayer");
const messenger = document.querySelector("#messenger");
const stopButton = document.querySelectorAll("#stopButton");
const updated_mins = document.querySelector("#minsClock");
const updated_seconds = document.querySelector("#secondsClock");

//declaretion
const ring = new Audio("./sounds/ring.wav");

let seconds;
let stopTimer = false

const preSetTime = 3;
let totalTime = preSetTime; 
//let timeInSeconds = totalTime * 60;

const timer = (mins) => { //OK
    seconds = mins * 60 || 0;     
    let interval = setInterval(() => {
        if (seconds === 2){
            showMessenger()
        }

         seconds--;
         updateClock(seconds)
         if(!seconds){
              clearInterval(interval); 
              hideMessenger()
              ring.play();            
         }
 
    },1000)
 };

const formatStr  = (numStr) => { //OK
    numStr = numStr.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    return numStr;
};

const displayTimeSetUp = (currentTime) => {
    //this take care of the time choice set up only
    totalTime = formatStr(currentTime)
    turnTime.textContent = totalTime;
}


const updateClock = (seconds) => {
    const mins = 60;
    let minsLeft = seconds / mins;
    if (minsLeft < 1){
        minsLeft = 0;
    }else{
        minsLeft = Math.floor(minsLeft)
    }
    seconds -= minsLeft * mins;

    minsLeft = formatStr(minsLeft)
    seconds = formatStr(seconds)
       
    console.log(minsLeft, ':', seconds)
    updated_mins.textContent = minsLeft
    updated_seconds.textContent = seconds
};

const resetTime = () => { //OK
    totalTime = preSetTime;
    displayTimeSetUp(totalTime);
}; 

const subs = () => { //OK
    console.log(typeof totalTime)
    if (totalTime > 1) {
        totalTime -=1
        displayTimeSetUp(totalTime);
    }else{
        console.log("minimun time is 1 min")
        //alert("minimun time is 1 min")
    }
};

const adds = () => {//OK
    
    console.log(typeof totalTime)
    if (totalTime < 60) {
        totalTime -= 1;
        totalTime += 2;
        console.log(totalTime)
        displayTimeSetUp(totalTime)
    }else{
        console.log("max time is 60 min")
        alert("max time is 60 min")
    }
};

const startApp = () => {   
    
    overlay.style.display = "none";
    let mins = turnTime.textContent;
    totalTime = mins
    totalTime -= 1
    totalTime += 1
    mins = formatStr(mins)
    let timeInSeconds = mins * 60
    let seconds = timeInSeconds - mins * 60;
    seconds = formatStr(seconds)
    console.log("seconds in startApp", seconds)
    updated_mins.textContent = mins
    updated_seconds.textContent = "00"
}

const showMessenger = () => {
    messenger.className = ""
}

const hideMessenger = () => {
    messenger.className = "invisible"
}

const activatePlayerA  = () => {
    if (playerABtn.className.includes("standBy")){
        playerABtn.className = "active"
        playerBBtn.className = "inactive"
        playerABtn.textContent = "X"
        timer(totalTime)
    }else if(playerABtn.className.includes("active")){
        stopClock()
        playerBBtn.className = "standBy"
        playerABtn.className = "inactive"
    }
}

const stopClock = () => {
    if (seconds != 2){
        seconds = 2
    }
}

const activatePlayerB  = () => {
    if (playerBBtn.className.includes("standBy")){
        playerBBtn.className = "inactive"
        playerBBtn.className = "active"
        playerABtn.className = "active"
        playerABtn.className = "inactive"
        timer(totalTime)
    }else if(playerBBtn.className.includes("active")){
        stopClock()
        playerABtn.className = "standBy"
        playerBBtn.className = "inactive"
    }
   
}


//execution
displayTimeSetUp(preSetTime);

const appStart = (e) => {
    if (e.path[0].id == "playerA"){
        console.log("playerA activated")
        activatePlayerA()


    }else if(e.path[0].id == "playerB"){
        console.log("playerB activated")
        activatePlayerB()
    }
}


//event listeners
minus.addEventListener("click", subs);
plus.addEventListener("click", adds);
reset.addEventListener("click", resetTime);
set.addEventListener("click", startApp);
playerABtn.addEventListener("click", appStart)
playerBBtn.addEventListener("click", appStart)




/*
stopButton.forEach(button => {
    if (button.classList.includes("active")){

    }else{
        button.classList = ""
        button.classList.add("inactive");
    }
    
})



const startApp = () => {
    
    overlay.style.display = "none";
    mins = Math.floor(timeInSeconds / 60);
    seconds = timeInSeconds - (mins * 60);
    console.log(timeInSeconds, `${mins}:${seconds}`)
    clock.textContent = `${mins}:${seconds}`;
}







const updateClock = (seconds) => {
    const hour = 3600;
    const mins = 60;
    let hoursLeft = seconds / hour;
    if (hoursLeft < 1){
        hoursLeft = 0;
    }else{
        hoursLeft = Math.floor(hoursLeft)
    }
    seconds -= hoursLeft * hour;
    let minsLeft = seconds / mins;
    if (minsLeft < 1){
        minsLeft = 0;
    }else{
        minsLeft = Math.floor(minsLeft)
    }
    seconds -= minsLeft * mins;

    hoursLeft = hoursLeft.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
      minsLeft = minsLeft.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
      seconds = seconds.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      })
    
      
    
      
    console.log(hoursLeft, ':', minsLeft, ':', seconds)
    const updated_hours = document.querySelector("#hours");
    const updated_mins = document.querySelector("#mins");
    const updated_seconds = document.querySelector("#seconds");
    updated_hours.textContent = hoursLeft;
    updated_mins.textContent = minsLeft;
    updated_seconds.textContent = seconds;
};
*/