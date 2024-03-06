import { useContext } from 'react';
import { AppContext } from '../App/App';
import { NavLink } from 'react-router-dom';
import './Entete.css';

function Entete(props) {
  const context = useContext(AppContext)

  return (
    <header>
      <nav>
        <ul role="menubar">
            <li role="menuitem"><NavLink to="/">Accueil</NavLink></li>
            <li className='entete-text' role="menuitem"><NavLink to="/liste-films">Liste de films</NavLink></li>
            <li role="menuitem"> {context.estLog ? <NavLink to="/admin">Admin</NavLink> : '' }</li> 
        </ul>
            <li role="menuitem"> {context.estLog ? 
                                 <form onSubmit={props.handleLogoff}>
                                    <button>Logout</button>
                                  </form> : '' } </li> <h2>{context.usager}</h2>
            <li role="menuitem">{context.estLog ? '' :
                                <form onSubmit={props.handleLogin}>
                                  <input type="text" name="usager"></input>
                                  <button>Login</button>
                                </form>}</li>
      </nav>

    </header>
  );
}

export default Entete;

//Reference pour le button: https://believemy.com/r/creer-un-bouton-neon-avec-css 
