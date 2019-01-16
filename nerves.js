var master = ["Drowning.mp3", "KILLSHOT.mp3", "radiohead.mp3"];
// for now doing without master

function SongRandomizer(){
    console.log("hi");
    var song;
    var rando = Math.random();
    console.log(rando);
    if(rando <.15){
        console.log("stop looking at my code");
        song = "Drowning.mp3";

    }else if(rando < .3){
        console.log("hi");
        song = "Treat.mp3";
    }else if(rando < .45){
        console.log("hi");
        song = "radiohead.mp3";
    }else if(rando < .6){
        console.log("hi");
        song = "Love.mp3";
    }else if(rando < .8){
        console.log("hi");
        song = "Perfume.mp3";
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
