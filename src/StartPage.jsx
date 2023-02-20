import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./startPage.css"

function StartPage() {
  const navigate = useNavigate();
  return (
    <div className='start_page'>
      <img className="logo_sims" src="./sources/big-logo.png"/>
      <p className='title'>Начни свой <img className="start" src="./sources/start.png"/><b>2023!</b></p>
      <button onClick={() => navigate("/main_page")}>Создай персонажа</button>
    </div>
  );
}

export default StartPage;
