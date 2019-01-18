var master = ["Drowning.mp3", "KILLSHOT.mp3", "radiohead.mp3"];
// for now doing without master

function SongRandomizer(){
    console.log("hi");
    console.log("stop looking at my code");
    var song;
    var rando = Math.random();
    console.log(rando);
    if(rando <.1){
        song = "Drowning.mp3";
    }else if(rando < .2){
        song = "Treat.mp3";
    }else if(rando < .3){
        song = "radiohead.mp3";
    }else if(rando < .4){
        song = "Love.mp3";
    }else if(rando < .5){
        song = "Perfume.mp3";
    }else if(rando < .6){
        song = "KILLSHOT.mp3";
    }else if(rando < .7){
        song = "Mind.mp3";
    }else if(rando < .8){
        song = "Hey.mp3";
    }else{
        song = "Sunshine.mp3";
    }
    var target = document.getElementById("musicplayer");
    var msg = "<embed src='./"+song+"'></embed>";
    console.log(msg);
    if(target){
        target.innerHTML = msg;
    }
}
