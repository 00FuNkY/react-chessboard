import React from 'react';
import './style.css'

function ChessCel(props) {
        const { color } = props;
        return (
            <div className={color ? 'white' : 'black'}/>
        )
    }
 
export default ChessCel;