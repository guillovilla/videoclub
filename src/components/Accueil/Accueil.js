import './Accueil.css';
import test from './Accueil.json'

function Accueil() {

  // const textAccueil = test.map((text, index) => {
  //   return <p key={index} data={text} />

    const textAccueil = test.map((text, index) => {
      return <p key={index}>{text}</p>;

  });
  return (
    <main>
      Accueil
      {textAccueil}
    </main>
  );
}

export default Accueil;