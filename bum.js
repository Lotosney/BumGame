var scoreNum = 0

var num;
num = Math.floor(Math.random() * (100 - 3)) + 3

console.log(num)
var isThisBum = () => {

    if (num % 3 === 0 || num.toString().includes(3)) {
        return "bum"


    } else {
        return "not bum"

    }
}
console.log(isThisBum())
validateYes = () => {
    if (isThisBum() === "bum") {
        alert("Bum")



    } else {
        alert("You are wrong")

    }

}

validateNo = () => {
    if (isThisBum() === "not bum") {
        alert("Not bum")


    } else {
        alert("You are wrong")
    }

}
var number = document.getElementById('numberContainer')
number.innerText = `${num}`

var scoreNumber = document.getElementById('scoreNumberContainer')
scoreNumber.innerText = `${scoreNum}`