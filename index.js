var numberOfDrumButtons = document.querySelectorAll(".drum").length;



for (i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

     makesound(buttonInnerHTML);

     addingAnimation(buttonInnerHTML);



  });


}

document.addEventListener("keydown", function(event) {

  makesound(event.key);
  addingAnimation(event.key);



});



function makesound(key) {



  switch (key) {

    case "w":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;

    case "a":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;

    case "s":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;

    case "d":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;


    case "j":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;

    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;


    case "l":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;



    default:

  }
}



function addingAnimation(currentKey){

 document.querySelector("." + currentKey).classList.add("pressed");

 setTimeout(function(){
 document.querySelector("." + currentKey).classList.remove("pressed");

}, 100);




}
