




const main = document.querySelector('#main');

const localNav = document.querySelector('#ac-localnav');
const smallList = document.querySelector('.ac-gn-small-list');
const acSearch = document.querySelector('.ac-gn-search');
const searchView = document.querySelector('#ac-gn-searchview');
const searchVeiwBar = document.querySelector('.ac-gn-searchview-bar');
const searchViewRst = document.querySelector('.ac-gn-searchview-results');
const acGlobalNav = document.querySelector('#ac-globalnav');
const searchViewContent = document.querySelector('.ac-gn-searchview-content');
const hambugTop = document.querySelector('.bread-top');
const hambugBottom = document.querySelector('.bread-bottom');
const burgerCrustBottom = document.querySelector('.bread-crust-bottom');
const loginSubNav = document.querySelector('.subnav');

let hambugFlag = false;
function hambugOn(){

    if(!hambugFlag){
        main.classList.add('displayNone');
        searchViewRst.classList.add('displayNone');
        acSearch.classList.add('displayNone');
        
        smallList.classList.add('displayBlock');
        searchView.classList.add('displayBlock');
        searchVeiwBar.classList.remove('displayNone');
        searchViewContent.classList.remove('displayNone');
        acGlobalNav.classList.add('backBlack');
        hambugTop.classList.add('burgerTopOn');
        hambugBottom.classList.add('burgerBottomOn');
        burgerCrustBottom.classList.add('burgerCrustBottom');
        hambugFlag = true;
        if(footer!=undefined){
            footer.classList.add('displayNone');
        }
        if(loginSubNav!=undefined){
            loginSubNav.classList.add('displayNone');
        }
        if(localNav!=undefined){
            localNav.classList.add('displayNone');
        }
    }else{
        main.classList.remove('displayNone');
        
        searchViewRst.classList.remove('displayNone');
        acSearch.classList.remove('displayNone');
        smallList.classList.remove('displayBlock');
        searchView.classList.remove('displayBlock');
        searchVeiwBar.classList.add('displayNone');
        searchViewContent.classList.add('displayNone');
        acGlobalNav.classList.remove('backBlack');
        hambugTop.classList.remove('burgerTopOn');
        hambugBottom.classList.remove('burgerBottomOn');
        burgerCrustBottom.classList.remove('burgerCrustBottom');
        hambugFlag = false;
        if(footer!=undefined){
            footer.classList.remove('displayNone');
        }
        if(loginSubNav!=undefined){
            loginSubNav.classList.remove('displayNone');
        }
        if(localNav!=undefined){
            localNav.classList.remove('displayNone');
        }
    }  
}

const hambug = document.querySelector('.ac-gn-hambug');

hambug.addEventListener('click',hambugOn);

