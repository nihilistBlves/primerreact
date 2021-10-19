function MatematicasHijo(props) {

    const { metodoPadre, numero} = props;

    const doble = (num) => {
        console.log("Mostrando el doble desde el hijo: " + (num*2));
    }

    var triple = metodoPadre;

    return(
        <div>
            <h1>Soy el número {numero}</h1>
            <button onClick={ () => doble(numero)}>Doble</button>
            <button onClick={ () => triple(numero)}>Triple</button>
        </div>
        
    );

}

export default MatematicasHijo;