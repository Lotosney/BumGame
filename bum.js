var scoreNum = 0
var yesText= "Zgadłeś!"
var noText = "Dobrze, To nie jest bum"
var wrongText ="Źle, to nie jest Bum,"
var wrongBumText ="Źle, to jest Bum"
var fillText= "Tu będzie feedback"
var num;
num = Math.floor(Math.random() * (100 - 3)) + 3

var number = document.getElementById('numberContainer')
number.innerText = `${num}`

var yesNoText = document.getElementById('yesNoContainer')
yesNoText.innerText = `${fillText}`

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
        
        let text= yesText
        scoreNum=scoreNum+1
        scoreNumber.innerText = `${scoreNum}`

        yesNoText.innerText=`${text}`

    } else {

        let text= wrongBumText
        yesNoText.innerText=`${text}`

    }

}

validateNo = () => {
    if (isThisBum() === "not bum") {
      
        scoreNum=scoreNum+1
        scoreNumber.innerText = `${scoreNum }`
        let text= noText
        yesNoText.innerText=`${text}`
    } else {
        
        let text= noText
        yesNoText.innerText=`${text}`
    }

}
