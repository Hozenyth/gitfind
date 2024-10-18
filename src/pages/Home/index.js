import React from 'react';
import Header from '../../components/Header';
import background from '../../assets/background.png'
import './style.css';

function App() {
  return (
    <div className="App">
     <Header/>
     <divv className="conteudo">
      <img src={background} className='background' alt='backgorund app'></img>
      <div className='info'> 
      <div>
        <input name='usuario' placeholder='@username'/>
        <button>Button</button>
      </div>
      </div>

     </divv>
    </div>
  );
}

export default App;
