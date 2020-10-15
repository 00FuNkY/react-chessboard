import React, { Component } from 'react';
import ChessCel from './ChessCel'

class Row extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    };
    
    createRow(color, columns) {
        let row = [];
        for(let i=0; i<columns; i++) {
            row.push(color);
            color = !color
        }
        return row;
    }  

    render() {
        const { color, columns } = this.props;
        const line = this.createRow(color, columns)
                
        return (
            line.map(
                cell =>  <ChessCel color={cell} /> 
            )
        )
    }

}


export default Row;