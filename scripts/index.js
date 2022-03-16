/** Globals **/
const baseUrl = 'http://localhost:3000';
let testData = [];
let numbCorrect = 0;
let questNumb = 0;
let numbIncorr = 0;



/** Node Getters **/
const mainDiv = () => document.getElementById("main") ;
const homePg = () => document.getElementById('home-page-link');
const anatPg = () => document.getElementById('anatomy-page-link');



/** Templates **/
const homePageTemp = () => {
  return `
  <h1 class="center-align">Welcome to your study date!</h1>
  <div class="container" id="modal-container">
    <!-- Modal Trigger -->
    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Make your choice above.  Let's STUDY!</a>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>Make your choice above.  Let's STUDY!</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>  
  </div>
  `
}

const studyPageTemp = () => {
  return `
      <div class="col s3 green" style="height: 600px" id="scoreboard1">
        <button id="colorize">Colorize</button>
        <div id="scoreboard"></div>
      </div>
      <div class="col s9 blue lighten-3" style="height: 600px id="question-side">
        <div style="height: 550px; overflow: auto; overflow-x: hidden;">
          <div class="row" id="row2">
          </div>
        </div>
        <form class="valign-wrapper" id="submit">
          <input type="text" name="" id="response-bar" class="valign-bottom white"/>
          <input type="submit" class="btn" />
        </form>
        </div>
       </div>
      </div>
      `
      
}

function chatBox(submission){
  let chatSham = document.createElement('div')
  chatSham.className = "col offset-s6 offset-m6 s6 m6"
  chatSham.innerHTML = `
  <div class="card grey lighten-1">
    <div class="card-content grey-text">
      <p style="line-height: 18px;"><span>We Say:</span> ${submission}</p>
    </div>
  </div>
  `
  document.querySelector("#row2").appendChild(chatSham)

}

function chatCheck(submission){
  let jack = submission
  let jill = testData[questNumb].answer
  if (jack == jill){
    return numbCorrect = parseInt(numbCorrect) + 1
  } else {
    return numbIncorr = parseInt(numbIncorr) + 1
  }

}

function chatQuestUpd(){
  return questNumb = parseInt(questNumb) + 1
}

function chatInputReset(){
  document.getElementById('response-bar').value = null;
}

function sayScore(){
  let lenth = testData.length - 1
  return `
  <h4>${numbCorrect} of ${lenth} correct</h4>
  `
}

function showScore(){
  let score = () => document.querySelector('#scoreboard');
  return score().innerHTML = sayScore()

}

/*function colors(){
  let colorizeIt = document.createElement('button')
  colorizeIt.innerHTML = "Colorize"
  let theNav = document.querySelector('#anatomy-page-link');
  theNav.appendChild(colorizeIt)
}
*/

/** Renderers **/
const renderHome = () => {
  mainDiv().innerHTML = homePageTemp();
}

const renderAnatPg = () => {
  mainDiv().innerHTML = ''
  mainDiv().className = 'row'
  mainDiv().innerHTML = studyPageTemp();
  setTimeout(initialChatGF, 2500)
  handleResponse()
  //colors();
  colorize();
}

//create eventlistener for button to call when page loads:
function colorize(){
  document.getElementById('colorize').addEventListener('click', () => {
    let palette = document.querySelectorAll('p');
    palette.forEach (function(e){//debugger;
      e.style.color = "#" + Math.floor(Math.random()*16777215).toString(16)
})
  })
}

/** This is how she will ask questions **/
function initialChatGF(){
  let igf = document.createElement('div')
  igf.className = 'col s6 m6';
  igf.innerHTML = `
  <div class="card white">
  <div class="card-content pink-text">
    <p style="line-height: 18px;"><span style=color:"black">Computer Says: </span>Hi there, handsome!  Are you ready?</p>
  </div>
  </div>
  `
document.querySelector("#row2").appendChild(igf);
}

function chatGF(current= questNumb, array = testData){
  let gF = document.createElement('div')
  gF.className = 'col s6 m6';
  gF.innerHTML = `
  <div class="card white">
   <div class="card-content pink-text">
     <p style="line-height: 18px;"><span class="black-text">Computer Says:</span> ${array[current].question}</p>
   </div>
  </div>
  `
  document.querySelector("#row2").appendChild(gF);
}


/** When DOM is loaded **/
document.addEventListener('DOMContentLoaded', () => {
  getData();
  renderHome();
  homePageJump();
  anatPgJump();
})

/** Events **/
function homePageJump(){
  homePg().addEventListener('click', (e)=>{
    renderHome();
  })
}

function anatPgJump(){
  anatPg().addEventListener('click', () => {
    renderAnatPg();
  })
}

function handleResponse(){
  let handler = document.getElementById("submit");
  handler.addEventListener("submit", (e) => {
    e.preventDefault();
    let retort = document.getElementById('response-bar').value;
    chatBox(retort);
    chatCheck(retort);
    chatInputReset();
    chatQuestUpd();
    showScore();
    reinforce();
  })
}



/** Server calls **/
function getData(){
  fetch(`${baseUrl}/challenge`)
  .then(res => res.json())
  .then(data => testData = data)  
}


/** Positive reinforcement **/
function reinforce(){
  if (parseInt(numbCorrect) == 3){
    setTimeout(flirt, 6000)
  } else {
    setTimeout(chatGF, 5500)
  }
}

function flirt(current= questNumb, array = testData){
  let gF = document.createElement('div')
  gF.className = 'col s6 m6';
  gF.innerHTML = `
  <div class="card white">
   <div class="card-content white-text">
     <p class="grey-text text-darken-4" style="line-height: 18px;"><span class="black-text">Coco Says: </span>Big brains are SO hot!  Let's keep going: ${array[current].question}</p>
   </div>
  </div>
  `
  document.querySelector("#row2").appendChild(gF);
}
/**********************************/
/**Add a button to change color X**/
//have it avail when open 'study'
//all chats should be in different color, so everytime a chat is added, we should have a different color
