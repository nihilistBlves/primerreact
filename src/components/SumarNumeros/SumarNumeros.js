import imagen from '../../assets/images/imagen1.jpg'
import '../App/App.css'

function SumarNumeros(props) {
    const { Numero1, Numero2 } = props;
    
    const sumaRandom = () => {
        var num1 = parseInt(props.Numero1);
        var num2 = parseInt(props.Numero2);
        console.log(num1 + " + " + num2 + " = " + (num1+num2));
    }
    
    return(
        <div className="App">
            <img src={imagen} className="App-logo" style={{height:'100px'}} alt='Texto alternativo'/>
            <button onClick={ () => {sumaRandom()} }>Sumar dos numeros random</button>
        </div>
    );
}

export default SumarNumeros;