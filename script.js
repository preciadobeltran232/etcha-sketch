const gridContainer = document.querySelector("#grid-container");
const singlecell = document.createElement("div");
singlecell.textContent.textContent = "Hello";

let numOfCells = 65;
for(let i = 0;i<numOfCells;i++){
    const singlecell = document.createElement("div");
    singlecell.textContent = "Hello";
    singlecell.style.color = "white";
    singlecell.classList.add("bg-red");
    singlecell.addEventListener('click' , () => {
        alert("Hey");
    });
    gridContainer.appendChild(singlecell);
}
