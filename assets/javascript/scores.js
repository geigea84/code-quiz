const highScoreList = document.querySelector("#high-score-list");

window.onload = function() {
    let highScores = JSON.parse(window.localStorage.getItem("scores")) || [];

    //https://www.w3schools.com/jsref/jsref_sort.asp
    highScores.sort(function(a, b) {
        return b.score - a.score;
    });

    highScores.forEach(function(score) {
        let listItem = document.createElement("li");
        listItem.textContent = score.initials + " --- " + score.score;
        highScoreList.appendChild(listItem);
    });
}