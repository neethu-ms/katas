let generateBoard = function(whiteQueen, blackQueen) {
  let chessBoard = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      if ((whiteQueen[0] === i && whiteQueen[1] === j) || (blackQueen[0] === i && blackQueen[1] === j))
        row.push(1);
      else
        row.push(0);
    }
    
    chessBoard.push(row);
  
   
  }

  return chessBoard;
};

let queenThreat = function(generatedBoard) {
  //check if in same row or same column
  let queenArray = [];

  // found the row and column of queens
  for (let i = 0; i < 8; i++) {
  
    for (let iterator of generatedBoard[i].entries()) {
   
      if (iterator[1] === 1) {
        let queen =  {row: i, column: iterator[0] };
        queenArray.push(queen);
      }
    }
  }

  //check if in same row or column
  if ((queenArray[0].row === queenArray[1].row) || (queenArray[0].column === queenArray[1].column)) {
    return false;
  }

  //check if they are diagonal
  if (Math.abs(queenArray[0].row - queenArray[1].row) === (Math.abs(queenArray[0].column - queenArray[1].column))) {
    return true;
  }

  return false;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
console.log("-------------------------------------------------------");
whiteQueen = [0, 0];
blackQueen = [5, 7];
generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));