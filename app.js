//----------------------------------------------------------constant
const button = document.querySelector('#start')
const messageEl = document.querySelector('#message')
const sec = document.querySelector('section')
const cNumbers = document.querySelector('.numbers')
const mCount = document.querySelector('#mCounter')

const a = [
  [
    '',
    2,
    7,
    '',
    '',
    '',
    9,
    1,
    3,
    9,
    '',
    '',
    3,
    4,
    '',
    6,
    '',
    7,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    4,
    '',
    3,
    2,
    '',
    8,
    '',
    4,
    '',
    '',
    5,
    '',
    8,
    7,
    3,
    4,
    '',
    '',
    '',
    7,
    '',
    4,
    2,
    '',
    '',
    5,
    '',
    8,
    '',
    '',
    1,
    9,
    2,
    6,
    3,
    4,
    '',
    2,
    5,
    '',
    '',
    '',
    '',
    '',
    9,
    '',
    '',
    '',
    9,
    '',
    5,
    1,
    '',
    2,
    ''
  ],
  [
    5,
    '',
    '',
    '',
    '',
    8,
    '',
    '',
    3,
    8,
    3,
    '',
    9,
    4,
    6,
    '',
    '',
    7,
    '',
    7,
    2,
    1,
    3,
    '',
    9,
    '',
    '',
    1,
    '',
    7,
    6,
    9,
    '',
    '',
    3,
    2,
    '',
    '',
    '',
    8,
    '',
    2,
    '',
    '',
    '',
    '',
    8,
    '',
    3,
    5,
    '',
    '',
    9,
    6,
    4,
    '',
    5,
    '',
    '',
    9,
    '',
    7,
    8,
    '',
    '',
    '',
    '',
    '',
    1,
    '',
    2,
    '',
    '',
    2,
    '',
    4,
    7,
    '',
    5,
    '',
    ''
  ],
  [
    4,
    9,
    6,
    1,
    '',
    7,
    8,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    6,
    '',
    '',
    '',
    7,
    '',
    3,
    2,
    8,
    4,
    1,
    9,
    6,
    5,
    3,
    1,
    6,
    '',
    '',
    '',
    8,
    '',
    '',
    '',
    '',
    8,
    3,
    1,
    '',
    '',
    7,
    8,
    '',
    '',
    5,
    '',
    9,
    '',
    '',
    '',
    '',
    6,
    '',
    4,
    '',
    5,
    '',
    '',
    8,
    1,
    '',
    5,
    '',
    '',
    3,
    '',
    2,
    9,
    '',
    7,
    '',
    '',
    '',
    '',
    5,
    '',
    ''
  ],
  [
    5,
    '',
    1,
    7,
    '',
    2,
    '',
    8,
    4,
    '',
    4,
    9,
    3,
    '',
    1,
    '',
    5,
    7,
    8,
    2,
    '',
    4,
    '',
    '',
    6,
    '',
    '',
    4,
    '',
    6,
    '',
    1,
    7,
    8,
    '',
    '',
    2,
    1,
    '',
    '',
    '',
    6,
    '',
    '',
    '',
    '',
    5,
    '',
    '',
    '',
    '',
    '',
    9,
    6,
    '',
    6,
    '',
    1,
    4,
    '',
    '',
    '',
    '',
    1,
    '',
    '',
    6,
    '',
    '',
    4,
    2,
    '',
    '',
    7,
    4,
    2,
    9,
    '',
    5,
    '',
    ''
  ]
]

