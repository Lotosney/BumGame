var scoreNum = 0

var num;
num = Math.floor(Math.random() * (100 - 3)) + 3
var number = document.getElementById('numberContainer')
number.innerText = `${num}`

var scoreNumber = document.getElementById('scoreNumberContainer')
scoreNumber.innerText = `${scoreNum}`
console.log(num)
var isThisBum = () => {

    if (num % 3 === 0 || num.toString().includes(3)) {
        num = Math.floor(Math.random() * (100 - 3)) + 3;
        number.innerText = `${num}`;
        return "bum"


    } else {
        num = Math.floor(Math.random() * (100 - 3)) + 3;
        number.innerText = `${num}`;
        return "not bum"

    }
}
console.log(isThisBum())
validateYes = () => {
    if (isThisBum() === "bum") {
        alert("Bum")
        scoreNum=scoreNum+1
        scoreNumber.innerText = `${scoreNum}`


    } else {
        alert("You are wrong")

    }

}

validateNo = () => {
    if (isThisBum() === "not bum") {
        alert("Not bum")
        scoreNum=scoreNum+1
        scoreNumber.innerText = `${scoreNum }`


    } else {
        alert("You are wrong")
    }

}
