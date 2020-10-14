import React from 'react';

import './styles/global.css'
import './styles/pages/landing.css'
import logo from './images/Logo.svg'

function App() {
  return (
    <div id = 'landing-page'>
      <div className="content-wrapper">
        <img src={logo} alt=""/>

        <main>
          <h1>Leve felicidade para o mundo.</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Fortaleza</strong>
          <span> Ceará</span>
        </div>
      </div>
    </div>
  );
}

export default App;
