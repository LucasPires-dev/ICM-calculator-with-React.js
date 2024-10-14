import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [resultadoValido, setResultadoValido] = useState(false)
  const [altura, setAltura] = useState([]);
  const [peso, setPeso] = useState([]);
  const [IMC, setIMC] = useState('')

  const isMagro = {
    'titulo': 'Magreza',
    'is': false
  };
  const isSaudavel = {
    'titulo': 'Normal',
    'is': false
  };
  const isSobrePeso = {
    'titulo': 'Sobrepeso',
    'is': false
  };
  const isObeso = {
    'titulo': 'Obsidade',
    'is': false
  };
  const isGravementeObeso = {
    'titulo': 'Obsidade Grave',
    'is': false
  };

  const alterarAltura = (evento) => {
    const valor = evento.target.value;

    if(parseInt(valor)){
      setAltura(parseFloat(valor))

    }else {
      setAltura('')
  }
}

  const alterarPeso = (evento) => {
    const valor = evento.target.value;

    if(parseInt(valor)){
      setPeso(parseFloat(valor))
    }else {
      setPeso('')
  }
  }

  const getAltura = () => {
    return altura
  }

  const getPeso = () =>{
    return peso
  }

  const calcularIMC = (evento) => {
    evento.preventDefault()
    setIMC((peso / (altura * altura)))
    setResultadoValido(true)
  }

  const getIMC = ( ) => {
    
    return <div className='imc-value'>{parseFloat(IMC).toFixed(2)}</div>

    
  }

  const showTabela = () => {
  
      if (IMC < 18.5){
          isMagro.is = true;
      }else if(IMC > 18.5 && IMC < 24.99) {
        isSaudavel.is = true;
      }else if( IMC > 25 && IMC < 29.99){
        isSobrePeso.is = true;
      }
       
      else if( IMC > 30 && IMC < 39.99){
        isObeso.is = true;
      }
  
      else if( IMC > 40.00){
        isGravementeObeso.is = true;
    }

    const listaClasificacaoIMC = [isMagro, isSaudavel, isSobrePeso, isObeso, isGravementeObeso]

    const resultado = listaClasificacaoIMC.map(item => {
      if(item.is){
        return <li className='active'>{item.titulo}</li>
      }else{
        return <li>{item.titulo}</li>
      }
    })
    console.log(resultado)
    return resultado
  
  }
  return (
    <div className="container">
        <h1>Cálculo de IMC</h1>
        <form id="imcForm" onSubmit={calcularIMC}>
            <div className="form-group">
                <label >Altura (m):</label>
                <input type="number" step="0.01" id="altura" required onChange={alterarAltura} value={getAltura()} placeholder='Digíte uma altura'/>
            </div>
            <div className="form-group">
                <label >Peso (kg):</label>
                <input type="number" step="0.1" id="peso" required onChange={alterarPeso} value={getPeso()} placeholder='Digíte um peso'/>
            </div>
            <button type="submit">Calcular IMC</button>
        </form>
        <div id="resultado" className="resultado">{resultadoValido? getIMC(): ''}<ul className='classificacao'>{resultadoValido? showTabela(): ''}</ul></div>
    </div>
  )
}

export default App
