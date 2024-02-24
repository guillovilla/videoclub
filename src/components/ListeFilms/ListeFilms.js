import './ListeFilms.css';
import TuileFilm from  '../TuileFilm/TuileFilm';
import Filtre from  '../Filtre/Filtre';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



function ListeFilms() {
  
  const urlListeFilms = 'https://api-films-dsr0.onrender.com/api/films';
  // const urlListeFilms = 'data/titre-asc.json';
  const [urlFiltre, setUrlFiltre] = useState(urlListeFilms);
  const [listeFilms, setListeFilms] = useState([]);

  useEffect(() => {

    fetch(urlFiltre)
      .then((reponse) => reponse.json())
      .then((data) => {

        setListeFilms(data);

      }); 

  }, [urlFiltre]);


  const tuilesFilm = listeFilms.map((film, index) => {

    return <Link key={index} to={`/film/${film.id}`}><TuileFilm key={index} data={film} /></Link>

  });

function filtre(e) {
    // console.log(e.target.textContent )

    if(e.target.textContent === 'Réalisateur alphabetique (A-Z)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=realisation&order-direction=asc`);
    }else if (e.target.textContent === 'Réalisateur alphabetique (Z-A)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=realisation&order-direction=desc`);
    }else if (e.target.textContent === 'Titre alphabétique (A-Z)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=titre&order-direction=asc`);
    }else if (e.target.textContent === 'Titre alphabétique (Z-A)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=titre&order-direction=desc`);
    }else if (e.target.textContent === 'Par année (du plus récent)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=annee&order-direction=asc`);
    }else if (e.target.textContent === 'Par année (du plus ancien)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=annee&order-direction=desc`);
    }
}

// function maDeuxiemmeFonction() {
//   console.log('2emefonction')
// }


  return (
    <main>

      <Filtre handleFiltre={filtre} />
      <div className="grid-catalogue">
        {tuilesFilm}
      </div>
    </main>
  );
}

export default ListeFilms;