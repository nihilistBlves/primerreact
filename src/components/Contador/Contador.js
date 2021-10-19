//Para poder utilizar estados tenemos que importarlo de React
import React, { useState } from "react";

function Contador(props) {

    const [contador, setContador] = useState(parseInt(props.Inicio));

    const sumarContador = () => {
        setContador(contador + 1);
    }

    return(
        <React.Fragment>
            <h1>Ejemplo State en React</h1>
            <h2 style={{color: "blue"}}>Contador: {contador}</h2>
            <button onClick={ () => {setContador(contador-1)} } style={{margin:"2em"}}>
                -1
            </button>
            <button onClick={ () => sumarContador() } style={{margin:"2em"}}>
                +1
            </button>
        </React.Fragment>
    );

}

export default Contador;