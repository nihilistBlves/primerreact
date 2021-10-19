function Saludo(props) {
    //var nombre = props.nombre;
    //var edad = props.edad;
    const { nombre, edad , metodoPadre} = props;

    return(
        //Solo puede haber un elemento en la raiz.
        //Para poder incluir más elementos, deben ser hijos del elemento padre.
        <div className="App">
            <h1>Saludando a {nombre} con edad {edad}</h1>
            <button onClick={() => metodoPadre(nombre + " y tengo " + edad + " años, ¿qué tal Paqui?")}>Activar metodo del padre</button>
        </div>
    );
}

export default Saludo;