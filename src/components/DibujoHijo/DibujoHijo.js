import { useState } from "react";

function DibujoHijo(props) {

    const {numeroUno, numeroDos, multiplicacion} = props;
    const [suma, setSuma] = useState(0)

    return(
        <div style={{backgroundColor: "lightcoral"}}>
            <h2>Hijo</h2>
            <h3>{numeroUno} y {numeroDos} <span style={{color: "white"}}>Suma {suma}</span></h3>
            <button onClick={ () => {setSuma(parseInt(numeroUno)+parseInt(numeroDos))} }>Sumar</button>
            <button onClick={ () => multiplicacion(numeroUno, numeroDos)}>Multiplicar</button>
        </div>
    )

}

export default DibujoHijo;