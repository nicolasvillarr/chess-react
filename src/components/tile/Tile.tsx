import React from 'react'
import style from "./Tile.module.css"

interface Props {
    image?:string;
    number:number;
}

function Tile({number, image}: Props) {
    if (number % 2 === 0 ) {
        return <div className={style.black}><img className='pieceImage' src={image} alt="s" /> </div>
    } else {
        return <div className={style.white}><img className='pieceImage' src={image} alt="s" /> </div>
    }

}

export default Tile