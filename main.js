

window.addEventListener('load', ()=>{
    var mx = window.innerWidth;
    var my = window.innerHeight;

    Array.from(document.querySelectorAll("circle")).forEach((e)=>{
        var x = randint(0, mx);
        var y = randint(0, my);
        //console.log('cx="'+x+'" cy="'+y+'"');

        var dst = 200;

        var anm = e.querySelector("animateTransform");
        var vls="0,0; 500,500";
        //var vls="0 "+(x+dst)+" "+(y+dst)+"; 360 "+(x-dst)+" "+(y-dst);
        //var vls = (x-dst)+","+(y-dst)+"; "+(x+dst)+","+(y-dst)+"; "+(x+dst)+","+(y+dst)+"; "+(x)+","+(y+dst);

        anm.setAttribute("values", vls);
        anm.setAttribute("type", "transform"); // rotate
        anm.setAttribute("dur", "3s");
        //e.style.cx = x;
        //e.style.cy = y;
    });


    // Check if #toptrigger exists before observing
    const topTrigger = document.querySelector("#toptrigger");
    if (topTrigger) {
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log("TOP");
                    const navbar = document.querySelector("#navbar");
                    if (navbar) navbar.classList.remove("active");
                } else {
                    console.log("NOT TOP");
                    const navbar = document.querySelector("#navbar");
                    if (navbar) navbar.classList.add("active");
                }
            });
        }, { threshold: 0.01 });
        
        observer.observe(topTrigger);
    }

    // Timeline animations
    initTimelineAnimations();
    // Burger menu
    initBurgerMenu();
});

function randint(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reload() {
    var mx = window.innerWidth;
    var my = window.innerHeight;

    Array.from(document.querySelectorAll("circle")).forEach((e)=>{
        var x = randint(0, mx);
        var y = randint(0, my);
        console.log('cx="'+x+'" cy="'+y+'"');

        var dst = 200;

        var anm = e.querySelector("animateTransform");
        var vls="0,0; 500,500";
        //var vls="0 "+(x+dst)+" "+(y+dst)+"; 360 "+(x-dst)+" "+(y-dst);
        //var vls = (x-dst)+","+(y-dst)+"; "+(x+dst)+","+(y-dst)+"; "+(x+dst)+","+(y+dst)+"; "+(x)+","+(y+dst);

        anm.setAttribute("values", vls);
        anm.setAttribute("type", "transform"); // rotate
        anm.setAttribute("dur", "3s");
        e.style.cx = x;
        e.style.cy = y;
    });
}

window.addEventListener("click", ()=>{
    //reload();
});


/*window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let threshold = 200;
    let element = document.querySelector(".my-element");

    if (scrollPosition > threshold) {
        console.log("");
        element.classList.add("scrolled");
    } else {
        element.classList.remove("scrolled");
    }
});*/

function debug() {
    var selectors = [".dbgl", ".card", ".card_space"];
    var els = [];

    els = els.concat(Array.from(document.querySelectorAll(selectors)));

    els.forEach((e)=>{
        e.classList.toggle("debug");
    });
}

// Timeline animations
function initTimelineAnimations() {
    // Create intersection observer for timeline items
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe timeline items for scroll animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        timelineObserver.observe(item);
    });
}

// Burger menu functionality
function initBurgerMenu() {
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (!burgerMenu || !navMenu) {
        console.log('Burger menu elements not found');
        return;
    }

    // Toggle burger menu
    burgerMenu.addEventListener('click', (e) => {
        console.log("burger menu");
        e.preventDefault();
        e.stopPropagation();
        console.log('Burger menu clicked');
        burgerMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            burgerMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}