import React from 'react' //Sempre precisa importar o React from react


// export 
const CompA = props => // CompA recebe props e returna seguinte valores
<h1>Primeiro diz: {props.valor}</h1>

// const
const CompB = props => // CompA recebe props e returna seguinte valores
<h1>Segundo diz: {props.valor}</h1>


// export default function() {
    //     return <p>Teste</p>
    // }
    
export { CompA, CompB}    
export default CompA