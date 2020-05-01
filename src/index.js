import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import {CompA, CompB} from './componentes/DoisComponentes' //mais de um componente no mesmo arquivo
// import MultiElementos from './componentes/MultiElementos'
// mport FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')

ReactDOM.render( 
    <div>
        <Contador numero={0} />
        {/* <ComponenteClasse valor='Sou um Componente de Classe'/> */}
        {/* <Pai /> */}
        {/* 
        <Familia sobrenome=" Pereira">
            <Membro nome='bia' ></Membro> 
            <Membro nome='Felipe' ></Membro>
        </Familia> */}
        {/* <FamiliaSilva></FamiliaSilva> */}
        {/* <MultiElementos /> */}
        {/* <CompA valor="Olá eu sou A!"></CompA>
            <CompB valor="Valor B"></CompB>
            <PrimeiroComponente valor="bom dia" ></PrimeiroComponente> */}
    </div>
, elemento)