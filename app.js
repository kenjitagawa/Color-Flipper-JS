const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn"); //Selecting the button
const color = document.querySelector(".color"); // Query selector finds the first element on the page that matcher w a css somewhere. Here matching the color span tags

btn.addEventListener("click", function(){
    // Get random number between 0-3 to get the items from the array colors. 
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// Function to get a random number
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}


