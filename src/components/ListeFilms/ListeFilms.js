import './ListeFilms.css';
import TuileFilm from  '../TuileFilm/TuileFilm';
import Filtre from  '../Filtre/Filtre';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';




function ListeFilms() {
  
  const urlListeFilms = 'https://api-films-dsr0.onrender.com/api/films';
  // const urlListeFilms = 'dat/titre-asc.json';
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

    return <Link key={index} to={`/film/${film.id}`}><TuileFilm key={index} data={film}  handleInfo={urlFiltre} /></Link>
    
  });


  function filtre(e) {
    if(e.target.textContent === 'Réalisateur (A-Z)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=realisation&order-direction=asc`);
      // setUrlFiltre('data/realisation-asc.json');
    }else if (e.target.textContent === 'Réalisateur (Z-A)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=realisation&order-direction=desc`);
      // setUrlFiltre('data/realisation-desc.json');
    }else if (e.target.textContent === 'Titre (A-Z)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=titre&order-direction=asc`);
      // setUrlFiltre('data/titre-asc.json');
    }else if (e.target.textContent === 'Titre (Z-A)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=titre&order-direction=desc`);
      // setUrlFiltre('data/titre-desc.json');
    }else if (e.target.textContent === 'Année (plus récent)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=annee&order-direction=desc`);
      // setUrlFiltre('data/annee-asc.json');
    }else if (e.target.textContent === 'Année (plus ancien)'){
      setUrlFiltre(`https://api-films-dsr0.onrender.com/api/films?tri=annee&order-direction=asc`);
      // setUrlFiltre('data/annee-desc.json');
    }
}

//contrôle class .active
function classActive(e) {

  let elsFiltre = e.target.closest('.filtres').children;

  // console.log(elsFiltre)

  for (let i = 0; i < elsFiltre.length; i++) {
    elsFiltre[i].classList.remove('active');
  }   
  e.target.classList.add('active');
}

  return (
    <main>
      <Filtre handleFiltre={filtre} handleTarget={classActive}  />
      <div className="grid-catalogue">
        {tuilesFilm}
      </div>
    </main>
  );
}

export default ListeFilms;