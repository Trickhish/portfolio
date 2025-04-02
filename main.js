

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


    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("TOP");
                document.querySelector("#navbar").classList.remove("active");
            } else {
                console.log("NOT TOP");
                document.querySelector("#navbar").classList.add("active");
            }
        });
    }, { threshold: 0.01 });
    
    observer.observe(document.querySelector("#toptrigger"));
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