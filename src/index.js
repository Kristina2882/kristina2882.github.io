import './css/styles.css';
import DinoService from './dino-service';
//business

function createDinos(parags, words) {
    if ((parags<=0) || (words<=0)) {
        printError("This should be more than zero!");
    }
    else {
    let promise = DinoService.createDinos(parags, words);
    promise.then(function(resolve){
        printDinos(resolve);
        boyOrGirl(resolve);
    }, function(errorMessage){
        printError(errorMessage);
    });
    }
}


//ui
function boyOrGirl(apiResponse) {
    let dinosStr = apiResponse;
    dinosStr = dinosStr.replaceAll('.', '');
    dinosStr = dinosStr.replaceAll('\n\n', ' ');
    const dinosArr = dinosStr.split(" ");
    let dinoLadies = "";
    let dinoBoys = "";
    dinosArr.forEach(dino => {

        if (dino.endsWith("a")) {
            dinoLadies += dino + '🌺 ';
        }
        else if (dino !== ""){
            dinoBoys += dino + "🦕 ";
        }

    });

    document.querySelector("#dinoladies").innerHTML = `<p>${dinoLadies}</p>`;
    document.querySelector("#dinoboys").innerHTML = `<p>${dinoBoys}</p>`;
}

function printDinos(apiResponse) {
    
    apiResponse = apiResponse.replaceAll("\n", "<br>");
    document.querySelector("#groups").innerHTML = `<h4>${apiResponse}</h4>`;
    
}

function printError(error) {
    document.querySelector("#errorMessage").innerText = `Ooops! ${error}`;
}

function handleForm(event) {
    event.preventDefault();

    const parags =document.querySelector("input#parag").value;
    const words = document.querySelector("input#words").value;
    createDinos(parags, words);
}



window.addEventListener("load", function(){
    document.querySelector("form#dino-form").addEventListener("submit", handleForm);
});