const righta = [
  [
    4, 2, 7, 5, 6, 8, 9, 1, 3, 9, 1, 5, 3, 4, 2, 6, 8, 7, 6, 8, 3, 1, 9, 7, 2,
    5, 4, 1, 3, 2, 6, 8, 5, 4, 7, 9, 5, 9, 8, 7, 3, 4, 1, 6, 2, 7, 6, 4, 2, 1,
    9, 5, 3, 8, 8, 7, 1, 9, 2, 6, 3, 4, 5, 2, 5, 6, 4, 7, 3, 8, 9, 1, 3, 4, 9,
    8, 5, 1, 7, 2, 6
  ],
  [
    5, 4, 9, 7, 2, 8, 6, 1, 3, 8, 3, 1, 9, 4, 6, 2, 5, 7, 6, 7, 2, 1, 3, 5, 9,
    8, 4, 1, 5, 7, 6, 9, 4, 8, 3, 2, 3, 9, 6, 8, 1, 2, 7, 4, 5, 2, 8, 4, 3, 5,
    7, 1, 9, 6, 4, 1, 5, 2, 6, 9, 3, 7, 8, 7, 6, 3, 5, 8, 1, 4, 2, 9, 9, 2, 8,
    4, 7, 3, 5, 6, 1
  ],
  [
    4, 9, 6, 1, 5, 7, 8, 3, 2, 2, 1, 8, 3, 9, 6, 7, 4, 5, 7, 5, 3, 2, 8, 4, 1,
    9, 6, 5, 3, 1, 6, 7, 2, 9, 8, 4, 6, 4, 9, 8, 3, 1, 2, 5, 7, 8, 2, 7, 5, 4,
    9, 6, 1, 3, 9, 6, 2, 4, 1, 5, 3, 7, 8, 1, 8, 5, 7, 6, 3, 4, 2, 9, 3, 7, 4,
    9, 2, 8, 5, 6, 1
  ],
  [
    5, 3, 1, 7, 6, 2, 9, 8, 4, 6, 4, 9, 3, 8, 1, 2, 5, 7, 8, 2, 7, 4, 5, 9, 6,
    1, 3, 4, 9, 6, 5, 1, 7, 8, 3, 2, 2, 1, 8, 9, 3, 6, 7, 4, 5, 7, 5, 3, 8, 2,
    4, 1, 9, 6, 9, 6, 2, 1, 4, 5, 3, 7, 8, 1, 8, 5, 6, 7, 3, 4, 2, 9, 3, 7, 4,
    2, 9, 8, 5, 6, 1
  ]
]
//------------------------------------------------------------variables
let emtt = false
let lasSqr = 0
let sNum
let m = 0
let loser
let sq
let createNumbers
let creatB

let a1 = 0
let a2 = 0
let a3 = 0
let a4 = 0
let a5 = 0
let a6 = 0
let a7 = 0
let a8 = 0
let a9 = 0

//------------------------------------------------------------functions

const startBoard = () => {
  for (let i = 0; i < 81; i++) {
    sq = document.createElement('div')
    sec.appendChild(sq)
    sq.className = 'board'
    sq.id = i
    rightBorder(sq)
  }

  button.style.display = 'none'
  mCount.style.display = ''
  messageEl.innerText = 'Are you smart enough to solve it?'
  sq = document.querySelectorAll('.board')
  sq.forEach((s) => {
    s.addEventListener('click', handleClick)
  })
  fillBoard()
  createNum()

  mCount.innerText = `You made ${m}`
}

const createNum = () => {
  let x = 1
  for (let i = 100; i < 901; i = i + 100) {
    cN = document.createElement('div')
    cNumbers.appendChild(cN)
    cN.className = 'num'
    cN.id = i
    cN.innerText = x

    x++
  }
  let cNum = document.querySelectorAll('.num')
}

const clickNum = (event) => {
  a1 = 0
  a2 = 0
  a3 = 0
  a4 = 0
  a5 = 0
  a6 = 0
  a7 = 0
  a8 = 0
  a9 = 0
  sq.forEach((sqr) => {
    if (sqr.innerText === '1') {
      a1++
    } else if (sqr.innerText === '2') {
      a2++
    } else if (sqr.innerText === '3') {
      a3++
    } else if (sqr.innerText === '4') {
      a4++
    } else if (sqr.innerText === '5') {
      a5++
    } else if (sqr.innerText === '6') {
      a6++
    } else if (sqr.innerText === '7') {
      a7++
    } else if (sqr.innerText === '8') {
      a8++
    } else if (sqr.innerText === '9') {
      a9++
    }
  })
}

const catchNum = (eve) => {
  clickNum()
  let cNum = document.querySelectorAll('.num')
  if (a1 === 9) {
    cNum[0].style.display = 'none'
  }
  if (a2 === 9) {
    cNum[1].style.display = 'none'
  }
  if (a3 === 9) {
    cNum[2].style.display = 'none'
  }
  if (a4 === 9) {
    cNum[3].style.display = 'none'
  }
  if (a5 === 9) {
    cNum[4].style.display = 'none'
  }
  if (a6 === 9) {
    cNum[5].style.display = 'none'
  }
  if (a7 === 9) {
    cNum[6].style.display = 'none'
  }
  if (a8 === 9) {
    cNum[7].style.display = 'none'
  }
  if (a9 === 9) {
    cNum[8].style.display = 'none'
  }
}

