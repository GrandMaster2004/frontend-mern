// Menu icon
// let menuIcon = document.querySelector("#menu-icon");
// let navbar = document.querySelector(".navbar");

const width = window.innerWidth; 
// window.addEventListener('resize', function() {
//     width = width.innerWidth;
//   });

if (width<=770) {
    setInterval(() => {
        console.log("out side");
        document.getElementById("front").style.cssText = "transform: translateZ(50) rotateY(360deg);";
        document.getElementById("back").style.cssText = "transform: translateZ(-50) rotateY(360deg);";
        document.getElementById("right").style.cssText = "transform: rotate(90deg);";
        document.getElementById("left").style.cssText = "transform: rotate(90deg);";
        document.getElementById("top").style.cssText = " bottom: 90px;";
        document.getElementById("bottom").style.cssText = "top: 90px;";
    }, 5000);
    
    setInterval(() => {
        console.log("in side");
        document.getElementById("front").style.cssText = "transform: translateZ(50px);";
        document.getElementById("back").style.cssText = "transform: translateZ(-50px);";
        document.getElementById("right").style.cssText = "transform: rotateY(90deg);";
        document.getElementById("left").style.cssText = "transform: rotateY(-90deg);";
        document.getElementById("top").style.cssText = "transform: rotateX(90deg);";
        document.getElementById("bottom").style.cssText = "transform: rotateX(90deg);";
    }, 15000);
}
else{
    setInterval(() => {
        console.log("out side");
        document.getElementById("front").style.cssText = "transform: translateZ(180) rotateY(360deg);";
        document.getElementById("back").style.cssText = "transform: translateZ(-180) rotateY(360deg);";
        document.getElementById("right").style.cssText = "transform: rotate(90deg);";
        document.getElementById("left").style.cssText = "transform: rotate(90deg);";
        document.getElementById("top").style.cssText = " bottom: 180px;";
        document.getElementById("bottom").style.cssText = "top: 180px;";
    }, 5000);
    
    setInterval(() => {
        console.log("in side");
        document.getElementById("front").style.cssText = "transform: translateZ(125px);";
        document.getElementById("back").style.cssText = "transform: translateZ(-125px);";
        document.getElementById("right").style.cssText = "transform: rotateY(90deg);";
        document.getElementById("left").style.cssText = "transform: rotateY(-90deg);";
        document.getElementById("top").style.cssText = "transform: rotateX(90deg);";
        document.getElementById("bottom").style.cssText = "transform: rotateX(90deg);";
    }, 15000);
}

// let darkModeIcon = document.querySelector('#darkMode-icon');
// darkModeIcon.onclick = ()=>{
//     darkModeIcon.classList.toggle('bx-sun');
//     document.body.classList.toggle('dark-mode');
// }

  