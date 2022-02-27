// var randomNumber1= math.floor(math.random()*6)+1;
// var randomDiceImage = "dice"+ randomNumber1+".png";
// var randomImagesource= "images/"+ randomDiceImage;
// .document.querySelectorAll("img") {0}image1.setAttribute("src",randomImagesource)
// var randomImagesource2 = "Images/dice"+ randomNumber2+".png";
// .document.querySelectorAll("img")[1].setAttribute("src",randomImagesource2);
// new Audio

var numberofDrumButtons= document.querySelectorAll(".drum").length;
for (let i = 0; i < numberofDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var instrument = document.querySelectorAll(".drum")[i];
        this.classList.add("pressed");
        setTimeout(function () { instrument.classList.remove("pressed"); }, 200);
        var key = this.innerHTML;
        makeSound(key);
    });
}

document.addEventListener("keypress", function (event) {
    var key = this.innerHTML;

    makeSound(event.key)
    keyColour(event.key)
});

function makeSound(key) {
    key = key.toLowerCase();
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3')
            audio.play();
            break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            break;

        case "s":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            break;

        case "s" :
            var audio = new Audio('sounds/tom-3.mp3') 
            audio.play();
            break;

        case "d" :
            var audio = new Audio('sounds/tom-4.mp3')    
            audio.play();
            break;

        case "j"  :
            var audio = new Audio('sounds/snare.mp3')    
            audio.play();
            break;

        case "k" :
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            break;
            case "l" :
            var audio = new Audio('sounds/crash.mp3')  
            audio.play();
            break;
            default: console.log(buttonInnerHTML);

    }
}