const rightBorder = (rNum) => {
  for (let i = 2; i < 81; i = i + 9) {
    if (Number(rNum.id) === i) {
      rNum.style.borderRight = '5Px solid rgb(0,0,1) '
    }
  }
  for (let i = 5; i < 81; i = i + 9) {
    if (Number(rNum.id) === i) {
      rNum.style.borderRight = '5Px solid rgb(0,0,1) '
    }
  }
  for (let i = 27; i < 36; i++) {
    if (Number(rNum.id) === i) {
      rNum.style.borderTop = '5Px solid rgb(0,0,1) '
    }
  }
  for (let i = 54; i < 63; i++) {
    if (Number(rNum.id) === i) {
      rNum.style.borderTop = '5Px solid rgb(0,0,1) '
    }
  }
}

const fillBoard = () => {
  sq = document.querySelectorAll('.board')
  sNum = Math.floor(Math.random() * a.length)
  sq.forEach((s, i) => {
    s.textContent = a[sNum][i]
  })
}

const handleClick = (event) => {
  isEmpty(event)
  if (emtt === true) {
  }
  shadowBoard()
  mBoard(event)
}

const isEmpty = (eve) => {
  if (eve.target.innerText != '') {
    emtt = false
    lasSqr = eve.target.id
    selectedSqr(eve)
  }
  if (eve.target.style.color === 'rgb(255, 1, 1)') {
    emtt = true
    selectedSqr(eve)
  } else {
    emtt = true
    lasSqr = eve.target.id
    selectedSqr(eve)
  }
}

const selectedSqr = (eve) => {
  sq.forEach((sqr) => {
    sqr.style.border = '1px solid rgb(0, 0, 0)'
    rightBorder(sqr)
  })
  if (eve.target.id === lasSqr) {
    eve.target.style.border = '2px solid red'
    shadowBoard(eve.target)
  }
}

const shadowBoard = (eve) => {
  let sN = sq[lasSqr].innerText
  sq.forEach((sqr) => {
    if (sqr.innerText == sN && sN != '') {
      sqr.style.backgroundColor = 'rgb(53, 52, 67)'
    } else {
      sqr.style.backgroundColor = 'rgb(191, 190, 224)'
    }
  })
}

const pressKey = (event) => {
  if (
    event.key === '1' ||
    event.key === '2' ||
    event.key === '3' ||
    event.key === '4' ||
    event.key === '5' ||
    event.key === '6' ||
    event.key === '7' ||
    event.key === '8' ||
    event.key === '9'
  ) {
    if (emtt === true) {
      isRight(event)
      updateBoard(event.key)
      catchNum(event)
    }
  }
  shadowBoard(event)
}

const updateBoard = (num) => {
  sq = document.querySelectorAll('.board')
  sq[lasSqr].innerText = num
  if (sq[lasSqr].style.color === 'rgb(255, 1, 1)') {
    messageEl.innerText = `${sq[lasSqr].innerText} is not the right answer. You made ${m} mistakes`
    sq[lasSqr].innerText = num
  }
  if (loser === true) {
    messageEl.innerText = 'I knew you were a loser:)'
  }
  youWon()
}

const isRight = (event) => {
  sq = document.querySelectorAll('.board')
  if (Number(event.key) === Number(righta[sNum][lasSqr])) {
    if (m > 0) {
      sq[lasSqr].style.color = 'green'
      messageEl.innerText = `Nice!, but remember you made ${m} mistakes so far`
    } else {
      sq[lasSqr].style.color = 'green'
      messageEl.innerText = `Nice!`
    }
  } else {
    sq[lasSqr].style.color = 'rgb(255, 1, 1)'
    m++
  }
  loserLol()
  youWon()
}
const youWon = () => {
  sq = document.querySelectorAll('.board')
  let count = 0
  sq.forEach((s, i) => {
    if (Number(s.innerText) === righta[sNum][i]) {
      count++
    }
  })

  if (count === 81) {
    messageEl.innerText = `Good job, You did it!!`

    creatB = document.createElement('button')
    creatB.innerText = 'Play again!'
    creatB.className = 'reset'
    sec.appendChild(creatB)
    creatB.addEventListener('click', showBoardAgain)
  }
}

