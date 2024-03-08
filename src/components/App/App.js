// npm install react-router-dom
import React,  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import Entete from '../Entete/Entete';
import ListeFilms from '../ListeFilms/ListeFilms';
import Film from '../Film/Film';
import Admin from '../Admin/Admin';
import './App.css';

export const AppContext = React.createContext();

function App() {

  //const [estLog, setEstLog] = useState(false)
  const [logging, setLogging] = useState( {estLog: false, usager : ''});
  

  function login(e){
    e.preventDefault();
    // console.log('login')
    if (e.target.usager.value == 'admin'){
      setLogging(logging => ({ ...logging, estLog: true, usager: e.target.usager.value }));
      e.target.reset();

    }
  }

  function logoff(e){
    e.preventDefault();
    // console.log('login')
    if (e.target){
      setLogging(logging => ({ ...logging, estLog: false}));
      e.target.reset();

    }
  }

  return (
    <AppContext.Provider value={logging}>
      <Router>
        {/* <Entete  handleLogin={login} estLog={estLog}/> */}
        <Entete  handleLogin={login} handleLogoff={logoff} />
        
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/liste-films" element={<ListeFilms />} />
          <Route path="/film/:id" element={<Film />} />
          {/* <Route path="/admin" element={estLog ? <Admin />: <Navigate to="/" />} /> */}
          <Route path="/admin" element={logging.estLog ? <Admin />: <Navigate to="/" />} />
        </Routes>

      </Router>
    </AppContext.Provider>
  );
}

export default App;
