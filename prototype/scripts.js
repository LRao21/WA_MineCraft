let mouseHovering = false;
document.addEventListener("mousedown", () => mouseHovering = true);
document.addEventListener("mouseup", () => mouseHovering = false);

let newestCells = [];
let neighboringCells = [];
let lastTen = [];

let users = {};
let user = ""; //current person
let pw = "";

let temp = "";

/* FOR GRID */
function saveLayer(){
    if (user===""){
        alert("Sign in to save your work!");
        return false;
    }

    return false;
}

function undoLast(){
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    var rows = newGridFor.children;

    var toRestore;
    if (lastTen.length === 0){
        console.log("nothing to restore");
        var blankSet = blankGrid(rows.length, rows[0].children.length, 1);
        lastTen.push(blankSet);
        return false;
    }
    toRestore = lastTen.pop();
    if (lastTen.length > 1){ 
        toRestore = lastTen.pop();
    }
    
    if (toRestore!= null && toRestore.children!=null && toRestore.children[0]!=null){
        console.log("got Last!")
        console.log("Height: " + String((toRestore.children).length))
        console.log("Width: " + String((toRestore.children[0].children).length))

        for (var i = 0; i < rows.length; i++){
            var cells = rows[i].children;
            var ogRows = toRestore.children;
            var ogCells = ogRows[i].children;
            for (var j = 0; j < cells.length; j++){
                cells[j].style.backgroundColor = 
                ogCells[j].style.backgroundColor;
            }
        }
    }

    return false;
}

function resetGrid(){
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    var rows = newGridFor.children;
    for (var i = 0; i < rows.length; i++){
        var cells = rows[i].children;
        for (var j = 0; j < cells.length; j++){
            if (cells[j].style.backgroundColor != "white"){
                cells[j].style.backgroundColor = "white";
            }
        }
    }
    var copy = copyGrid(rows.length, rows[0].children.length, 1, newGridFor);
    if (lastTen.length >= 10){
        var old = lastTen.pop();
    }
    lastTen.push(copy);
    return false;
}

//helper function to find other cells in an object
function findNeighbors(toPopulate, grid, width, height, scale, col, color){
    var rowCount = Math.floor(height/scale);
    var colCount = Math.floor(width/scale);

    var colLocal = Math.floor((parseInt(col.id,10) % colCount)); //tells me which column a cell is
    var rowLocal = Math.floor(((parseInt(col.id))/rowCount)); //tells me which row a cell is in
    console.log("rowCount: " + String(rowCount));
    console.log("colCount: " + String(colCount));
    console.log("rowLocal: " + String(rowLocal));
    console.log("colLocal: " + String(colLocal));

        var rightNeighbor = col;
        var lefttNeighbor = col;
        var topNeighbor = col;
        var bottomNeighbor = col;
        if (colLocal + 1 <= colCount -1){
            rightNeighbor = document.getElementById(String(parseInt(col.id)+1));
        }
        if (colLocal -1 >= 0){
            lefttNeighbor = document.getElementById(String(parseInt(col.id)-1));
        }
        if (rowLocal -1 >= 0){
            topNeighbor = document.getElementById(String(parseInt(col.id)-colCount));
        }
        if (rowLocal + 1 <= rowCount -1){
            bottomNeighbor = document.getElementById(String(parseInt(col.id)+colCount));
        }

        console.log("found neighbors!");
        console.log("col id: " + String(col.id));
        console.log("right id: " + String(rightNeighbor.id));
        console.log("left id: " + String(lefttNeighbor.id));
        console.log("top id: " + String(topNeighbor.id));
        console.log("bottom id: " + String(bottomNeighbor.id));

        if (rightNeighbor!=null && rightNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(rightNeighbor.id)){
                toPopulate.push(rightNeighbor.id);
                console.log("right is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, rightNeighbor, color);
            }
        }
        if (lefttNeighbor!=null && lefttNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(lefttNeighbor.id)){
                toPopulate.push(lefttNeighbor.id);
                console.log("left is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, lefttNeighbor, color);
            }
        }
        if (topNeighbor!=null && topNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(topNeighbor.id)){
                toPopulate.push(topNeighbor.id);
                console.log("top is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, topNeighbor, color);
            }
        }
        if (bottomNeighbor!=null && bottomNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(bottomNeighbor.id)){
                toPopulate.push(bottomNeighbor.id);
                console.log("bottom is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, bottomNeighbor, color);
            }
        }
        return false;
    }

