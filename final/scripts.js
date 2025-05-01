let mouseHovering = false;
document.addEventListener("mousedown", () => mouseHovering = true);
document.addEventListener("mouseup", () => mouseHovering = false);

let newestCells = [];
let neighboringCells = [];
let appendable = [];
let lastTen = [];

let users = {};
let user = ""; //current person
let pw = "";

let temp = "";

let groups = [];

/*FOR FILE HANDLING*/
function createFile(){
    const currentGrid = document.getElementsByClassName("emptyGrid")[0];
    var width = 0;
    var height = 0;
    if (currentGrid.children!=null){
        width = currentGrid.children.length;
        if (currentGrid.children[0]!=null){
            height = currentGrid.children[0].children.length;
        }
    }
    console.log("width: " + width);
    console.log("height: " + height);

    const myFile = {};
    myFile.width = width;
    myFile.height = height;
    myFile.builds = groups;
    console.log("made file");
    const jsonString = JSON.stringify(myFile, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    console.log("made blob");
    const a = document.getElementById("jsonFile");
    a.href = URL.createObjectURL(blob);
    a.download = "your_build.json";
    setTimeout(() => URL.revokeObjectURL(url), 100);
    console.log("done with file");
}

/* FOR GRID */
function saveLayer(){
    if (user===""){
        alert("Sign in to save your work!");
        return false;
    }


    return false;
}

//designates a group as a build, creates a build object
function createBuild(){
    if (neighboringCells.length!=0){
        var newGridFor = document.getElementsByClassName("emptyGrid")[0];
        createGroup(neighboringCells, newGridFor);
        neighboringCells = [];
        var buildPath = document.getElementById("buildLayers");
        buildPath.innerHTML += ((groups[groups.length-1].title) + "<br>");
    } else {
        alert("There are no grid sections prepped for building.");
    }
    return false;
}

//restores most recent grid state prior to most current change
function undoLast(){
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    var rows = newGridFor.children;

    for (var j = 0; j < groups.length; j++){
        if (groups[j].gridSlot === (lastTen.length - 1)){
            neighboringCells = structuredClone(groups[j].gridState);
            groups.splice(i,1);
            console.log("Removed one group, groups remaining: " + String(groups.length));
            var parts = document.getElementById("buildLayers").innerHTML.split("<br>");
            document.getElementById("buildLayers").innerHTML = "";
            for (var p = 0; p < parts.length - 2; p++){
                 console.log(parts.length - 1);
                 document.getElementById("buildLayers").innerHTML = document.getElementById("buildLayers").innerHTML + parts[p];
            }
        }
    }

    var toRestore;
    if (lastTen.length === 0){
        console.log("nothing to restore");
        var blankSet = blankGrid(rows.length, rows[0].children.length, 1);
        lastTen.push(blankSet);
        return false;
    }
    toRestore = lastTen.pop();
    toRestore = lastTen[lastTen.length - 1];
    
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
                if (ogCells[j].style.backgroundColor === "red"){
                    console.log()
                    for (var n = 0; n < neighboringCells.length; n++){
                        if (neighboringCells[n]===ogCells[j].id){
                            neighboringCells.splice(n,1);
                            n=0;
                        }
                    }
                }
            }
        }
    }

    return false;
}

//restores the grid to a blank state
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
    groups = [];
    neighboringCells = [];
    var copy = copyGrid(rows.length, rows[0].children.length, 1, newGridFor);
    if (lastTen.length >= 10){
        var old = lastTen.splice(0,1);
    }
    lastTen.push(copy);
    document.getElementById("buildLayers").innerHTML = "";
    return false;
}

