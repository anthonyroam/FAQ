const question = document.getElementsByClassName("card__question");
const questionArray = [...question];
const answer = document.getElementsByClassName("card__answer");
const answerArray = [...answer];

const isClicked = element => element.className === `card__question clicked`;
const isActived = element => element.className === `card__answer active`;

questionArray.map((question, index) => {
    question.addEventListener("click", ()=> {
        let clickedQuestion = questionArray.filter(isClicked);
        let clickedAnswer = answerArray.filter(isActived);
        
        if (clickedQuestion[0] === undefined) {
            questionArray[index].classList.add("clicked");
            answerArray[index].classList.add("active");
        }  else if (questionArray[index] === clickedQuestion[0]) {
            clickedQuestion[0].classList.remove("clicked");
            clickedAnswer[0].classList.remove("active");
        } else if (clickedQuestion[0] !== undefined) {
            clickedQuestion[0].classList.remove("clicked");
            clickedAnswer[0].classList.remove("active");
            setTimeout(()=> {
                questionArray[index].classList.add("clicked");
                answerArray[index].classList.add("active");
            }, 350)
        }
    });
});