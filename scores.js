var olEl = document.getElementById ("scores")
var clearButton = document.getElementById ("clearScores")
function printScores () {
    var scores = JSON.parse (localStorage.getItem ("scores")) || []
    scores.sort (function( a, b) {
        return b.score - a.score
    } ) 
    for ( var i = 0; i < scores.length; i ++) {
        var liEl = document.createElement ("li")
        liEl.textContent = scores [i].initials+" - "+scores [i].score
        olEl.appendChild (liEl)
    };
};
printScores ();