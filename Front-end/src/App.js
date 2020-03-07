import React, { useEffect, useState } from 'react';
import api from './services/api'

import './global.css'
import './app.css'
import './sidebar.css'
import './main.css'

import Devitem from './components/Devitem'
import Devform from './components/Devform'

function App() {
  const [devs, setDevs] = useState([])

  useEffect(() => {
  async function loadDevs(){
    const response = await api.get('/devs')
    
    setDevs(response.data)
  }
  loadDevs()
}, [])

  
async function handleAddDev(data){
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  return (
    <div id='app'>
      <aside>        
        <strong>Cadastrar</strong>
        <Devform onSubmit={handleAddDev}/>
      </aside>
      
      <main>         
        <ul>
          {devs.map(dev => (
            <Devitem key={dev._id} dev={dev}/>
          ))}
        </ul>  
      </main>
    </div>
  );
}

export default App;
