// class Fruits {
//   constructor(bananna, orange, mango) {
//     this.bananna = bananna
//     this.orange = orange
//     this.mango = mango
//   }
//   getFruit() {
//     return `Hello this fruit is ${this.bananna} `
//   }
// }



const totalScore = { playerScore: 0 }


// const button1 = document.getElementById('button1')
// button1.addEventListener('click', () => {

//   console.log(`Banannas`)

//   // console.log(`You clicked me so i shall reveal myself, ${person1.getName()}, ${person1.getJob()}`)

// })

// const button2 = document.getElementById('button2')
// button2.addEventListener('click', () => {
//   console.log(`Orange`)

//   console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

// })

// const button3 = document.getElementById('button3')
// button3.addEventListener('click', () => {
//   console.log(`Mango`)

//   // console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

// })

// const button4 = document.getElementById('button4')
// button4.addEventListener('click', () => {
//   console.log(`Banannas`)

//   // console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

// })

// const button5 = document.getElementById('button5')
// button5.addEventListener('click', () => {
//   console.log(`Orange`)

//   // console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

// })

// const button6 = document.getElementById('button6')
// button6.addEventListener('click', () => {
//   console.log(`Mango`)

// console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

// })

// const endGameButton = document.getElementById('endGameButton')
// endGameButton.onclick = () => {
//   console.log('Game Ended')

// }


// function getComputerChoice() {
//   const rpsChoice = ['button1', 'button2', 'button3', 'button4', 'button5', 'button6']
//   const randomNumber = Math.floor(Math.random() * 6)
//   return rpsChoice[randomNumber]

// }

function getResult(playerChoice, Tie) {

  if (playerChoice == Tie) {
    score = 0
    // All situations where human wins, set `score` to 1
  } else if (playerChoice === "button1") {
    score = 1
  } else if (playerChoice === 'button3') {
    score = 1
  } else if (playerChoice === 'button5') {
    score = 1
  } else {
    score = -1
  }
  return score
}
// All situations where human draws, set `score` to 

// make sure to use else ifs here
// Otherwise human loses (aka set score to -1)
// return score

function showResult(score, playerChoice) {


  const resultDiv = document.getElementById('result')
  const playerScoreDiv = document.getElementById('player-score')
  // const handsDiv = document.getElementById('hands')
  if (score == -1) {
    resultDiv.innerText = 'You Loseing It Buddy!'
  } else if (score == 0) {
    resultDiv.innerText = 'Its a Tie Buddy👱!'
  } else {
    resultDiv.innerText = 'Your Winning Buddy👱!'
  }
  // handsDiv.innerText = ` ${playerChoice}`
  playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`
}



function onClickRPS(playerChoice) {
  console.log({ playerChoice })
  const score = getResult(playerChoice)
  console.log({ score })
  totalScore['playerScore'] += score
  console.log({ score })
  console.log(totalScore)
  showResult(score, playerChoice)
}


function playGame() {

  const rpsButton = document.querySelectorAll('.rpsButton')
  rpsButton[0].onClick = () => console.log(rpsButton[0].value)


  rpsButton.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })


  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame(totalScore)

}

function endGame(totalScore) {
  totalScore['playerScore'] = 0
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')


  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()

})

const button4 = document.getElementById('button4')
button4.addEventListener('click', () => {
  console.log(`Banannas!`)

  // console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

})

const button5 = document.getElementById('button5')
button5.addEventListener('click', () => {
  console.log(`Orange!`)

  // console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

})

const button6 = document.getElementById('button6')
button6.addEventListener('click', () => {
  console.log(`Mango!`)

  // console.log(`You clicked me so i shall reveal myself, ${person1.getName(), person1.getJob()}`)

})

const endGameButton = document.getElementById('endGameButton')
endGameButton.onclick = () => {
  console.log('Game Ended!')

}
}
