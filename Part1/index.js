let board = []
let winner = false

function resetGame() {
  const player = document.getElementById('player')
  board = []
  winner = false
  player.innerText = 'X'
  for (let i = 0; i < 9; i++) {
    document.getElementById(i).innerText = null
  }
}

function play(val) {
  const player = document.getElementById('player')
  const element = document.getElementById(val)
  let boardFull = true
  if (winner) return

  if (player.innerText === 'O' && !board[val]) {
    player.innerText = 'X'
    element.innerText = 'O'
    board[val] = 'O'
    console.log(board)
  } else if (player.innerText === 'X' && !board[val]) {
    player.innerText = 'O'
    element.innerText = 'X'
    board[val] = 'X'
    console.log(board)
  }
  // Check if there's a winner
  board.map((space, i) => {
    if (board[i] === board[i + 3] && board[i] === board[i + 6]) {
      winner = true
      return alert(`${board[i]} wins!`)
    }
    if (board[i] % 3 === 0 && board[i] === board[i+1] && board[i] === board[i+2]) {
      winner = true
      return alert(`${board[i]} wins!`)
    }
  })
  // if (
  //   board[0] !== undefined &&
  //   board[0] === board[1] &&
  //   board[0] === board[2]
  // ) {
  //   winner = true
  //   alert(`${board[0]} wins!`)
  // }
  // if (
  //   board[3] !== undefined &&
  //   board[3] === board[4] &&
  //   board[3] === board[5]
  // ) {
  //   winner = true
  //   alert(`${board[3]} wins!`)
  // }
  // if (
  //   board[6] !== undefined &&
  //   board[6] === board[7] &&
  //   board[6] === board[8]
  // ) {
  //   winner = true
  //   alert(`${board[6]} wins!`)
  // }
  if (
    board[2] !== undefined &&
    board[2] === board[4] &&
    board[2] === board[6]
  ) {
    winner = true
    alert(`${board[2]} wins!`)
  }
  if (
    board[0] !== undefined &&
    board[0] === board[4] &&
    board[0] === board[8]
  ) {
    winner = true
    alert(`${board[0]} wins!`)
  }
  // check if board is full
  board.map(space => {
    if (space === undefined || board.length !== 9) boardFull = false
  })
  if (boardFull) alert('CAT wins the game!')
}