//helper function to create a blank grid
function blankGrid(height, width, scale){
    var newGrid = document.createElement("div");
    var index = 0
    for (var i = 0; i < height/scale; i++) {
        var row = document.createElement("div");
        row.className = "row";
        newGrid.appendChild(row);
  
        for (var j = 0; j < (width/scale); j++) {
          var col = document.createElement("div");
          col.className = "col";
          col.id = String(index);
          index = index + 1;
          //sets cell size to fill the full frame always
          col.style.width = String(800/(width/scale)) + "px";
          col.style.height = String(800/(width/scale)) + "px";
          col.style.backgroundColor = "white";
          row.appendChild(col);
        }
        console.log("height: " + String(height));
        console.log("width: " + String(width));
        console.log("row size: " + String(newGrid.children.length) + ",row count: " + String(i));
    }
    return newGrid;
}
//helper function to copy the grid so we can save frames
function copyGrid(height, width, scale){
    var newGrid = document.createElement("div");
    var index = 0
    for (var i = 0; i < height/scale; i++) {
        var row = document.createElement("div");
        row.className = "row";
        newGrid.appendChild(row);
  
        for (var j = 0; j < (width/scale); j++) {
          var col = document.createElement("div");
          col.className = "col";
          col.id = String(index);
          index = index + 1;
          //sets cell size to fill the full frame always
          col.style.width = String(800/(width/scale)) + "px";
          col.style.height = String(800/(width/scale)) + "px";
          var ogCell = document.getElementById(String(col.id));
          col.style.backgroundColor = ogCell.style.backgroundColor;
          row.appendChild(col);
        }
    }
    return newGrid;
}

//creates grid given input for width and height
function calculateGrid() {
    lastTen = [];
    let scale = parseInt(document.getElementById("scale").value,10);
    let height = parseInt(document.getElementById("height").value,10);
    let width = parseInt(document.getElementById("width").value,10);
    try{
        if (isNaN(width)) {
            alert("You must enter a width");
            return false;
        } else if (width<=0){
            alert("You must enter a width");
            return false;
        } else if ((800*scale)/width < 21){
            alert("Please enter a smaller width or the grid won't fit!");
            return false;
        }
        if (isNaN(height)) {
            alert("You must enter a height");
            return false;
        } else if (height<=0){
            alert("You must enter a height");
            return false;
        } else if ((800*scale)/height < 21){
            alert("Please enter a smaller height or the grid won't fit!");
            return false;
        }
        if (isNaN(scale)) {
            alert("You must enter a scale");
            return false;
        } else if (scale<1){
            alert("You must enter a scale of at least 1");
            return false;
        }
    } catch (err){
        alert("error: " + err.message);
        return false;
    }
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    newGridFor.innerHTML = "";
    var index = 0
    for (var i = 0; i < height/scale; i++) {
         var row = document.createElement("div");
        row.className = "row";
        newGridFor.appendChild(row);
  
        for (var j = 0; j < (width/scale); j++) {
        var col = document.createElement("div");
          col.className = "col";
          col.id = String(index);
          index = index + 1;
          //sets cell size to fill the full frame always
          col.style.width = String(800/(width/scale)) + "px";
          col.style.height = String(800/(width/scale)) + "px";
          //event listeners for clicks
          col.addEventListener("click", function() {
            this.style.backgroundColor = 
            (this.style.backgroundColor === "red") ? "white" : "red";
            var copy = copyGrid(height, width, scale, newGridFor);
            if (lastTen.length >= 10){
                var old = lastTen.pop();
            }
            lastTen.push(copy);
            });
          col.addEventListener("mouseover", function(e) {
            e.preventDefault()
            if (mouseHovering) {
                this.style.backgroundColor = "red";
                var copy = copyGrid(height, width, scale, newGridFor);
                if (lastTen.length >= 10){
                    var old = lastTen.pop();
                }                
                lastTen.push(copy);
            }
            });
          col.addEventListener('dblclick', function() {
            alert('Double click detected!');
            this.style.backgroundColor = "red";
            neighboringCells = [];
            findNeighbors(neighboringCells, newGridFor, width, height, scale,
                this, this.style.backgroundColor);
            console.log("done!");
            this.style.backgroundColor = "blue";
            for (var k = 0; k < neighboringCells.length; k++){
                document.getElementById(neighboringCells[k]).style.backgroundColor = "blue";
                console.log("colored!");
            }
            var copy = copyGrid(height, width, scale, newGridFor);
            if (lastTen.length >= 10){
                var old = lastTen.pop();
            }
            lastTen.push(copy);
            });
            col.style.backgroundColor = "white";
            row.appendChild(col);
        }
      }
      var copy = blankGrid(height, width, scale);
        if (lastTen.length >= 10){
            var old = lastTen.pop();
        }
        lastTen.push(copy);
    return false;
  }


