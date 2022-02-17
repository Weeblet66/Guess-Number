let texts = [
    {
        Text: "Think of a number",
    },
    {
        Text: "Double the number",
      
    },
    {
        Text: "Add",
    },
    {
        Text: "Half the number",
    },
    {
        Text: "Subtract that Number which you think",
    },
    {
        Text: "Is your answer",
    },
];
let currentItem = 0;
const text = document.querySelector(".text")
const btn = document.querySelector(".btn")
const number = document.getElementById("number")
const ans = document.getElementById("ans")
btn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > texts.length - 1) {
        currentItem = 0; 
    }
    
    showItem(currentItem);
    magic()
})

function magic (){
    if (text.innerHTML ==="Add"){
        getRandomNumber()
    };
    if (text.innerHTML ==="Half the number"){
        number.style.display = "none"
    };
    if (text.innerHTML ==="Is your answer"){
        number.style.display = "block"
        number.innerHTML = number.innerHTML / 2
        btn.innerHTML = "Restart"
    };
     
    if (text.innerHTML === "Think of a number"){
        location.reload()   
    };
};
function showItem(){
    const item = texts[currentItem];
    text.innerHTML = item.Text
}

function getRandomNumber(){
    const range = 50
    number.innerHTML = Math.floor(Math.random() * range/2) * 2;
}






