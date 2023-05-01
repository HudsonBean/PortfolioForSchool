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