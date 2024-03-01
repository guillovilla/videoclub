import './Film.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Film() {
  
  let { id } = useParams();

    const urlFilm = `https://api-films-dsr0.onrender.com/api/films/${id}`;
    const [elFilm, setFilm] = useState([]);
  
    useEffect(() => {
  
      fetch(urlFilm)
        .then((reponse) => reponse.json())
        .then((data) => {
  
          setFilm(data);
  
        }); 
  
    }, []);

    async function soumettreNote(e){
      
      const inputValue = parseInt(e.target.value);
      let aNotes;
      if (!elFilm.notes){
        aNotes = [inputValue]
      } else {
        aNotes = elFilm.notes;
        aNotes.push(inputValue);
      }

      const oOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({notes: aNotes})
      }

      async function setMoyenne(){
      console.log(elFilm.notes)
        // const inputValue = parseInt(e.target.value);
        // let totalNotes = 0;
        // for (let i = 0; i < elFilm.notes.length; i++) {
        //   totalNotes += elFilm.notes[i];
        //   console.log(elFilm.notes)
        // }
      
        // elFilm.notes
        // if (!elFilm.notes){
        //   aNotes = [inputValue]
        // } else {
        //   aNotes = elFilm.notes;
        //   aNotes.push(inputValue);
        // }
  
        const oOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          
        }
      }

      let putNote = await fetch(urlFilm, oOptions),
          getFilm = await fetch(urlFilm);

      Promise.all([putNote, getFilm])
        .then(reponse => reponse[1].json())
        .then((data) =>{
  
          setFilm(data);

          //setMoyenne()
          //setNbVote()
          //codepen ejemplo de estrellas
        })

    // numerode votos .length// + de votos con un ternario 
    }


  return (
    <main>
      <div className='film-container'>
        <article className='single-film'>
        <img src={`../img/${elFilm.titreVignette}`} alt="img"  height={500}/>
        <div>
          <p className='p-single-film'>{elFilm.titre}</p>
          <p className='p-single-film'>{elFilm.realisation}</p>
          <p className='p-single-film'>{elFilm.annee}</p>
          <p className='p-single-film'>{elFilm.genres}</p>
          <p className='p-single-film'>{elFilm.description}</p>

          <button onClick={soumettreNote}>Vote</button>
        </div>
        </article>
        <div className="rating-stars">
          <h2>Note </h2>
          <div >
            <input onClick={(e)=>soumettreNote(e)} type="radio" name="rating" id="rs0" value="0"  checked /><label for="rs0"></label>
            <input onClick={(e)=>soumettreNote(e)} type="radio" name="rating" id="rs1" value="1" /><label for="rs1"></label>
            <input onClick={(e)=>soumettreNote(e)} type="radio" name="rating" id="rs2" value="2" /><label for="rs2"></label>
            <input onClick={(e)=>soumettreNote(e)} type="radio" name="rating" id="rs3" value="3" /><label for="rs3"></label>
            <input onClick={(e)=>soumettreNote(e)} type="radio" name="rating" id="rs4" value="4" /><label for="rs4"></label>
            <input onClick={(e)=>soumettreNote(e)} type="radio" name="rating" id="rs5" value="5" /><label for="rs5"></label>
          </div>
        </div>
        {/* <li role="menuitem"><NavLink to="/liste-films">Liste de films</NavLink></li> */}  
      </div>
    </main>
  );
}

export default Film;