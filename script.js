timer()

function timer(){
    const targetTime = new Date('Augus 31, 2021 00:00:00').getTime()
    const currntTime = new Date().getTime()
    const gap = targetTime - currntTime
    const sec = 1000
    const min = sec * 60
    const hour = min * 60 
    const day = hour * 24

    let textDate = Math.floor(gap/day)
    let textHour = Math.floor((gap%day)/hour)
    let textMin = Math.floor((gap%hour)/min)
    let textSec = Math.floor((gap%min)/sec)
    console.log(textSec)

    if (textSec < 10 ){
        textSec = "0" + textSec
    }
    if (textMin < 10 ){
        textMin = "0" + textMin
    }
    if (textHour < 10 ){
        textHour = "0" + textHour
    }
    if (textDate < 10 ){
        textDate = "0" + textDate
    }
    document.querySelector('#secs').innerHTML = textSec
    document.querySelector('#mins').innerHTML = textMin
    document.querySelector('#hours').innerHTML = textHour
    document.querySelector('#days').innerHTML = textDate

    setTimeout(timer, 1000)
}