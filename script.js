const gridContainer = document.getElementById("grid-container");
let userInput = 16;

function buildGrid(){
    for (let index = 0; index < userInput; index++) {
        let rowCon = document.createElement("div")
        for(let i = 0;i<userInput;i++){
            const singlecell = document.createElement("div");
            singlecell.textContent = ".";
            singlecell.style.color = "bg-red";
            singlecell.classList.add("bg-red");
            singlecell.addEventListener('mouseover' , () => {
            singlecell.classList.add("bg-blue")
            singlecell.style.color = "bg-blue";
            });
        rowCon.appendChild(singlecell);
        }
    gridContainer.appendChild(rowCon);
    }
    
}
const newGrid = document.getElementById("new-grid-button");
newGrid.addEventListener('click' , () => {

    userInput = prompt("How many boxes per side?");
    gridContainer.innerHTML = "";
    buildGrid();
});

buildGrid();