// Write your JS in here

// Alert is the message that comes down from the tab. It is used to test.
var pics = [
	"kitty_bed.jpg",
	"kitty_basket.jpg", 
	"kitty_laptop.jpg",
	"kitty_door.jpg",
	"kitty_sink.jpg",
  "kitty_wall.jpg",
  "download.jpg"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;


// looks for first button. Makes the fist button in finds the name variable.
btn.addEventListener("click", function(){
  if(counter=== 6){
    counter=0
// if the counter(which adds 1) gets to 6(===6) /{go back to counter=0}

  }
   img.src = pics[counter]
   counter = counter + 1;
  // change number to 1 in counter variable.

});
// This make js look for events like clicks. You named the button "btn"/ listen for event(event=click), RUN: Whatever (Funtion)
