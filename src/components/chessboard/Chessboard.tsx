import React from 'react'
import style from "./Chessboard.module.css"
import Tile from '../tile/Tile'

const vertical = ["1","2","3","4","5","6","7","8"]
const horizontal = ["a","b","c","d","e","f","g","h"]

interface Piece {
  image:string
  x:number
  y:number
}
const pieces: Piece[] = [] 
function Chessboard() {

  const border = []


  for(let p  = 0; p < 2; p++){
    const type = p === 0 ? "b" : "w";
    const y = p === 0 ? 7 : 0


  pieces.push({image: `/assets/Chess_rook_${type}.png`, x:0, y})
  pieces.push({image: `/assets/Chess_rook_${type}.png`, x:7, y})
  pieces.push({image: `/assets/Chess_horse_${type}.png`, x:1, y})
  pieces.push({image: `/assets/Chess_horse_${type}.png`, x:6, y})
  pieces.push({image: `/assets/Chess_bishop_${type}.png`, x:2, y})
  pieces.push({image: `/assets/Chess_bishop_${type}.png`, x:5, y})
  pieces.push({image: `/assets/Chess_queen_${type}.png`, x:4, y})
  pieces.push({image: `/assets/Chess_king_${type}.png`, x:3, y})
  }

for(let i = 0; i < 8; i++){ 
  pieces.push({image: "/assets/Chess_pawn_b.png", x:i, y:6})
}

for(let i = 0; i < 8; i++){ 
  pieces.push({image: "/assets/Chess_pawn_w.png", x:i, y:1})
}



  for (let v = vertical.length -1; v>=0; v--) {
    for (let h = 0; h < horizontal.length; h++) {
      const number = h + v + 2;
      let image = undefined;
      pieces.forEach(e => {
        if(e.x === h && e.y === v) {  
          image = e.image
        }
      })
      border.push(<Tile image={image} number={number}/>)
    }
  }
  
  return (
    <div className={style.chessBoard}>{border}</div>
  )
}

export default Chessboard