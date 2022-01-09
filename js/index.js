function printOnModal(e, time) {
    const modal = document.querySelector('#modal')
    let buttons = document.querySelectorAll('.item')

    modal.innerHTML = ""
    modal.style.display = "block"
    modal.style.fontSize = "24px"
    modal.innerText = e

    setTimeout(function(){
        modal.style.display = "none"
    }, time)

}

function getQuote() {
    let url = "https://api.quotable.io/random"
    fetch(url)
    .then((data) => data.json())
    .then((quote) => {
        printOnModal(quote.content+"\n-"+quote.author, 7000)
    });
}

function countdownTimer() {
    const modal = document.querySelector('#modal')
    modal.innerHTML = ""
    modal.style.display = "block"
    let s = document.createElement("input")
    let btn = document.createElement("button")
    s.type = "number"
    s.name = "s"
    s.placeholder = "Seconds"
    s.style.width = "20%"
    btn.innerText = "Count down"

    btn.onclick = function () {
        let seconds = document.querySelector('input[name="s"]').value
        let timer = setInterval(function() {
                modal.style.display = "block"
                if(seconds > 1) {
                    modal.innerHTML = ""
                    modal.innerText = seconds+" seconds left"
                    seconds--
                    console.log(seconds)
                } else if(seconds == 0) {
                    modal.innerText = "Time's up!"
                    clearInterval(timer)
                    setTimeout(function() {
                        modal.style.display = "none"
                    }, 1000)
                } else {
                    modal.innerHTML = ""
                    modal.style.display = "block"
                    modal.innerText = seconds+" second left"
                    seconds--
                }
            }, 1000)
        }

    modal.appendChild(s)
    modal.innerHTML += "<br>"
    modal.appendChild(btn)
}

function rockPaperScissors() {
    const modal = document.querySelector('#modal')
    modal.innerHTML = ""
    modal.style.display = "block"
    let choices = document.createElement("select")
    choices.name = "hand"
    let choice1 = document.createElement("option")
    choice1.value = "rock"
    choice1.innerText = "Rock"
    choices.appendChild(choice1)
    let choice2 = document.createElement("option")
    choice2.value = "paper"
    choice2.innerText = "Paper"
    choices.appendChild(choice2)
    let choice3 = document.createElement("option")
    choice3.value = "scissors"
    choice3.innerText = "Scissors"
    choices.appendChild(choice3)
    let btn = document.createElement("button")
    btn.innerText = "Submit"
    let options = ['uses', 'goes with', 'selects', 'went for']

    btn.onclick = function () {
        let playerMove = document.querySelector('select[name="hand"]').value
        let moves = [
            ["rock", "scissors"],
            ["paper", "rock"],
            ["scissors", "paper"]
        ]
        let ai = Math.floor(Math.random() * 3)
        let computerMove = moves[ai][0]
        let moveToBeat = moves[ai][1]
        if (computerMove === playerMove) {
            alert("It's a tie!")
        } else if(playerMove === moveToBeat) {
            alert("Computer "+options[Math.floor(Math.random() * 4)]+" "+computerMove+", Computer wins!")
        } else {
            alert("Computer "+options[Math.floor(Math.random() * 4)]+" "+computerMove+", Player wins!")
        }
    }

    modal.appendChild(choices)
    modal.innerHTML += "<br>"
    modal.appendChild(btn)
}

function simpleCalc() {
    const modal = document.querySelector('#modal')
    modal.innerHTML = ""
    modal.style.display = "block"
    let inp = document.createElement("input")
    let btn = document.createElement("button")
    inp.type = "text"
    inp.name = "inp"
    inp.placeholder = "Enter expression"
    btn.innerText = "Submit"

    btn.onclick = function () {
        let expression = document.querySelector('input[name="inp"]').value
        printOnModal("Answer: "+eval(expression), 2000)
    }

    modal.appendChild(inp)
    modal.innerHTML += "<br>"
    modal.appendChild(btn)
}

