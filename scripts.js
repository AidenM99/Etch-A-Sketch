/*****Create grid *****/
for (i = 0; i < 16; i++) {
    const grid = document.querySelector(".grid");
    const row = document.createElement("div");
    grid.appendChild(row);
    for (j = 0; j < 16; j++) {
        const column = document.createElement("div");

        column.style.height = "15px";
        column.style.width = "15px";
        column.style.border = "solid black 1px";
        column.classList.add("row");

        grid.appendChild(column);
    };
};

/*****Random color picker for grid square*****/
const gridSquare = document.querySelectorAll(".row");

gridSquare.forEach(function (item) {
    item.addEventListener("mouseover", function () {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColour = "#";
        for (i = 0; i < 6; i++) {
            hexColour += hex[Math.floor(Math.random() * hex.length)];
        };
        item.style.backgroundColor = hexColour;
    });
});








