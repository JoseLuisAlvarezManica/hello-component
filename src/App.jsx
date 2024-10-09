import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header"
import { ListaSuper } from './components/ListaSuper'

const PRODUCTOS = [
  { nombre: "Pan de caja", precio: 35 },
  { nombre: "Leche deslactosada 1L", precio: 20 },
  { nombre: "Huevos orgánicos (docena)", precio: 45 },
  { nombre: "Arroz blanco 1kg", precio: 18 },
  { nombre: "Aceite de cocina 900ml", precio: 40 },
  { nombre: "Manzanas rojas (kg)", precio: 35 },
  { nombre: "Jugo de naranja 1L", precio: 28 },
  { nombre: "Detergente para ropa 1kg", precio: 60 },
  { nombre: "Papel higiénico (paquete de 4)", precio: 25 },
  { nombre: "Queso panela 250g", precio: 45 }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header title={"Mi primer componente"} color={"yellow"} />
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello Component</h1>
      
      <ListaSuper productos={PRODUCTOS} />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
