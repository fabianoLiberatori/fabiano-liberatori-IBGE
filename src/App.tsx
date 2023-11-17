import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route element={ <Layout />}>
         <Route path='/' element={ <Home /> } /> 
        </Route>
      </Routes>
       
    </>
  )
}

export default App
