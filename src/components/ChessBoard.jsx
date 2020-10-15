import React from "react";
import ChessRow from "./ChessRow";

function Board(props) {
  let firstCell = true;
  let finalBoard = CreateBoard(props.rows,firstCell);

  return (
    <div>
        {finalBoard.map(
            line => <div><ChessRow color={line} columns={props.columns}/></div>
        )}
    </div>
    );
}

function CreateBoard(rows, firstCell) {
  let board = [];
  for (let i = 0; i < rows; i++) {
    board.push(firstCell);
    firstCell = !firstCell;
  }
  console.log(rows +" " +board)
  return board;
}

export default Board;
