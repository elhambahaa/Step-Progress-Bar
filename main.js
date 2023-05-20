var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var four = document.getElementById("four")
var five = document.getElementById("five")
var next = document.getElementById("next")
var prev = document.getElementById("prev")
var check = document.querySelectorAll(".check")

let currentActive = 0;

next.addEventListener("click", ()=>{
    currentActive++
    if (currentActive > check.length) {
        currentActive = check.length;
    }
    console.log(currentActive)
    update();
})


prev.addEventListener("click", ()=>{
    currentActive--
    if (currentActive < 1 ){
        currentActive = 1;
    }
    console.log(currentActive)
    update();
})

function update(){
    check.forEach((item, index) => {
        if (index < currentActive) {
          item.classList.add("active");
          item.classList.add("activeline");
        } else {
          item.classList.remove("active");
          item.classList.remove("activeline");
        }
})
}

