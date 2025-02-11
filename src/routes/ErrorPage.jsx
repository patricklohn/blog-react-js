import React from 'react'
import './ErrorPage.css'
import {Link} from "react-router-dom";
import NavBar from "../components/NavBar"

const ErrorPage = () => {
  return (
    <div className="">
      <NavBar/>
    <div className='error-container'>
      <h1>Houve um erro inesperado.</h1>
      <p>Favor entrar em contato com os administradores do BLOG ou tentar retornar a HOME!</p>
      <Link to={`/`} className='btn' id='btn-err'>Voltar para Home</Link>
    </div>
    </div>
  )
}

export default ErrorPage
