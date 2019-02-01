var master = ["Drowning.mp3", "KILLSHOT.mp3", "radiohead.mp3"];
// for now doing without master

function SongRandomizer(){
    console.log("hi");
    console.log("stop looking at my code");
    var song;
    var rando = Math.random();
    console.log(rando);
    if(rando <.08){
        song = "Drowning.mp3";
    }else if(rando < .16){
        song = "Treat.mp3";
    }else if(rando < .32){
        song = "radiohead.mp3";
    }else if(rando < .4){
        song = "Love.mp3";
    }else if(rando < .48){
        song = "Perfume.mp3";
    }else if(rando < .56){
        song = "KILLSHOT.mp3";
    }else if(rando < .62){
        song = "Mind.mp3";
    }else if(rando < .68){
        song = "Hey.mp3";
    }else if(rando < .76){
        song = "Bohemian.mp3";
    }else if(rando < .9){
        song = "Hurt.mp3";
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
