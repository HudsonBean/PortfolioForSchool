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