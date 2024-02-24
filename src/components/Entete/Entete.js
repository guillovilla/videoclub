import { NavLink } from 'react-router-dom';
import './Entete.css';

function Entete() {
  return (
    <header>
      


      <nav>
        <ul role="menubar">
            <li role="menuitem"><NavLink to="/"><h1>VideoClub</h1></NavLink></li>
            <li role="menuitem"><NavLink to="/liste-films">Liste de films</NavLink></li>
        </ul>
      </nav>



    </header>
  );
}

export default Entete;