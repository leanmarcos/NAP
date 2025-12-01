import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Header } from './components/header/header.jsx'
import { Welcome } from './components/welcome/welcome.jsx'

function Salute({name, age}){
  let salute = '';
  name === 'Leandro' && age === 21 ? salute = 'Hola admin!' : salute = 'Vos no sos lindo';
  return <h1>{salute}</h1>
}


createRoot(document.getElementById('root')).render(
  <>
  <Welcome />

  </>
)
