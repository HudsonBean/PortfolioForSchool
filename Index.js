// Project section click detector
function stopVideo() {
    let frame = document.querySelector("#blur-frame");
    let player = document.querySelector(".project-player");
    let video = document.querySelector(".project-video");
    let source = document.querySelector(".project-video source");
    //video visuals
    frame.classList.remove("blur-frame");
    player.style.display = "none";
    video.style.opacity = "1";
    //Stop video
    video.pause();
    video.currentTime = 0;
};
function setVideo(a) {
    let frame = document.querySelector("#blur-frame");
    let player = document.querySelector(".project-player");
    let video = document.querySelector(".project-video");
    let source = document.querySelector(".project-video source");
    //Set the src of the video
    source.setAttribute("src", "../Personal Website Add landing pages and Jump Links/Videos/" + a.toString() + ".mp4");
    //video visuals
    frame.classList.add("blur-frame");
    player.style.display = "flex";
    video.style.opacity = "1";
    //reload the video and play it
    video.load();
    video.play();
    //set up click cancel event
    window.onclick = function(e) {
        console.log("Cancel")
    };
    //Set up scroll cancel event
    let origin = document.documentElement.scrollTop
    function check(a,b) {
        let c = Math.abs((b-a));
        if (c>100) {
            return true;
        } else {
            return false;
        };
    };
    window.onscroll = function (e) {
        //console.log(document.documentElement.scrollTop);
        let condition = check(origin, document.documentElement.scrollTop);
        if (condition==true) {
            //console.log("ahdhahdahdhah")
            //disconnect event
            if (e.stopPropagation) {
                e.stopPropagation();   // W3C model
            } else {
                e.cancelBubble = true; // IE model
            };
            //fire stop video
            stopVideo();
            return;
        };
    };
    
};

let a = document.querySelectorAll(".project-click-detector")
for(let i = 0; i < a.length; i++) {
    a[i].onclick = function() {
        setVideo(i+1);
    };
}
