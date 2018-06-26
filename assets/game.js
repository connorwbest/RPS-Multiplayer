//Initialize Firebase
var config = {
    apiKey: "AIzaSyAsTiu35JYwegLjBbOjw_ge-OtkFT1YQDk",
    authDomain: "rock-paper-scissors-795e6.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-795e6.firebaseio.com",
    projectId: "rock-paper-scissors-795e6",
    storageBucket: "",
    messagingSenderId: "565974495670"
};
firebase.initializeApp(config);

var database = firebase.database();

var connectionsRef = database.ref("/connections");

var connectedRef = database.ref(".info/connected");

//variables for tracking if two players have joined
var playerOne = 'none';
var playerTwo = 'none';
var maxPlayers = 2;
var currentPlayers= 0;
//var playerOne = '';
//var playerTwo = '';

database.ref().on('child_added', function (snap) {
    
    var playerOne = snap.val().playerOne;
    var playerTwo = snap.val().playerTwo;

    $('#playerOneName').text(playerOne);
    $('#playerTwoName').text(playerTwo);
})


//Execute when page is fully loaded
$(document).ready(function () {

    //On click for joining the game
    $('#newPlayer').on('click', function (event) {
        event.preventDefault();

        //grabs the form input value
        var userName = $('#playerJoin').val().trim();

        if ((playerOne !== null) && (playerTwo !== null)) {
            playerOneRdy = true;
            database.ref().push({
                playerOne: userName
            })


        }

        else if ((playerOne.exists()) && (playerTwo !== null)) {
            playerTwoRdy = true;
            database.ref().push({
                playerTwo: userName
            });


        }

        else if ((playerOne.exists()) && (playerTwo.exists())) {
            alert("Too many players, please wait!");
        };

        


    });

    

    

});