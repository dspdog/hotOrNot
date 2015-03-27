/**
 * Created by pmikolajczyk on 3/26/15.
 */

var elo = new EloRating();

var leftOption;
var rightOption;

function pluckTwoPlayers(){
    leftOption=randomPlayer();
    rightOption=randomPlayer();
    while(leftOption==rightOption){
        rightOption=randomPlayer();
    }

    $("#player1").text(leftOption.name);
    $("#player2").text(rightOption.name);

    buildResultsTable();
}

function buildResultsTable(){
    var sortedResults = _.sortBy(players, function(player){ return player.rating; }).reverse();

    var results = $("<ol/>");
    for(var i=0; i<sortedResults.length; i++){
        results.append($("<li>").text(sortedResults[i].rating + " -- " + sortedResults[i].name));
    }

    $("#results").empty().append(results);
}

function randomPlayer(){
    return players[Math.floor(Math.random()*players.length)];
}

$(function(){
    pluckTwoPlayers();

    $(".leftbox").click(function(){
        elo.setNewSetings(leftOption.rating, rightOption.rating, 1, 0); //1==win
        var results = elo.getNewRatings();

        leftOption.rating = results.a;
        rightOption.rating = results.b;

        pluckTwoPlayers();
    });

    $(".rightbox").click(function(){
        elo.setNewSetings(leftOption.rating, rightOption.rating, 0, 1); //1==win
        var results = elo.getNewRatings();

        leftOption.rating = results.a;
        rightOption.rating = results.b;

        pluckTwoPlayers();
    });
});