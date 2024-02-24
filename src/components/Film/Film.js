import './Film.css';
import TuileFilm from  '../TuileFilm/TuileFilm';
import ListeFilms from  '../ListeFilms/ListeFilms';
import { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

function Film() {
  
  let { id } = useParams();

    const urlFilm = `https://api-films-dsr0.onrender.com/api/films/${id}`;
    const [elFilm, setFilm] = useState([]);
  
    useEffect(() => {
  
      fetch(urlFilm)
        .then((reponse) => reponse.json())
        .then((data) => {
          console.log(data)
          setFilm(data);
  
        }); 
  
    }, []);

  return (
    
    <article>

    {elFilm.titre}
      
    </article>
  );
}

export default Film;