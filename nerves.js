var master = ["Drowning.mp3", "KILLSHOT.mp3", "radiohead.mp3"];
// for now doing without master

function SongRandomizer(){
    console.log("hi");
    var song;
    var rando = Math.random();
    console.log(rando);
    if(rando >.33 && rando <.66){
        console.log("stop looking at my code");
        song = "Drowning.mp3";

    }else if(rando > .66){
        console.log("hi");
        song = "radiohead.mp3";
    }else{
        song = "KILLSHOT.mp3";

    }
    var target = document.getElementById("musicplayer");
    var msg = "<embed src='./"+song+"'></embed>";
    console.log(msg);
    if(target){
        target.innerHTML = msg;
    }
}
