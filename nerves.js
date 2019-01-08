var master = ["Drowning.mp3", "KILLSHOT.mp3", "nextsong.mp3"];


function SongRandomizer(){
    console.log("hi");
    var song;
    var rando = Math.random();
    console.log(rando);
    if(rando >.5){
        console.log("get high");
        song = "Drowning.mp3";
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
