let div=document.querySelector('.countdown')
div.addEventListener("mouseover", function() {
    let countVals = document.querySelectorAll('.countdown [data-value]');
    let interval = 3000;
    
    countVals.forEach(countVal => {
        let startVal = 0;
        let endVal = parseInt(countVal.getAttribute("data-value"));
        let duration = Math.round(interval / endVal);
        let countdown = setInterval(() => {
            startVal = startVal + 10;
            countVal.textContent = startVal + " + " + countVal.innerText.split(" + ")[1];
            if (startVal === endVal) {
                clearInterval(countdown);
            }
        }, duration);
    });
});