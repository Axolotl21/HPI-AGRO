const valueDisplays = document.querySelectorAll(".number-number");
let interval = 1750;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(()=>{
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter);
        }
    }, duration)
});

const animation = document.querySelectorAll('.animation');
window.addEventListener("scroll", ()=> {
    let length = animation.length;
    console.log(length);
    for(let i = 0; i < length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = animation[i].getBoundingClientRect().top;
        let elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            animation[i].classList.add("show");
        }
    }
});

