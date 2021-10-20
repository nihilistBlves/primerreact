import React, {useState} from "react";

function Car(props) {

    var coche = {
        marca: props.Marca,
        modelo: props.Modelo,
        aceleracion: parseInt(props.Aceleracion),
        velocidadMax: parseInt(props.VelocidadMax)
    }

    const [ estado, setEstado ] = useState(false);

    const [ velocidad, setVelocidad] = useState(0);

    const comprobarEstado = () => {
        if (estado == true) {
            return (<span style={{color:"green"}}>Arrancado</span>);
        } else {
            return (<span style={{color:"red"}}>Parado</span>);
        }
    }

    const arrancarDetener = () => {
        if (estado == true) {
            setEstado(false);
            setVelocidad(0);
        } else {
            setEstado(true)
        }
    }

    const acelerar = () => {
        if (estado == true) {
            if (velocidad < coche.velocidadMax) {
                if ((velocidad+coche.aceleracion) < coche.velocidadMax) {
                    setVelocidad(velocidad + coche.aceleracion);
                } else {
                    setVelocidad(coche.velocidadMax);
                }
            }
        }
    }

    return(
        <div style={{border:"5px solid black", margin:"2em", padding:"2em"}}>
            <h1 style={{color:"lightsalmon"}}>
                Marca: {coche.marca}, Modelo: {coche.modelo}
            </h1>
            <h2>El coche está: {comprobarEstado()}</h2>
            <h2 style={{color:"blue"}}>Velocidad actual: {velocidad} km/h</h2>
            <button onClick={ () => {arrancarDetener()} }>Arrancar/Detener</button>
            <button onClick={ () => {acelerar()} }>Acelerar</button>
        </div>
    );

}

export default Car;