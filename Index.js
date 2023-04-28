// Project section click detector
function stopVideo(e) {
    //disconnect event
    if (e.stopPropagation) {
        e.stopPropagation();   // W3C model
    } else {
        e.cancelBubble = true; // IE model
    };
    //Do other stopping
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
    return;
};
function setVideo(a) {
    let frame = document.querySelector("#blur-frame");
    let player = document.querySelector(".project-player");
    let video = document.querySelector(".project-video");
    let source = document.querySelector(".project-video source");
    //Set the src of the video
    source.setAttribute("src", "./Videos/" + a.toString() + ".mp4");
    //video visuals
    frame.classList.add("blur-frame");
    player.style.display = "flex";
    video.style.opacity = "1";
    //reload the video and play it
    video.load();
    video.play();
    //set up click cancel event
    window.addEventListener("click", function(event) {
        if (event.target == this.document.getElementsByClassName("project-player")[0] || event.target == this.document.getElementsByClassName("blur-frame")[0]) {
            stopVideo(event);
        }
    });
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
            stopVideo(e);
        };
    };
};

let a = document.querySelectorAll(".project-click-detector")
for(let i = 0; i < a.length; i++) {
    a[i].onclick = function() {
        setVideo(i+1);
    };
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry.target)
        if (entry.isIntersecting) {
            entry.target.classList.remove('show');
        } else {
            entry.target.classList.add('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));