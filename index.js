const sections =document.getElementsByClassName("section");
const divElement = document.getElementById("naruto");

var narutoDiv = document.querySelector('.naruto');
console.log(narutoDiv);

function pagechange(event){

    let currentsection = document.getElementsByClassName("active");
    console.log(currentsection[0]);
    currentsection[0].classList.remove("active");
    console.log("removed");
    console.log(currentsection[0]);


    var clickedElement = event.target || event.srcElement;
    var id = clickedElement.id;
    console.log(id)

    const activesection=document.querySelectorAll("section[id='" + id + "']");
    console.log(activesection[0]);
    activesection[0].classList.remove("d-none");
    activesection[0].classList.add("active");
}




 function naruto() {
  console.log("clicked");
  window.open('naruto.html', '_blank');
}
function demons() {
  console.log("clicked");
  window.open('demons.html', '_blank');
}
function attack() {
  console.log("clicked");
  window.open('attack.html', '_blank');
}
function jujutsu() {
  console.log("clicked");
  window.open('jujutsu.html', '_blank');
}
function onepiece() {
  console.log("clicked");
  window.open('onepiece.html', '_blank');
}
function onepunch() {
  console.log("clicked");
  window.open('onepunch.html', '_blank');
}


