// function navfunction() {
//   var x = document.getElementById('nav');
//   if (x.className === "nav") {
//     x.className += " responsive";
//   } else {
//     x.className = "Navbar";
//   }
// }


// assigned all the rolls to allrolls by acquiring their class name.
let allrolls = document.getElementsByClassName('rolls');

// created a function that initially hides the info of all the sushi rolls. //
// looped through every element and set its display to "none"
function hideinfo() {
  let allinfo = document.getElementsByClassName('info');
  for (let i = 0; i < allinfo.length; i++) {
    allinfo[i].style.display = "none";
  }
}

// assigned clickedpic to a generalized function that takes in the information
// number. This function calls the hideinfo function and displays the information of
// the roll once its clicked

let clickedpic = function(infonum) {
  hideinfo();
  document.getElementById(infonum).style.display = "block";
}

// looped through all the rolls and added an eventlistener that waits until even
// occurs to call the generalized function 
for (let i = 0; i < allrolls.length; i++) {
  let infonum = "info" + i;
  let rollnum = allrolls[i];
  rollnum.addEventListener('click', function() {
    clickedpic(infonum);
  });
}

//
// function flip(event) {
//   var element = event.currentTarget;
//   if (element.className === "rolls") {
//     if (element.style.transform == "rotateX(180deg)") {
//       element.style.transform = "rotateX(0deg)";
//     }
//     else {
//       element.style.transform = "rotateX(180deg)";
//     }
//
//   }
// }
