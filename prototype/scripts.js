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