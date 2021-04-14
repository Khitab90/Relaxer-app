const container = document.querySelector('.container')
const text = document.querySelector('#text') //or getElementById

const totalTime = 7500 //ms
const breathTime = (totalTime / 5) * 2
const holdTime = totalTime / 5

breathAnimation()

function breathAnimation() {
    text.innerHTML = 'Breath In!'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold' //change the text that's inside the paragraph; change text to "Hold" after breathTime

        setTimeout(() => {
            text.innerText = 'Breath Out!'
            container.className = 'container shrink'
        }, holdTime)
    }, breathTime) //takes in time to wait
}

setInterval(breathAnimation, totalTime)