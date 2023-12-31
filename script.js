var date=document.querySelectorAll(".scheduletime")
let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    let period = "AM";
    if (hours === 0) {
      hours = 12;
    } else if (hours >= 12) {
      hours =(hours)- 12;
      period = "PM";
    }
  
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
  
    let clockHours = `${hours}`;
    let clockMinutes = `${minutes}`;
    let clockSeconds = `${seconds}`;
    let clockPeriod = `${period}`;
  
    document.getElementById("clock-hours").innerHTML = clockHours;
    document.getElementById("clock-minutes").innerHTML = clockMinutes;
    document.getElementById("clock-seconds").innerHTML = clockSeconds;
    document.getElementById("clock-period").innerHTML = clockPeriod;
    setTimeout(clock, 1000);
  
    let morningMessage = "Grab Some Healthy Breakfast!!!";
    let afternoonMessage = "Let's Have Some Lunch !!";
    let eveningMessage = `Stop Yawning, Get Some Tea..
          It's Just Evening!`;
    let nightMessage = "Close Your Eyes And Go To Sleep";
  
    let morningText = "Good Morning!! Wake Up !!";
    let afternoonText = "Good Afternoon !! Take Some Sleep";
    let eveningText = "Good Evening !!";
    let nightText = "Good Night !!";
    let image = document.getElementById("photo");
  
    if (period === "AM" && 0 <= hours && hours <= 12) {
      document.getElementById("greeting-message").innerHTML = morningMessage;
      document.getElementById("greeting-text").innerHTML = morningText;
      image.src = "Group 5183.svg";
    } else if (period === "PM") {
      if (period === "PM" && (hours === 12 || (0 <= hours && hours <= 3))) {
        document.getElementById("greeting-message").innerHTML = afternoonMessage;
        document.getElementById("greeting-text").innerHTML = afternoonText;
        image.src = "Component 31 – 1.svg";
      } else if (period === "PM" && 4 <= hours && hours <= 7) {
        document.getElementById("greeting-message").innerHTML = eveningMessage;
        document.getElementById("greeting-text").innerHTML = eveningText;
        image.src = "lunch_image@2x.png";
      } else {
        document.getElementById("greeting-message").innerHTML = nightMessage;
        document.getElementById("greeting-text").innerHTML = nightText;
        image.src = "Component 32 – 1.svg";
      }
    }
  };
  clock();

  let text=document.getElementById("greeting-text");

   function setAlarm(){
    let morningText = "Good Morning!! Wake Up !!";
    let afternoonText = "Good Afternoon !! Take Some Sleep";
    let eveningText = "Good Evening !!";
    let nightText = "Good Night !!";
    let image = document.getElementById("photo");
  
    let time = new Date();
      let hours = time.getHours();
      console.log(hours);
      console.log(date[0].value);
      console.log(date[1].value);
      console.log(date[2].value);
      console.log(date[3].value);
  
      // button_alarm.innerHTML="Party Time!!";
      if(parseInt(date[0].value)>=0 && parseInt(date[0].value)<=12)
      {
       text.innerHTML = morningText;
        image.src = "Group 5183.svg";
        setTimeout(() => {
          console.log(2)
        }, 600000);
      }
      if(parseInt(date[1].value)>12 && parseInt(date[1].value)<=15){
        text.innerHTML = afternoonText;
        image.src = "Component 31 – 1.svg";
        setTimeout(() => {
          console.log(2)
        }, 600000);
       
      }
      if(parseInt(date[2].value)>=16 && parseInt(date[2].value)<=19){
        text.innerHTML = eveningText;
          image.src = "lunch_image@2x.png";
          setTimeout(() => {
            console.log(2)
          }, 600000);
          
        }
      if(parseInt(date[3].value)>=20 && parseInt(date[3].value)<=23){
     text.innerHTML = nightText;
        image.src = "Component 32 – 1.svg";
        setTimeout(() => {
          console.log(2)
        }, 600000);
        
      };


 
let selectMorningTime = document.getElementById("select-morning");
let selectNoonTime = document.getElementById("select-afternoon");
let selectEveningTime = document.getElementById("select-evening");
let selectNightTime = document.getElementById("select-night");

let wakeUpTime =
  selectMorningTime.options[selectMorningTime.selectedIndex].innerHTML;
let lunchTime = selectNoonTime.options[selectNoonTime.selectedIndex].innerHTML;
let napTime =
  selectEveningTime.options[selectEveningTime.selectedIndex].innerHTML;
let nightTime = selectNightTime.options[selectNightTime.selectedIndex].innerHTML;

selectMorningTime.addEventListener("click",() => {
  wakeUpTime =
    selectMorningTime.options[selectMorningTime.selectedIndex].innerHTML;
});

selectNoonTime.addEventListener("click",() => {
  lunchTime = selectNoonTime.options[selectNoonTime.selectedIndex].innerHTML;
});
selectEveningTime.addEventListener("click",() => {
  napTime = selectEveningTime.options[selectEveningTime.selectedIndex].innerHTML;
});
selectNightTime.addEventListener("click",() => {
  nightTime = selectNightTime.options[selectNightTime.selectedIndex].innerHTML;
});


  document.getElementById("set-wakeup-time").innerHTML = wakeUpTime;
  document.getElementById("set-lunch-time").innerHTML = lunchTime;
  document.getElementById("set-nap-time").innerHTML = napTime;
  document.getElementById("set-night-time").innerHTML = nightTime;
  
}
// document.getElementById("set-alarm-button").addEventListener("click",()=>{
//   setTimeout(() => {
//     setAlarm();
//   }, 60000);
// } );
   
  

