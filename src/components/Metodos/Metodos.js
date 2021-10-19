function Metodos() {
    var ejemplo = "Soy una variable de ejemplo";

    const mostrarMensaje = () => {
        alert("Has pulsado un botón");
        //El HTML no se actualiza
        ejemplo = "He cambiado con el click";
        console.log(ejemplo);
    }
    //METODO CON PARAMETROS
    const dobleNumero = (numero) => {
        var doble = numero * 2;
        alert(doble);
    }

    var estilo = {
        color: "white",
        backgroundColor: "black"
    }

    return(
        <div>
            <h1 style={estilo}>Ejempo de métodos React</h1>
            <h3 style={{color:"red"}}>{ejemplo}</h3>
            <button onClick={ () => mostrarMensaje() }>Pulsa aqui</button>
            <button onClick={ () => dobleNumero(7) }>Número doble de 7</button>
        </div>
    );
}

export default Metodos;