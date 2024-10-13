import { useEffect, useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [resultadoValido, setResultadoValido] = useState(false)
  const [altura, setAltura] = useState([]);
  const [peso, setPeso] = useState([]);
  const [IMC, setIMC] = useState('')

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
    
    return parseFloat(IMC).toFixed(2)

    
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
        <div id="resultado" className="resultado">{resultadoValido? getIMC(): ''}</div>
    </div>
  )
}

export default App
