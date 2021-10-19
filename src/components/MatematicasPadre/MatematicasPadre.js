import MatematicasHijo from "../MatematicasHijo/MatematicasHijo";

function MatematicasPadre() {

    const triple = (numero) => {
        console.log("Mostrando el triple desde el padre: " + (numero*3));
    }

    return(
        <div>
            <MatematicasHijo metodoPadre={triple} numero="7"/>
            <MatematicasHijo metodoPadre={triple} numero="5"/>
        </div>
    );

}

export default MatematicasPadre;