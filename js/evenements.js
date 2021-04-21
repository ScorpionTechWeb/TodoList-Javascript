let btn = document.querySelector("button");
let h1 = document.querySelector("h1");

btn.addEventListener("click", function(e){
    if (h1.style.color === "red"){
        console.log(e)
        h1.style.color = "black";
    } else {
        h1.style.color = "red"; 
    }
});

btn.addEventListener("mouseover", (e) => {
    console.log("Survolé");
});
btn.addEventListener("mouseout", (e) => {
    console.log("Non Survolé");
});

let ipt = document.querySelector("input");

ipt.addEventListener()