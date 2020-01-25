import React, { useEffect, useState } from 'react';
import api from './services/api'

import './global.css'
import './app.css'
import './sidebar.css'
import './main.css'

function App() {
  const [github_username, setGithub_username] = useState('')
  const [techs, setTechs] = useState('')
  const [latitude, setlatitude] = useState(``)
  const [longitude, setlongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        
        setlatitude(latitude)
        setlongitude(longitude)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 3000,
      }
    )
}, [])

userEffect() => {
  async function loadDevs(){
    cont response = await api.get('/devs')
    
  }
}

async function handleAddDev(e){
  e.preventDefault()

  const response = await api.post('/devs', {
    github_username,
    techs,
    latitude,
    longitude,
  })
  setGuthubUSername('')
  setTechs('')
}

  return (
    <div id='app'>
      <aside>        
        <strong>Cadastrar</strong>
        <form htmlFor={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input 
            name="github_username"
            id="github_username"
            required
            value={github_username}
            onChange={ e => setGithub_username(e.target.value)}
            />
          </div>
          
          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
            name="techs" 
            id="techs" 
            required
            value={techs}
            onChange={ e => setTechs(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              required
              value = {latitude}
              onChange = {e => setlatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
               type="number" 
               name="longitude" 
               id="longitude" 
               value = {longitude}
               onChange = {e => setlongitude(e.target.value)}
               required
               />
            </div>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>         
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50428526?s=460&v=4" alt="PedroHIB"></img>
              <div className="user-info">
                <strong> PedroHIB</strong>
                <span> React, React Native, Node.js</span>
              </div>
            </header>
            <p>Testando OMNISTACK 10</p>
            <a href="https://github.com/PedroHIB">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50428526?s=460&v=4" alt="PedroHIB"></img>
              <div className="user-info">
                <strong> PedroHIB</strong>
                <span> React, React Native, Node.js</span>
              </div>
            </header>
            <p>Testando OMNISTACK 10</p>
            <a href="https://github.com/PedroHIB">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50428526?s=460&v=4" alt="PedroHIB"></img>
              <div className="user-info">
                <strong> PedroHIB</strong>
                <span> React, React Native, Node.js</span>
              </div>
            </header>
            <p>Testando OMNISTACK 10</p>
            <a href="https://github.com/PedroHIB">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/50428526?s=460&v=4" alt="PedroHIB"></img>
              <div className="user-info">
                <strong> PedroHIB</strong>
                <span> React, React Native, Node.js</span>
              </div>
            </header>
            <p>Testando OMNISTACK 10</p>
            <a href="https://github.com/PedroHIB">Acessar perfil no Github</a>
          </li>
        </ul>

      </main>
    </div>
  );
}

export default App;