/* FOR REVIEWS */

//filters reviews to keep only those from the "Minecraft Resources" category
function removeNotResource(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.Minecraft_Resources') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "Village Structures" category
function removeNotVillage(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.Village_Structures') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "In-Game Structures" category
function removeNotInGame(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.In-Game_Structures') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "Minecraft Features" category
function removeNotFeatures(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.Minecraft_Features') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "In-Game Experiences" category
function removeNotExperience(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.In-Game_Experiences') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//filters reviews to keep only those from the "Tutorial Experiences" category
function removeNotTutorial(){
    var allReviews = document.getElementsByClassName("aReview");
    for (var i=0; i < allReviews.length; i++){
        var metaTableParts = allReviews[i].querySelectorAll('table tr td');
        var found = false;
        for (var j = 0; j < metaTableParts.length; j++) {
            if (metaTableParts[j].querySelector('p.Tutorial_Experiences') != null){
                found = true;
            }
        }
        if (!found){
            allReviews[i].style.display = "none";
        } else {
            allReviews[i].style.display = "inline-block";
        }
    }
}

//function to reset order of reviews back to OG (order of ids)
function restoreAllReviews(){
    var allReviews = Array.from(document.getElementsByClassName("aReview"));
    allReviews.sort(function(i,j){
        if (i.id < j.id){
            return -1;
        } else if (i.id > j.id){
            return 1;
        } else {
            return 0;
        }
    });
    var parent = allReviews[0].parentNode;

    for (var k=0; k < allReviews.length; k++){
        parent.appendChild(allReviews[k]);
        allReviews[k].style.display = "inline-block";
    }   
}

//helper function to make date objects from the strings in the meta-content tables
function makeDate(dateMMDDYYYY){
    var month = parseInt(dateMMDDYYYY.split("/")[0],10)-1;
    var day = parseInt(dateMMDDYYYY.split("/")[1],10);
    var year = parseInt(dateMMDDYYYY.split("/")[2],10);
    console.log(new Date(year,month,day));
    return new Date(year,month,day);
}

//sorting function for the reviews; sorts them in chronological order (newest first)
function sortByDate(){
    var allReviews = Array.from(document.getElementsByClassName("aReview"));
    allReviews.sort(function(i,j){
       var first = makeDate(i.querySelector("td.date").textContent);
       var second = makeDate(j.querySelector("td.date").textContent);

        if (first < second){
            return 1;
        } else if (first > second){
            return -1;
        } else {
            return 0;
        }
    });
    var parent = allReviews[0].parentNode;

    for (var k=0; k < allReviews.length; k++){
        parent.appendChild(allReviews[k]);
        allReviews[k].style.display = "inline-block";
    }   
    
}

//sorting function for the reviews; sorts them in alphabetical order
function sortByName(){
    var allReviews = Array.from(document.getElementsByClassName("aReview"));
    allReviews.sort(function(i,j){
       var first = i.querySelector("button.collapsible").textContent;
       var second = j.querySelector("button.collapsible").textContent;

        if (first < second){
            return -1;
        } else if (first > second){
            return 1;
        } else {
            return 0;
        }
    });
    var parent = allReviews[0].parentNode;

    for (var k=0; k < allReviews.length; k++){
        parent.appendChild(allReviews[k]);
        allReviews[k].style.display = "inline-block";
    }   
}