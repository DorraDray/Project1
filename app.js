//let color = "aliceblue";

// retrieve our button DOM node
const idgalaxy = document.getElementById("idgalaxy");

// declare our function
function changeColour() {
  // change the text of the button


  // change bg to be the OTHER colour that it currently isn't
  //if (color === "red") {
  //  color = "aliceblue";
 // } else {
  //  color = "red";
 // }

  // set the background colour of our page to be the value of bg
  //document.pgalaxycolor = color;
  document.body.style.background = "red";

}

// listen for the click event of our button and run our function
idgalaxy.addEventListener("click", changeColour);