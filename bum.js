let scoreNum = 0;
let negScoreNum = 0;
const yesText = "Zgadłeś!";
const noText = "Dobrze, To nie jest bum";
const wrongText = "Źle, to nie jest Bum,";
const wrongBumText = "Źle, to jest Bum";
const fillText = "Tu będzie feedback";
var num;
num = Math.floor(Math.random() * (100 - 3)) + 3

const number = document.getElementById('numberContainer')
number.innerText = `${num}`

const yesNoText = document.getElementById('yesNoContainer')
yesNoText.innerText = `${fillText}`

const scoreNumber = document.getElementById('scoreNumberContainer')
scoreNumber.innerText = `${scoreNum}`
const negativeScoreNumber = document.getElementById('negativeScoreNumberContainer')
negativeScoreNumber.innerText = `${negScoreNum}`

console.log(num)
isThisBum = () => {

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

        let text = yesText
        scoreNum = scoreNum + 1
        scoreNumber.innerText = `${scoreNum}`

        yesNoText.innerText = `${text}`

    } else {

        let text = wrongBumText
        yesNoText.innerText = `${text}`
        negScoreNum = negScoreNum + 1
        negativeScoreNumber.innerText = `${negScoreNum}`
    }

}

validateNo = () => {
    if (isThisBum() === "not bum") {

        scoreNum = scoreNum + 1
        scoreNumber.innerText = `${scoreNum }`
        let text = noText
        yesNoText.innerText = `${text}`
    } else {

        let text = wrongText
        yesNoText.innerText = `${text}`
        negScoreNum = negScoreNum + 1
        negativeScoreNumber.innerText = `${negScoreNum}`
    }

}