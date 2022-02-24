/** Globals **/


/** Node Getters **/
const mainDiv = () => document.getElementById("main") ;
const homePg = () => document.getElementById('home-page-link');
    //TEST
const testPg = () => document.getElementById("js-page-link");
const mathPg = () => document.getElementById('math-page-link');
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
const anatPageTemp = () => {
  return `
  <div class="container row">
    <div class="container col s3">
      <form class="center-align">
        <label for="ansr">Answer:</label><br>
        <input type="text" id="ansr" name="ansr"><br>
      </form>
    </div>

    <div class="col s9">
      <!-- Teal page content  -->
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
  mainDiv().innerHTML = anatPageTemp();
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


/**********************************/