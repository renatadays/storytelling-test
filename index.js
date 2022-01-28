const ulj = document.querySelector("#zeit-list")

console.log(ulj)

for(let i =0; i< 24; i++){
    let lij = document.createElement("li");
    lij.classList.toggle("zeit");
    lij.innerText = `${i < 10 ? `0${i}` : i}:00`
    ulj.appendChild(lij);
}

//change colors
const colorArrays = [
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#009900","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],
   ["#000", "#fff","#000", "#fff","#000", "#fff"],

]

const mC = document.querySelector("#main_container")

console.log(mC)
for(let i = 0; i< 24; i++){
    let bX = document.createElement("div");
    bX.classList.toggle("Box-container");
    
    for(let j =0; j< 5; j++){
        const box = document.createElement("div");
        box.classList.toggle("box");
        box.style.background = colorArrays[i][j];
        bX.appendChild(box);


    }
    mC.appendChild(bX);

}