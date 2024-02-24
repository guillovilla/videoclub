import './TuileFilm.css';

function TuileFilm(props) {
  return (
    <article className="item">
        <a href="#0" aria-labelledby={props.data.titre}></a>
        <img src={`img/${props.data.titreVignette}`} alt="img" width="50" />
        <div className="item__overlay">
            <h3>{props.data.titre}</h3>
            <div className="item__body">
                <p>{props.data.description}</p><br></br>
            </div>
        </div>
    </article>
  );
}
//modal reference: https://css-irl.info/css-only-slide-up-caption-hover-effect/

export default TuileFilm;