const loserLol = () => {
  if (m === 5) {
    sq.forEach((s) => {
      s.style.backgroundColor = 'rgb(191, 190, 224);'
      s.style.display = 'none'
    })
    let disNum = document.querySelectorAll('.num')
    disNum.forEach((dn) => {
      dn.style.display = 'none'
    })
    loser = true
    messageEl.innerText = 'I knew you were a loser:)'
    creatB = document.createElement('button')
    creatB.innerText = 'Play again!'
    creatB.className = 'reset'
    sec.appendChild(creatB)
    creatB.addEventListener('click', showBoardAgain)
  }
}

const showBoardAgain = () => {
  sq = document.querySelectorAll('.board')
  sNum = Math.floor(Math.random() * a.length)
  if (loser === true) {
    messageEl.innerText = 'lol loser wanna try again'
    loser = false
  } else {
    messageEl.innerText = 'Great wanna play again!!!'
  }
  m = 0
  let a1 = 0
  let a2 = 0
  let a3 = 0
  let a4 = 0
  let a5 = 0
  let a6 = 0
  let a7 = 0
  let a8 = 0
  let a9 = 0
  sq.forEach((s, i) => {
    s.style.display = ''
    s.style.backgroundColor = 'rgb(191, 190, 224)'
    s.style.color = 'black'
    fillBoard()
  })
  createNum()
  clickNum()
  creatB.style.display = 'none'
}

//------------------------------------------------------------events
button.addEventListener('click', startBoard)

window.addEventListener('keydown', pressKey)

