/** Globals **/
const baseUrl = 'http://localhost:3000';
let testData = [];
var numbCorrect = 0;
var questNumb = 0;
var numbIncorr = 0;


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
    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Choose a subject above.  No fooling around until you're good and smart!!</a>
    <!-- Modal Structure -->
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>Choose a subject above.  No fooling around until you're good and smart!!</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>  
  </div>
  `
}
    //TEST
const testPageTemp = () => {
  return ``
}
const studyPageTemp = () => {
  return `
    <div class="container row">
      <div class="container col s3">
        <form action="/action_page.php" id="response-submit">
          <label for="lname">The response:</label><br>
          <input type="text" id="lname" name="lname" value=""><br><br>
          <input type="submit" value="Submit">
        </form>
      </div>
      <div class="col s4 teal lighten-5">
      </div>
      
      <div class="col s5 teal lighten-5">
        <div class="container" id="question-side">
            <h1>Hi There</h1>
        </div>
      </div>
    </div>
    
  `
}


/** Renderers **/
const renderHome = () => {
  mainDiv().innerHTML = homePageTemp();
}
    //TEST
const testRenderHome = () => {
  mainDiv().innerHTML = testPageTemp();
}
const renderAnatPg = () => {
  mainDiv().innerHTML = studyPageTemp();
  interject();
  handleResponse()

}

function interject(){
  document.querySelector('#question-side').innerHTML = `<h1>Yo Jo!</h1>`
}
/** When DOM is loaded **/
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  homePageJump();
  testPageJump();
  anatPgJump();
})


/** Events **/
function homePageJump(){
  homePg().addEventListener('click', (e)=>{
    renderHome();
  })

}
function testPageJump(){
  testPg().addEventListener('click', (e) => {
    testRenderHome();

  })
}
function anatPgJump(){
  anatPg().addEventListener('click', () => {
    renderAnatPg();
  })
}

function handleResponse(){
  let handler = document.getElementById("response-submit");
  handler.addEventListener('submit', (e) => {
    e.preventDefault();
  })
}

/**********************************/