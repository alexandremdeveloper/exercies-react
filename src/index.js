import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponent from './componentes/PrimeiroComponente'
import CompA, { CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        {/* <MultiElementos/> */}
        <CompA valor="Olá eu sou A"/>
        <B valor="Olá, me chamo B"/>
        {/* <PrimeiroComponent valor="Bom dia!" AbcD={2**8}></PrimeiroComponent> */}
    </div>
, elemento)