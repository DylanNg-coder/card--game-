function onSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    let username = profile.getName();
    document.getElementById("user1").innerHTML = "The home player is " + username;
}
let playeroneScore = 0;
let playertwoScore = 0
let nextButton = document.getElementById("next");
let pairCount = 0;
let redArr = [];
let yellowArr = [];
let blackArr = [];
for(let i=0;i<30;i++){
    let colour = Math.floor(Math.random()*3);
    if(colour === 0){
        redArr.push(i);
    } else if(colour === 1){
        yellowArr.push(i);
    }else{
        blackArr.push(i);
    }
}
function moveNext(){
    let Player1colour;
    let player2colour;
    for(let i = 0; i<redArr.length;i++){
        if(redArr[i] === pairCount){
            Player1colour = "red";
        }else if(redArr[i]===pairCount+1){
            Player2colour = "red";
        }
    }
    document.getElementById("playerOneScore").innerHTML = "Score: " + playeroneScore;
    document.getElementById("playerTwoScore").innerHTML = "Score: " + playertwoScore;
}