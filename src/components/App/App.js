import React,  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Accueil from '../Accueil/Accueil';
import Entete from '../Entete/Entete';
import ListeFilms from '../ListeFilms/ListeFilms';
import Film from '../Film/Film';
import Admin from '../Admin/Admin';
import './App.css';
import { AnimatePresence } from 'framer-motion';

export const AppContext = React.createContext();

function App() {

  const location = useLocation();

  const [logging, setLogging] = useState( {estLog: false, usager : ''});
  

  function login(e){
    e.preventDefault();
    if (e.target.usager.value == 'admin') {
      console.log('entrou aqui');
    }
    if (e.target.usager.value == 'admin'){
      console.log('entrou aqui na segunda');

      setLogging(logging => ({ ...logging, estLog: true, usager: e.target.usager.value }));
      // setLogging({ estLog: true, usager: e.target.usager.value });
      // console.log(logging.estLog);
      // console.log(logging.usager);
      // e.target.reset();

    }
  }

  function logoff(e){
    e.preventDefault();

    if (e.target){
      
      setLogging(logging => ({ ...logging, estLog: false, usager: '' }));
      // e.target.reset();

    }
  }

  return (
    <AppContext.Provider value={logging}>
      {/* <Router> */}
        <Entete  handleLogin={login} handleLogoff={logoff} />

        <AnimatePresence mode="wait">

          <Routes location={location} key={location.key}>
            <Route path="/" element={<Accueil />} />
            <Route path="/liste-films" element={<ListeFilms />} />
            <Route path="/film/:id" element={<Film />} />
            <Route path="/admin" element={logging.estLog ? <Admin />: <Navigate to="/" />} />
          </Routes>

        </AnimatePresence>

      {/* </Router> */}
    </AppContext.Provider>
  );
}

export default App;
