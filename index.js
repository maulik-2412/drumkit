

for(let i=0;i<document.querySelectorAll(".key").length;i++){
    document.querySelectorAll(".key")[i].addEventListener("click",function() {
        var key=this.innerHTML;
        sound(key);
        key=key.toLowerCase();
        pressed(key);
    });
    
}

document.addEventListener("keydown",function(event){
    sound(event.key.toUpperCase());
    pressed(event.key);
});

/* var audio=new Audio("sounds/tom-1.mp3");
        audio.play(); */

function sound(key){
    switch (key) {
            case "Q":
                var q=new Audio("sounds/crash.mp3");
                q.play();
                break;
            case "W":
                var w=new Audio("sounds/tom-1.mp3");
                w.play();
                break;
            case "E":
                var e=new Audio("sounds/tom-2.mp3");
                e.play();
                break;
            case "R":
                var r=new Audio("sounds/tom-3.mp3");
                r.play();
                break;
            case "B":
                var b=new Audio("sounds/snare.mp3");
                b.play();
                break;
            case "N":
                var n=new Audio("sounds/kick-bass.mp3");
                n.play();
                break;
            case "M":
                var m=new Audio("sounds/tom-4.mp3");
                m.play();
                break;
            default:
                console.log(key);
        }
}

function pressed(key){
    document.querySelector("."+key).classList.add("active");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("active");
    },100)
}