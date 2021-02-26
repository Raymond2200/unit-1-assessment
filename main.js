/*----- constants -----*/
let currentCount = 0

/*----- app's state (variables) -----*/


/*----- cached element references -----*/
let plusB = document.getElementById("plus");
let minusB = document.getElementById("minus");
let tracker = document.getElementById("tracker");
let inputs = document.getElementById ("inputs")


/*----- event listeners -----*/
plusB.addEventListener("click", function() {
    let inputNum = Number(inputs.value)
    currentCount += inputNum
    tracker.innerHTML = currentCount
    inputs.value = 1
    console.log(currentCount)
    checkNegative()
});
minusB.addEventListener("click", function() {
    let inputNum = Number(inputs.value)
    currentCount -= inputNum
    tracker.innerHTML = currentCount
    inputs.value = 1
    console.log(currentCount)
    checkNegative()
});

/*----- functions -----*/

function checkNegative() {
    if (currentCount < 0) {
        tracker.classList.remove("negative")
        tracker.classList.add("negative")
    }
    else {
        tracker.classList.remove("negative")
    }
}