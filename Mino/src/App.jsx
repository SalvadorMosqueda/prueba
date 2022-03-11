import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [palabra, setPalabra] = useState("")
  const [palindroma, setPalindroma] = useState("")

  // 3. imprimir piramide 
  function piramide() {
  
  let num = prompt("Introduce un Numero");
      let i, repeticiones;
      //crear el siclo para los escalones
      for (i = 0; i < num; i++) {
          //crear el bucle interior para la piramide
       for(repeticiones=0; repeticiones<i; repeticiones++){
           //imprimir piramide
  
           document.write("*")
  
       }
       //imprimir salto de linea
       document.write("<br>")
  
       
      }
      setTimeout(() => {
        window.location.href = window.location.href;
      }, 5000);
      
  }

  //2. invertir cadena 
const invertir = ()=>{
  const invertirCadena = cadena => cadena.split("").reverse().join("");
let palabra = prompt("Introduce un palabra");
setPalabra( invertirCadena(palabra));
setTimeout(() => {
  setPalabra("")
}, 5000);
}
;


//3. Crea una función que te diga si una palabra es Palíndroma

function palindromeChecker(str) {
  const strReversed = str.split("").reverse().join("");

  return strReversed === str ? "es palindromo" : "no es palindromo";
}

const Revisar = ()=>{
  let palabra = prompt("Introduce un palabra");
  setPalindroma(palindromeChecker(palabra));
  setTimeout(() => {
    setPalindroma("")
  }, 5000);
  
}

const numeroMenor =()=>{
  let numeros = [3,6,67,6,23,11];
  alert("EL arreglo es: "+numeros)
  let min = Math.min(...numeros) 
  alert("el menor es:"+" "+min)

}






  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Examen mino</p>

          <button type="button" onClick={piramide}>
            Iniciar piramide
          </button>
          <button type="button" onClick={invertir}>
            Reveritr palabra: { palabra}
          </button>
          <button type="button" onClick={Revisar}>
            La Palabra.. { palindroma}
          </button>
          <button type="button" onClick={numeroMenor}>
            que numero es menor?: { palindroma}
          </button>
      </header>
    </div>
  )
}

export default App
