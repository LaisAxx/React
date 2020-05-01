import React, {Component} from 'react'

export default class Contador extends Component {
    maisUm(){
        this.props.numero++
    }
    render(){
        return (
            <div>
                <h1>Contador</h1>
               <div>Número: {this.props.numero}</div> 
               <button onClick={this.maisUm}>Inc</button>
               <button>Dec</button>
            </div>
        )
    }
}