const mBoard = (eve) => {
  if (eve.target.id == 0) {
    for (let i = 0; i < 9; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 0; i < 80; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[10].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[11].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[19].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[20].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 1) {
    for (let i = 1; i < 9; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 1; i < 80; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[0].style.backgroundColor = 'rgb(161, 158, 226)'

    sq[9].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[11].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[18].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[20].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 2) {
    for (let i = 2; i < 9; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 2; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[0].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[9].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[10].style.backgroundColor = 'rgb(161, 158, 226)'

    sq[1].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[11].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[18].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[19].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 3) {
    for (let i = 3; i < 9; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 3; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 3; i >= 0; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[13].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[14].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[22].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[23].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 4) {
    for (let i = 4; i < 9; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 4; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 4; i >= 0; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[12].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[21].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[14].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[22].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[23].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 5) {
    for (let i = 5; i < 9; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 5; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 5; i >= 0; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[12].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[21].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[14].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[22].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[13].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 6) {
    for (let i = 6; i < 9; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 6; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 6; i >= 0; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[16].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[17].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[25].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[26].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 7) {
    for (let i = 7; i < 9; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 7; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 7; i >= 0; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[15].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[17].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[24].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[26].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 8) {
    for (let i = 8; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 8; i >= 0; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[15].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[16].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[24].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[25].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 9) {
    for (let i = 9; i < 18; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 9; i < 80; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[0].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[1].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[19].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[20].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[2].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 10) {
    for (let i = 10; i < 18; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 10; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[0].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[9].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[18].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[20].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[2].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[1].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 11) {
    for (let i = 11; i < 18; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 11; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[0].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[9].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[18].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[19].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[2].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[1].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[10].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 12) {
    for (let i = 12; i < 18; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 12; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 12; i > 8; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[3].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[4].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[5].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[22].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[23].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 13) {
    for (let i = 13; i < 18; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 13; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[3].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[4].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[5].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[12].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[23].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[21].style.backgroundColor = 'rgb(161, 158, 226)'
    for (let i = 13; i > 8; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
  }
  if (eve.target.id == 14) {
    for (let i = 14; i < 18; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 14; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 14; i > 8; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[3].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[4].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[5].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[12].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[22].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[21].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 15) {
    for (let i = 15; i < 18; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 15; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 15; i > 8; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[6].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[7].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[8].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[25].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[26].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 16) {
    for (let i = 16; i < 18; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 16; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 16; i > 8; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[6].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[7].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[8].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[24].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[26].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 17) {
    for (let i = 17; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 17; i > 8; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[6].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[7].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[8].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[24].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[25].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 18) {
    for (let i = 18; i < 27; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 18; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 18; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[2].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[1].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[11].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[10].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 19) {
    for (let i = 19; i < 27; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 19; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 19; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[2].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[0].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[11].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[9].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[18].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 20) {
    for (let i = 20; i < 27; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 20; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 20; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[1].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[0].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[10].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[9].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[18].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[19].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 21) {
    for (let i = 21; i < 27; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 21; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 21; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 21; i > 17; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[4].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[5].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[13].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[14].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 22) {
    for (let i = 22; i < 27; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 22; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 22; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 22; i > 17; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[3].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[5].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[12].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[14].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 23) {
    for (let i = 23; i < 27; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 23; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 23; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 23; i > 17; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[3].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[4].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[12].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[13].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 24) {
    for (let i = 24; i < 27; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 24; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 24; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 24; i > 17; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[8].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[7].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[16].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[17].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 25) {
    for (let i = 25; i < 27; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 25; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 25; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 25; i > 17; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[8].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[6].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[15].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[17].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 26) {
    for (let i = 26; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 26; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 26; i > 17; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[7].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[6].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[15].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[16].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 27) {
    for (let i = 27; i < 36; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 27; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 27; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 27; i > 27; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[37].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[38].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[46].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[47].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 28) {
    for (let i = 28; i < 36; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 28; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 28; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 28; i > 26; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[36].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[38].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[45].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[47].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 29) {
    for (let i = 29; i < 36; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 29; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 29; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 29; i > 26; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[36].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[37].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[45].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[46].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 30) {
    for (let i = 30; i < 36; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 30; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 30; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 30; i > 26; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[40].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[41].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[49].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[50].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 31) {
    for (let i = 31; i < 36; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 31; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 31; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 31; i > 26; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[39].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[41].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[48].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[50].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 32) {
    for (let i = 32; i < 36; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 32; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 32; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 32; i > 26; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[39].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[40].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[48].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[49].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 33) {
    for (let i = 33; i < 36; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 33; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 33; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 33; i > 26; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[43].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[44].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[52].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[53].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 34) {
    for (let i = 34; i < 36; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 34; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 34; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 34; i > 26; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[42].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[44].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[51].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[53].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 35) {
    for (let i = 35; i < 36; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 35; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 35; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 35; i > 26; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[42].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[43].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[51].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[52].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 36) {
    for (let i = 36; i < 45; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 36; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 36; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 36; i > 35; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[28].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[29].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[46].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[47].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 37) {
    for (let i = 37; i < 45; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 37; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 37; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 37; i > 35; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[27].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[29].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[45].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[47].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 38) {
    for (let i = 38; i < 45; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 38; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 38; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 38; i > 35; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[27].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[28].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[45].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[46].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 39) {
    for (let i = 39; i < 45; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 39; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 39; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 39; i > 35; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[31].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[32].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[49].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[50].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 40) {
    for (let i = 40; i < 45; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 40; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 40; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 40; i > 35; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[30].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[32].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[48].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[50].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 41) {
    for (let i = 41; i < 45; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 41; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 41; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 41; i > 35; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[30].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[31].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[48].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[49].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 42) {
    for (let i = 42; i < 45; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 42; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 42; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 42; i > 35; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[34].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[35].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[52].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[53].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 43) {
    for (let i = 43; i < 45; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 43; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 43; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 43; i > 35; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[33].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[35].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[51].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[53].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 44) {
    for (let i = 44; i < 45; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 44; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 44; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 44; i > 35; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[33].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[34].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[51].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[52].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 45) {
    for (let i = 45; i < 54; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 45; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 45; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 45; i > 44; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }

    sq[28].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[29].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[38].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[37].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 46) {
    for (let i = 46; i < 54; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 46; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 46; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 46; i > 44; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[27].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[29].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[38].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[36].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 47) {
    for (let i = 47; i < 54; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 47; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 47; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 47; i > 44; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[27].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[28].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[37].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[36].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 48) {
    for (let i = 48; i < 54; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 48; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 48; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 48; i > 44; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[31].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[32].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[40].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[41].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 49) {
    for (let i = 49; i < 54; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 49; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 49; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 49; i > 44; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[30].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[32].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[39].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[41].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 50) {
    for (let i = 50; i < 54; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 50; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 50; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 50; i > 44; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[30].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[31].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[39].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[40].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 51) {
    for (let i = 51; i < 54; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 51; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 51; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 51; i > 44; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[34].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[35].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[43].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[44].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 52) {
    for (let i = 52; i < 54; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 52; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 52; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 52; i > 44; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[33].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[35].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[42].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[44].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 53) {
    for (let i = 53; i < 54; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 53; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 53; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 53; i > 44; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[33].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[34].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[42].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[43].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 54) {
    for (let i = 54; i < 63; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 54; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 54; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 54; i > 53; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[64].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[65].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[73].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[74].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 55) {
    for (let i = 55; i < 63; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 55; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 55; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 55; i > 53; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[63].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[65].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[72].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[74].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 56) {
    for (let i = 56; i < 63; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 56; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 56; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 56; i > 53; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[63].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[64].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[72].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[73].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 57) {
    for (let i = 57; i < 63; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 57; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 57; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 57; i > 53; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[67].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[68].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[76].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[77].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 58) {
    for (let i = 58; i < 63; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 58; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 58; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 58; i > 53; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[66].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[68].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[75].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[77].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 59) {
    for (let i = 59; i < 63; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 59; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 59; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 59; i > 53; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[66].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[67].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[75].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[76].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 60) {
    for (let i = 60; i < 63; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 60; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 60; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 60; i > 53; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[70].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[71].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[79].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[80].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 61) {
    for (let i = 61; i < 63; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 61; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 61; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 61; i > 53; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[69].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[71].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[78].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[80].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 62) {
    for (let i = 62; i < 63; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 62; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 62; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 62; i > 53; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[69].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[70].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[78].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[79].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 63) {
    for (let i = 63; i < 72; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 63; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 63; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 63; i > 62; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[56].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[55].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[73].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[74].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 64) {
    for (let i = 64; i < 72; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 64; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 64; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 64; i > 62; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[56].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[54].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[72].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[74].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 65) {
    for (let i = 65; i < 72; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 65; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 65; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 65; i > 62; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[55].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[54].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[72].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[73].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 66) {
    for (let i = 66; i < 72; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 66; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 66; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 66; i > 62; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[58].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[59].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[76].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[77].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 67) {
    for (let i = 67; i < 72; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 67; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 67; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 67; i > 62; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[57].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[59].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[75].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[77].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 68) {
    for (let i = 68; i < 72; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 68; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 68; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 68; i > 62; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[57].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[58].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[75].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[76].style.backgroundColor = 'rgb(161, 158, 226)'
  }
  if (eve.target.id == 69) {
    for (let i = 69; i < 72; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 69; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 69; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 69; i > 62; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[61].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[62].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[79].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[80].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 70) {
    for (let i = 70; i < 72; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 70; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 70; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 70; i > 62; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[60].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[62].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[78].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[80].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 71) {
    for (let i = 71; i < 72; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 71; i < 81; i = i + 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 71; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 71; i > 62; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[60].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[61].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[78].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[79].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 72) {
    for (let i = 72; i < 81; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 72; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 72; i > 71; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[55].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[56].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[64].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[65].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 73) {
    for (let i = 73; i < 81; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 73; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 73; i > 71; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[54].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[56].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[63].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[65].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 74) {
    for (let i = 74; i < 81; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 74; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 74; i > 71; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[54].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[55].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[63].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[64].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 75) {
    for (let i = 75; i < 81; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 75; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 75; i > 71; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[58].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[59].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[67].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[68].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 76) {
    for (let i = 76; i < 81; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 76; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 76; i > 71; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[57].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[59].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[66].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[68].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 77) {
    for (let i = 77; i < 81; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 77; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 77; i > 71; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[57].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[58].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[66].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[67].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 78) {
    for (let i = 78; i < 81; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 78; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 78; i > 71; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[61].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[62].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[70].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[71].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 79) {
    for (let i = 79; i < 81; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 79; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 79; i > 71; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[60].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[62].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[69].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[71].style.backgroundColor = 'rgb(161, 158, 226)'
  }

  if (eve.target.id == 80) {
    for (let i = 80; i < 81; i++) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 80; i >= 0; i = i - 9) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    for (let i = 80; i > 71; i--) {
      sq[i].style.backgroundColor = 'rgb(161, 158, 226)'
    }
    sq[60].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[61].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[69].style.backgroundColor = 'rgb(161, 158, 226)'
    sq[70].style.backgroundColor = 'rgb(161, 158, 226)'
  }
}