//helper function to find a group given a cell
function findGroup(cell){
    var index = 0;
    for (var l = 0; l < groups.length; l++){
        var cells = groups[l].gridState;
        for (var k = 0; k < cells.length; k++){
            if (cell.id === cells[k]){
                return l;
            }
        }
    }
    return -1;
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
        } else if (rightNeighbor!=null && rightNeighbor.style.backgroundColor === "purple" 
            && document.getElementById("appendState").checked){
            var oldGroup = findGroup(rightNeighbor);
            if (oldGroup > -1){
                groups.splice(oldGroup,1);
                console.log("removed a prior");
            }
            rightNeighbor.style.backgroundColor = "blue";
            if (!toPopulate.includes(rightNeighbor.id)){
                toPopulate.push(rightNeighbor.id);
                findNeighbors(toPopulate, grid, width, height, scale, rightNeighbor, color);
            }
        }
        if (lefttNeighbor!=null && lefttNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(lefttNeighbor.id)){
                toPopulate.push(lefttNeighbor.id);
                console.log("left is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, lefttNeighbor, color);
            }
        } else if (lefttNeighbor!=null && lefttNeighbor.style.backgroundColor === "purple"
            && document.getElementById("appendState").checked){
            var oldGroup = findGroup(lefttNeighbor);
            if (oldGroup > -1){
                groups.splice(oldGroup,1);
                console.log("removed a prior");
            }
            lefttNeighbor.style.backgroundColor = "blue";
            if (!toPopulate.includes(lefttNeighbor.id)){
                toPopulate.push(lefttNeighbor.id);
                findNeighbors(toPopulate, grid, width, height, scale, lefttNeighbor, color);
            }
        }
        if (topNeighbor!=null && topNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(topNeighbor.id)){
                toPopulate.push(topNeighbor.id);
                console.log("top is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, topNeighbor, color);
            }
        } else if (topNeighbor!=null && topNeighbor.style.backgroundColor === "purple"
            && document.getElementById("appendState").checked){
            var oldGroup = findGroup(topNeighbor);
            if (oldGroup > -1){
                groups.splice(oldGroup,1);
                console.log("removed a prior");
            }
            topNeighbor.style.backgroundColor = "blue";
            if (!toPopulate.includes(topNeighbor.id)){
                toPopulate.push(topNeighbor.id);
                findNeighbors(toPopulate, grid, width, height, scale, topNeighbor, color);
            }
            
        }
        if (bottomNeighbor!=null && bottomNeighbor.style.backgroundColor === color){
            if (!toPopulate.includes(bottomNeighbor.id)){
                toPopulate.push(bottomNeighbor.id);
                console.log("bottom is a match!");
                findNeighbors(toPopulate, grid, width, height, scale, bottomNeighbor, color);
            }
        } else if (bottomNeighbor!=null && bottomNeighbor.style.backgroundColor === "purple"
            && document.getElementById("appendState").checked){
            var oldGroup = findGroup(bottomNeighbor);
            if (oldGroup > -1){
                groups.splice(oldGroup,1);
                console.log("removed a prior");
            }
            bottomNeighbor.style.backgroundColor = "blue";
            if (!toPopulate.includes(bottomNeighbor.id)){
                toPopulate.push(bottomNeighbor.id);
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

//helper function to save groups when they are made
function createGroup(neighboringCells, currentGrid){
    const structure = {};
    var cells = [];
    var gridState = [];
    for (var i = 0; i < neighboringCells.length; i++){
        const block = {};
        block.type = (document.getElementById(neighboringCells[i]).style.backgroundImage);
        document.getElementById(neighboringCells[i]).style.backgroundColor = "purple";
        block.index = neighboringCells[i];
        cells.push(block);
        gridState.push(neighboringCells[i]);
    }
    structure.cells = cells;
    structure.gridState = gridState;
    structure.gridSlot = lastTen.length - 1;
    structure.title = document.getElementById("title").value;
    structure.type = document.getElementById("type").value;
    groups.push(structure);
    console.log("group added: " + groups.length + ", " + structure.title + ", " + structure.type);
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    var copy = copyGrid(height, width, scale, newGridFor);
    if (lastTen.length >= 10){
        var old = lastTen.splice(0,1);
    }
    lastTen.push(copy);
    return false;
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
        } else if ((800*scale)/width < 23){
            alert("Please enter a smaller width or the grid won't fit!");
            return false;
        }
        if (isNaN(height)) {
            alert("You must enter a height");
            return false;
        } else if (height<=0){
            alert("You must enter a height");
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
            if (this.style.backgroundColor != "blue" && this.style.backgroundColor != "purple"){
                this.style.backgroundColor = 
                (this.style.backgroundColor === "red") ? "white" : "red";
                
                var copy = copyGrid(height, width, scale, newGridFor);
                if (lastTen.length >= 10){
                    var old = lastTen.splice(0,1);
                }
                lastTen.push(copy);
            }
            });
            
          col.addEventListener("mouseover", function(e) {
            e.preventDefault()
            if (mouseHovering && this.style.backgroundColor != "blue") {
                this.style.backgroundColor = "red";
                var copy = copyGrid(height, width, scale, newGridFor);
                if (lastTen.length >= 10){
                    var old = lastTen.splice(0,1);
                }                
                lastTen.push(copy);
            } else if (this.style.backgroundColor === "purple") {
                var groupIndex = findGroup(this);
                if (groupIndex > -1){
                    console.log("time to title!");
                    var titlePlace = document.getElementsByClassName("buildTitle")[0];
                    const titlePop = document.createElement("p");
                    titlePop.innerText = groups[groupIndex].title;
                    titlePlace.appendChild(titlePop);
                    titlePlace.style.left = e.pageX + 'px';
                    titlePlace.style.top = e.pageY + 'px';
                    titlePlace.style.backgroundColor = "wheat";
                } else {
                    console.log("how is this not a group?");
                }
            }
            });
          col.addEventListener('dblclick', function() {
            if (this.style.backgroundColor != "blue"){
                alert('This part of the grid is now prepped for build assignment!');
                this.style.backgroundColor = "red";
                neighboringCells.push(this.id);
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
                    var old = lastTen.splice(0,1);
                }
                lastTen.push(copy);
            }
            });
            col.style.backgroundColor = "white";
            row.appendChild(col);
        }
      }
      var copy = blankGrid(height, width, scale);
        if (lastTen.length >= 10){
            var old = lastTen.splice(0,1);
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