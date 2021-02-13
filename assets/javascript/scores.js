const highScoreList = document.querySelector("#high-score-list");
const clearBtn = document.querySelector("#clear-btn");

window.onload = function () {
    let highScores = JSON.parse(window.localStorage.getItem("scores")) || [];

    //https://www.w3schools.com/jsref/jsref_sort.asp
    //sort scores from high to low
    highScores.sort(function (a, b) {
        return b.score - a.score;
    });

    //create list items for scores and append to page
    highScores.forEach(function (score) {
        let listItem = document.createElement("li");
        listItem.textContent = score.initials + " --- " + score.score;
        highScoreList.appendChild(listItem);
    });
}

//https://www.w3schools.com/jsref/met_loc_reload.asp
//clear scores list on button click and refresh page
function clearScores() {
    window.localStorage.removeItem("scores");
    window.location.reload();
}

clearBtn.addEventListener("click", clearScores);