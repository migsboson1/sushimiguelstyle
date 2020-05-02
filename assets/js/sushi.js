// function navfunction() {
//   var x = document.getElementById('nav');
//   if (x.className === "nav") {
//     x.className += " responsive";
//   } else {
//     x.className = "Navbar";
//   }
// }

let allrolls = document.getElementsByClassName('rolls');
function hideinfo() {
  let allinfo = document.getElementsByClassName('info');
  for (let i = 0; i < allinfo.length; i++) {
    allinfo[i].style.display = "none";
  }
}

let clickedpic = function(infonum) {
  hideinfo();
  document.getElementById(infonum).style.display = "block";
}

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
