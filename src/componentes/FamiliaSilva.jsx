import React from 'react'
import Membro from './Membro'

export default props => 
    <div>
        <Membro nome = 'Rafael ' sobrenome={props.sobrenome} />
        <Membro nome = 'Gabriela ' sobrenome={props.sobrenome} />
        <Membro nome = 'Laura ' sobrenome={props.sobrenome} />
        <Membro nome = 'Maria ' sobrenome={props.sobrenome} />
    </div>