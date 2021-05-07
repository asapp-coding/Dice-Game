// let changeImg = document.getElementById('dice1');
// console.log("with id",changeImg)
// //image isng class name
// let image1=document.getElementsByClassName("img1")[0]
// let image2=document.querySelectorAll(".dice")
// console.log(image2);
// function changeDice1(){
//     let images = []
// }

// Getting Img1

let img1 = document.querySelector(".img1");

// Getting Img2

let img2 = document.querySelector(".img2");

// Getting Heading

let heading = document.querySelector("#heading");

function changeDice(){
    let imgNames = ['/images/dice1.png', '/images/dice2.png', '/images/dice3.png', '/images/dice4.png', '/images/dice5.png', '/images/dice6.png'];
    let randomImg = Math.floor(Math.random() * 6); //numbers from 0 to 5
    let randomImg2 = Math.floor(Math.random() * 6);
    //Changing the value of image attribute src
    img1.setAttribute("src", imgNames[randomImg])
    img2.setAttribute("src", imgNames[randomImg2])
    //Printing random numbers 
    console.log("Player 1 has,",randomImg+1);
    console.log("Player 2 has,",randomImg2+1);
    //Comparing random numbers to check who wins the game
    if(randomImg>randomImg2){
        //JS changes the content (innerHTML) of heading element to "Player 1 wins"
        heading.innerHTML = "Player 1 Wins"
    }
    else if(randomImg==randomImg2){
        heading.innerHTML = "Draw"
    }
    else{
        heading.innerHTML = "Player 2 Wins"
    }
}
