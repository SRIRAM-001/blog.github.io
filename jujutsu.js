let guidelines= document.getElementsByClassName("guidelines");
let quizbox= document.getElementsByClassName("quiz-box");

let time=document.querySelector("#time");
let quiz=document.querySelector(".quiz");
//let time=document.querySelector("#time");

let questionno = document.querySelector("#question-no");
console.log(questionno);
let questiontext= document.querySelector("#question-text");

let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let option4 = document.querySelector("#option4");

let next_question = document.querySelector("#next-question");
//let total_correct = document.querySelector("#total-correct");

let result= document.querySelector(".result");
let points= document.querySelector("#points");
let quit= document.querySelector("#quit");
let startAgain= document.querySelector("#start-again");

let choice = document.querySelectorAll(".choice");
let time_box=document.getElementsByClassName("time-box");

let MCQS=[
    {
        number:1,
        question:"Naruto is which type of Anime?",
        answer:2,
        options:[
            "jujutsu",
            "demonslayer",
            "shanon",
            "onePiece"
        ]
    },
    {
        number:1,
        question:"which word is misspelled?",
        answer:1,
        options:[
            "personality",
            "make",
            "motivations",
            "flashbacks"
        ]
    },
    {
        number:2,
        question:"Previous Misspelled word present which Category?",
        answer:1,
        options:[
            "Theme",
            "Character",
            "Guidelines",
            "Strorytelling"
        ]
    },
    {
        number:3,
        question:"Supporting characters play a mojor role for?",
        answer:0,
        options:[
            "progression",
            "lovable",
            "backstory",
            "flashbacks"
        ]
    },
    {
        number:5,
        question:"what is the moto of pacing of the story?",
        answer:3,
        options:[
            "personality",
            "make",
            "motivations",
            "flashbacks"
        ]
    },
   
    
];

let index=0;
let timer=0;
let interval=0;

let correct=0;
let userAns=undefined;

let countDown=()=>{
    if(timer===10){
        clearInterval(interval);
        next_question.click();
    }
    else{
        timer++;
        time.innerHTML=`${timer}`
        time_box.innerHTML=`hi ${timer}`;
        // time_box.style.color="white";
        console.log(timer);
    }

}
let loadData = () =>{
    questionno.innerText= index+1+".";
    console.log("index position",index);
    questiontext.innerText=MCQS[index].question;
    option1.innerText=MCQS[index].options[0];
    option2.innerText=MCQS[index].options[1];
    option3.innerText=MCQS[index].options[2];
    option4.innerText=MCQS[index].options[3];
    timer=0;
    choice.forEach( choices =>
        {
            choices.classList.remove("disabled");
            
            //total_correct.innerHTML=`${correct=0} Out Of ${MCQS.length} Questions `;
        })
}





function openguidelines() {
    guidelines[0].classList.add("open-guidlines");
}
guidelines= document.getElementsByClassName("guidelines");
function closeguidelines() {
    guidelines[0].classList.remove("open-guidlines");
}

function startgame(){
    quizbox[0].classList.add("quizbox-open");
    interval=setInterval(countDown,1000);
    loadData();
    choice.forEach( removeActive =>
        {
            removeActive.classList.remove("active");
            
            //total_correct.innerHTML=`${correct=0} Out Of ${MCQS.length} Questions `;
        })
    }


choice.forEach((choices,choiceNo) => {
    choices.addEventListener("click",()=>{
        choices.classList.add("active");
        console.log(choices);
        console.log("choice no",choiceNo,"answer",MCQS[index].answer);

        for(i=0;i<4;i++){
        choice[i].classList.add("disabled");
        }
   

    if(choiceNo === MCQS[index].answer){
        correct++;
        console.log(correct,"correct");
    }
    else{
        correct+=0;
    }
})
    // for(i=0;i<4;i++){
    //     choice[i].classList.add("disabled");
    // }
});


next_question.addEventListener("click",()=>{
    if(++index<MCQS.length){
        // index++;

        choice.forEach( removeActive =>
            {
                removeActive.classList.remove("active");
                
            })
            loadData();
            // total_correct.style.display="block";
            // total_correct.innerHTML=`${correct} Out Of ${MCQS.length} Questions `;
            clearInterval(interval);
            interval = setInterval(countDown,1000);
            
    }
    else{
        clearInterval(interval);

        //quiz.style.display='none';
        quizbox[0].classList.remove("quizbox-open");
        guidelines[0].classList.remove("open-guidlines");
        index=0;
        points.innerHTML=`You Got ${correct} Out of ${MCQS.length}`;
        if(correct<=1)
        {
            points.innerHTML=`You Got ${correct} Out of ${MCQS.length} `; 
            let node = document.createTextNode (' You have to Understand better');
            points.appendChild(node);
        }
        else if(correct<=3)
        {
            points.innerHTML=`You Got ${correct} Out of ${MCQS.length} `;
            let node = document.createTextNode (' You are an intermediate');
            points.appendChild(node);
        }
        else{
            points.innerHTML=`You Got ${correct} Out of ${MCQS.length} `; 
            let node = document.createTextNode ('You are Excellent');
            points.appendChild(node);
        }
        result.classList.add("result-open")
    }
})

function closeresult(){
    result.classList.remove("result-open");
}