function calcBMI() {
    const modal = document.querySelector('#modal')
    modal.innerHTML = ""
    modal.style.display = "block"
    let feet = document.createElement("input")
    feet.name = "feet"
    feet.placeholder = "Feet"
    let inches = document.createElement("input")
    inches.name = "inches"
    inches.placeholder = "Inches"
    let weight = document.createElement("input")
    weight.name = "kgs"
    weight.placeholder = "Kilograms"
    let btn = document.createElement("button")
    btn.innerText = "Calculate"

    btn.onclick = function () {
        let height_feet = document.querySelector('input[name="feet"]').value
        let height_inches = document.querySelector('input[name="inches"]').value
        let weight = document.querySelector('input[name="kgs"]').value
        let metres = (height_feet*0.3048) + (height_inches*0.0254)
        let bmi = (weight/(metres**2)).toLocaleString(undefined,{maximumFractionDigits: 3});
        printOnModal("Your BMI is "+bmi, 3000)
    }

    modal.innerHTML += "Height<br>"
    modal.appendChild(feet)
    modal.appendChild(inches)
    modal.innerHTML += "<br>Weight<br>"
    modal.appendChild(weight)
    modal.innerHTML += "<br>"
    modal.appendChild(btn)
}

function tipCalc() {
    const modal = document.querySelector('#modal')
    modal.innerHTML = ""
    modal.style.display = "block"
    let bill = document.createElement("input")
    bill.name = "total"
    bill.placeholder = "Bill Amount"
    let tip = document.createElement("input")
    tip.name = "tip"
    tip.placeholder = "Tip percentage"
    let btn = document.createElement("button")
    btn.innerText = "Get tip"

    btn.onclick = function () {
        let bill = document.querySelector('input[name="total"]').value
        let percent = document.querySelector('input[name="tip"]').value
        let total = (bill*(1+(percent/100))).toLocaleString(undefined,{maximumFractionDigits: 2})
        printOnModal("Your bill with tip comes out to be "+total+"/-", 4000)
    }

    modal.appendChild(bill)
    modal.appendChild(tip)
    modal.innerHTML += "<br>"
    modal.appendChild(btn)
}

function wordCount() {
    const modal = document.querySelector('#modal')
    modal.innerHTML = ""
    modal.style.display = "block"
    let inp = document.createElement("input")
    let btn = document.createElement("button")
    inp.type = "text"
    inp.name = "inp"
    inp.placeholder = "Enter text"
    btn.onclick = function () {
        let para = document.querySelector('input[name="inp"]').value
        printOnModal("There are "+para.split(' ').filter(w => w != '').length+" words in the given string", 2500)
    }
    btn.innerText = "Submit"
    modal.appendChild(inp)
    modal.innerHTML += "<br>"
    modal.appendChild(btn)
}

function whatDay() {
    let now = new Date()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday"]
    printOnModal("It is "+days[now.getDay()]+" for the timezone "+Intl.DateTimeFormat().resolvedOptions().timeZone, 2000)
}

function heightConvert() {
    const modal = document.querySelector('#modal')
    modal.innerHTML = ""
    modal.style.display = "block"
    let feet = document.createElement("input")
    feet.name = "feet"
    feet.placeholder = "Feet"
    let inches = document.createElement("input")
    inches.name = "inches"
    inches.placeholder = "Inches"
    let btn = document.createElement("button")
    btn.innerText = "In centimetres"

    btn.onclick = function () {
        let feet = document.querySelector('input[name="feet"]').value
        let inches = document.querySelector('input[name="inches"]').value
        let cms = ((feet*30.48) + (inches*2.54)).toLocaleString(undefined,{maximumFractionDigits: 3})
        printOnModal("Your height in centimetres is "+cms+" cm", 4000)
    }

    modal.appendChild(feet)
    modal.appendChild(inches)
    modal.innerHTML += "<br>"
    modal.appendChild(btn)
}

function tossCoin() {
    let prob = Math.floor(Math.random() * 2)
    if(prob == 0) {
        printOnModal("You got tails", 1500)
    } else {
        printOnModal("You got heads", 1500)
    }
}

function numberGuess() {
    const modal = document.querySelector('#modal')
    modal.innerHTML = ""
    modal.style.display = "block"
    let inp = document.createElement("input")
    let btn = document.createElement("button")
    inp.type = "number"
    inp.name = "inp"
    inp.placeholder = "Between 1-10"
    btn.onclick = function () {
        let guess = document.querySelector('input[name="inp"]').value
        let ans = Math.floor(Math.random() * 10) + 1
        if(ans == guess) {
            printOnModal("You got it ;)", 1000)
        } else {
            printOnModal("Wrong :(", 1000)
        }
    }
    btn.innerText = "Submit"
    modal.appendChild(inp)
    modal.innerHTML += "<br>"
    modal.appendChild(btn)
}

function rollDice() {
    let num = Math.floor(Math.random() * 6) + 1
    printOnModal("You rolled " + num, 1500)
}