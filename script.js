const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

const workCurrent = document.querySelector('.card__two--bottom--details .span1');
const workPrevious = document.querySelector('.card__two--bottom--details .span2');
const playCurrent = document.querySelector('.card__three--bottom--details .span1');
const playPrevious = document.querySelector('.card__three--bottom--details .span2');
const studyCurrent = document.querySelector('.card__four--bottom--details .span1');
const studyPrevious = document.querySelector('.card__four--bottom--details .span2');
const exerciseCurrent = document.querySelector('.card__five--bottom--details .span1');
const exercisePrevious = document.querySelector('.card__five--bottom--details .span2');
const socialCurrent = document.querySelector('.card__six--bottom--details .span1');
const socialPrevious = document.querySelector('.card__six--bottom--details .span2');
const selfCareCurrent = document.querySelector('.card__seven--bottom--details .span1');
const selfCarePrevious = document.querySelector('.card__seven--bottom--details .span2')

let jsonData = null

fetch('/data.json')
.then(response => response.json())
.then(
     (json) => {
     jsonData = json}
)
.catch(error => console.error('Loading error'));


function updateContent(timeframe) {
     if (jsonData) {
         workCurrent.textContent = jsonData[0].timeframes[timeframe].current;
         workPrevious.textContent = jsonData[0].timeframes[timeframe].previous;
         playCurrent.textContent = jsonData[1].timeframes[timeframe].current;
         playPrevious.textContent = jsonData[1].timeframes[timeframe].previous;
         studyCurrent.textContent = jsonData[2].timeframes[timeframe].current;
         studyPrevious.textContent = jsonData[2].timeframes[timeframe].previous;
         exerciseCurrent.textContent = jsonData[3].timeframes[timeframe].current;
         exercisePrevious.textContent = jsonData[3].timeframes[timeframe].previous;
         socialCurrent.textContent = jsonData[4].timeframes[timeframe].current;
         socialPrevious.textContent = jsonData[4].timeframes[timeframe].previous;
         selfCareCurrent.textContent = jsonData[5].timeframes[timeframe].current;
         selfCarePrevious.textContent = jsonData[5].timeframes[timeframe].previous;
     } else {
         console.error('JSON data not loaded');
     }
 }

daily.addEventListener('click', () => {updateContent('daily');});
weekly.addEventListener('click', () => updateContent('weekly'));
monthly.addEventListener('click', () => updateContent('monthly'));

console.log(daily.textContent)

