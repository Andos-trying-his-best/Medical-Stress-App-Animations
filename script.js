const app = document.getElementById("appID");
const header = document.getElementById("headerID");
const main = document.getElementById("mainID");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");
const bar4 = document.getElementById("bar4");
const bar5 = document.getElementById("bar5");
const bar6 = document.getElementById("bar6");
const bar7 = document.getElementById("bar7");
const spinner = document.getElementById("spinnerID");

window.addEventListener("load",()=>{
    header.style.opacity = "1";
    header.style.transform =  "translateX(0)";
    spinner.style.transform = "rotate(-45deg)";
    app.style.opacity = "1";
    setTimeout(() => {
        main.style.opacity = "1";
        setTimeout(() => {
            bar1.style.height = "30%";
            bar2.style.height = "86%";
            bar3.style.height = "50%";
            bar4.style.height = "66%";
            bar5.style.height = "71%";
            bar6.style.height = "25%";
            bar7.style.height = "66%";
        }, 100);
    }, 1000);
})