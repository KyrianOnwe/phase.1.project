/** Globals **/


/** Node Getters **/
const mainDiv = () => document.getElementById("main") ;
const homePg = () => document.getElementById('home-page-link')
    //TEST
const testPg = () => document.getElementById("js-page-link")

/** Templates **/
const homePageTemp = () => {
  return `
  <h1 class="center-align">Welcome to your study date!</h1>
  `
}
    //TEST
const testPageTemp = () => {
  return ``
}


/** Renderers **/
const renderHome = () => {
  mainDiv().innerHTML = homePageTemp();
}
    //TEST
const testRenderHome = () => {
  mainDiv().innerHTML = testPageTemp();
}

/** When DOM is loaded **/
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  homePageJump();
  testPageJump();
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



/**********************************/