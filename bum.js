var scoreNum = 0
numRandom=()=>{
    var num;
    num = Math.floor(Math.random() * (100 - 3)) + 3
    return num
}

var isThisBum = () => {

    if (numRandom() % 3 === 0 || numRandom().toString().indexOf("3") != -1) {
        return "bum"
        

    } else {
        return "not bum"

    }
}

var number = document.getElementById('numberContainer')
number.innerText = `${numRandom()}`

var scoreNumber = document.getElementById('scoreNumberContainer')
scoreNumber.innerText = `${scoreNum}`

