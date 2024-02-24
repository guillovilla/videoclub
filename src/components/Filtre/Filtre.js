import './Filtre.css';


function Filtre(props) {

  
  return (
    <ul className='filtres'>
        {/* <li onClick={(e) => {filtre(e); maDeuxiemmeFonction()}}>Realisateur alphabetique (A-Z)</li> */}
        <li onClick={props.handleFiltre}>Réalisateur alphabetique (A-Z)</li>
        <li onClick={props.handleFiltre}>Réalisateur alphabetique (Z-A)</li>
        <li onClick={props.handleFiltre}>Titre alphabétique (A-Z)</li>
        <li onClick={props.handleFiltre}>Titre alphabétique (Z-A)</li>
        <li onClick={props.handleFiltre}>Par année (du plus récent)</li>
        <li onClick={props.handleFiltre}>Par année (du plus ancien)</li>
    </ul>
  );
}
export default Filtre;