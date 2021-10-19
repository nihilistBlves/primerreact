import { useState } from "react";
import DibujoHijo from "../DibujoHijo/DibujoHijo";

function DibujoPadre() {

    const [resultado, setResultado] = useState(0);

    const multiplicacion = (numUno, numDos) => {
        setResultado(parseInt(numUno) * parseInt(numDos));
    }

    return(
        <div style={{backgroundColor: "lightblue"}}>
            <h1>Padre</h1>
            <DibujoHijo numeroUno="5" numeroDos="2" multiplicacion={multiplicacion}/>
            <DibujoHijo numeroUno="4" numeroDos="6" multiplicacion={multiplicacion}/>
            <DibujoHijo numeroUno="1" numeroDos="11" multiplicacion={multiplicacion}/>
            <h2>Multiplicación {resultado}</h2>
        </div>
    )

}

export default DibujoPadre;