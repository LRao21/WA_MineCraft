let mouseHovering = false;
document.addEventListener("mousedown", () => mouseHovering = true);
document.addEventListener("mouseup", () => mouseHovering = false);
let newestCells = [];

//creates grid given input for width and height
function calculateGrid() {
    let height = parseInt(document.getElementById("height").value,10);
    let width = parseInt(document.getElementById("width").value,10);
    try{
        if (isNaN(width)) {
            alert("You must enter a width");
            return false;
        } else if (width<=0){
            alert("You must enter a width");
            return false;
        } else if (width > 40){
            alert("Please enter a smaller width (<40) or the grid won't fit!");
            return false;
        }
        if (isNaN(height)) {
            alert("You must enter a height");
            return false;
        } else if (height<=0){
            alert("You must enter a height");
            return false;
        } else if (height > 40){
            alert("Please enter a smaller height (<40) or the grid won't fit!");
            return false;
        }
    } catch (err){
        alert("error: " + err.message);
        return false;
    }
    var newGridFor = document.getElementsByClassName("emptyGrid")[0];
    newGridFor.innerHTML = "";
    for (var i = 0; i < height; i++) {
         var row = document.createElement("div");
        row.className = "row";
        newGridFor.appendChild(row);
  
        for (var j = 0; j < width; j++) {
        var col = document.createElement("div");
          col.className = "col";
        //   col.addEventListener("click", function() {
        //     this.style.backgroundColor = 
        //     (this.style.backgroundColor === "red") ? "white" : "red";
        //     });
        col.addEventListener("mousedown", function() {
            (this.style.backgroundColor === "red") ? "white" : "red";
            newestCells.push(this);
        });
        col.addEventListener("mouseover", function(e) {
            e.preventDefault()
            if (mouseHovering) {
                this.style.backgroundColor = "red";
                newestCells.push(this);
            }
            });
          row.appendChild(col);
        }
      }
    return false;
  }

//undos most recent activity in the grid
function undoLast(){
    var mostRecent = newestCells.pop();
    (mostRecent.style.backgroundColor === "red") ? "white" : "red";
}

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