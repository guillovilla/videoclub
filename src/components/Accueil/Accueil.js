import './Accueil.css';
import test from './Accueil.json'

function Accueil() {
  const textAccueil = test.map((text, index) => {
    return <div key={index}><p>{text}</p></div>;

  });
  return (
    <main>
      <div>
        <div className='container-accueil'>
        </div>    
        <div>{textAccueil}</div>
      </div>    
    </main>
  );
}

export default Accueil;