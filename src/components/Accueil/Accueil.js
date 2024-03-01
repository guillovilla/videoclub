import './Accueil.css';
import test from './Accueil.json'

function Accueil() {

  // const textAccueil = test.map((text, index) => {
  //   return <p key={index} data={text} />

    const textAccueil = test.map((text, index) => {
      return <div><p key={index}>{text}</p></div>;

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