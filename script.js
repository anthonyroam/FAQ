const accordion = document.getElementsByClassName("card__question-box");
const answer = document.getElementsByClassName("card__answer");
const answerArray = Array.from(answer);
const arrow = document.getElementsByClassName("card__arrow");
const arrowArray = Array.from(arrow);

//Esta funcion se encarga de determinar si el elemento tiene la clase active o no, luego se iterara esta funcion
//con el metodo .find().
function actived (element) {
    return element.className == `card__answer active`;
}

function rotated (element) {
    return element.className == `card__arrow rotate`;
}

//Esta funcion se encarga de asignar/remover la clase active.
function action (element, index, action) {
    element[index].classList.toggle(`${action}`);
}

//Cree esta funcion para poder ejecutar dos funciones co el setTimeOut.
function myTimeOut (answerArray, arrowArray, index) {
    action(answerArray, index, "active");
    action(arrowArray, index, "rotate");
}

for (i=0; i<accordion.length; i++) {
    let arrayNumber = i;
    //Esta funcion funciona como un clousure ya que la variable arrayNumber recuerda su valor al momento en
    //que se llama al addEventListener.
    accordion[i].addEventListener("click", function event () {
        if (answerArray[arrayNumber].className === `card__answer active`) {
            action(answerArray, arrayNumber, "active");
            action(arrowArray, arrayNumber, "rotate");
        }
        
        //Con el metodo .find() itero cada elemento del array para buscar si algun elemento tiene la clase active
        //y en caso de tenerla la remueve.
        else if (answerArray.find(actived) != undefined) {
            let answerActived = answerArray.find(actived);
            answerActived.classList.toggle("active");
            let arrowRotated = arrowArray.find(rotated);
            arrowRotated.classList.toggle("rotate");
            setTimeout(myTimeOut, 300, answerArray, arrowArray, arrayNumber);
        }
        else {
            action(answerArray, arrayNumber, "active");
            action(arrowArray, arrayNumber, "rotate");
        }
    })
}
    



