const startButton = document.querySelector('.js-start-button')

let taimer1, timer2, timer3
let timer1Active, timer2Active, timer3Active

startButton.addEventListener('click', function (event) {
    const firstItem = document.querySelector('.js-first-item')
    const secondItem = document.querySelector('.js-second-item')
    const thirdItem = document.querySelector('.js-third-item')

    firstItem.textContent = getRandomInt(9)
    secondItem.textContent = getRandomInt(9)
    thirdItem.textContent = getRandomInt(9)

    timer1 = setInterval(function () {
        firstItem.textContent = getRandomInt(9)
    }, 1000)
    timer2 = setInterval(function () {
        secondItem.textContent = getRandomInt(9)
    }, 1000)
    timer3 = setInterval(function () {
        thirdItem.textContent = getRandomInt(9)
    }, 1000)
    timer1Active = true
    timer2Active = true
    timer3Active = true

    startButton.disabled = true
    button1.disabled=false
    button2.disabled=false
    button3.disabled=false

})

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//次はそれぞれのボタンでタイマーをとめる
const button1 = document.querySelector('.js-btn-1')
const button2 = document.querySelector('.js-btn-2')
const button3 = document.querySelector('.js-btn-3')


button1.addEventListener('click', function () {
    clearInterval(timer1)
    timer1Active = false
    startButton.disabled = true

    if (!(timer1Active || timer2Active || timer3Active)) {
       
        const firstItem = document.querySelector('.js-first-item')
        const secondItem = document.querySelector('.js-second-item')
        const thirdItem = document.querySelector('.js-third-item')

        if (firstItem.textContent == secondItem.textContent &&
            secondItem.textContent == thirdItem.textContent &&
            thirdItem.textContent == firstItem.textContent) {
            alert('あたり')
        } else {
            alert('はずれ')
        }
        startButton.disabled = false
        button1.disabled=true
        button2.disabled=true
        button3.disabled=true

    }
    
})

button2.addEventListener('click', function () {
    clearInterval(timer2)
    timer2Active = false
    startButton.disabled = true

    if (!(timer1Active || timer2Active || timer3Active)) {
        const firstItem = document.querySelector('.js-first-item')
        const secondItem = document.querySelector('.js-second-item')
        const thirdItem = document.querySelector('.js-third-item')

        if (firstItem.textContent == secondItem.textContent &&
            secondItem.textContent == thirdItem.textContent &&
            thirdItem.textContent == firstItem.textContent) {
            alert('あたり')
        } else {
            alert('はずれ')
        }
        startButton.disabled = false
        button1.disabled=true
        button2.disabled=true
        button3.disabled=true
    }
})


button3.addEventListener('click', function () {
    clearInterval(timer3)
    timer3Active = false
    startButton.disabled = true

    if (!(timer1Active || timer2Active || timer3Active)) {
        const firstItem = document.querySelector('.js-first-item')
        const secondItem = document.querySelector('.js-second-item')
        const thirdItem = document.querySelector('.js-third-item')

        if (firstItem.textContent == secondItem.textContent &&
            secondItem.textContent == thirdItem.textContent &&
            thirdItem.textContent == firstItem.textContent) {
            alert('あたり')
        } else {
            alert('はずれ')
        }
        startButton.disabled = false
        button1.disabled=true
        button2.disabled=true
        button3.disabled=true

    }
    
})


//３つともとまったら当たり判定

//set interval mdnで検索

//バグを解決する方法→一度スタートを押させない