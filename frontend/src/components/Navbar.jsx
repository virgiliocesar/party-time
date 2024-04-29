import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>

      <h2>Party Time!</h2>

      <ul>
        <li>
          <NavLink to="/">Minha Festa</NavLink>
        </li>

        <li>
          <NavLink to="/party/new" className="btn">
            Criar Festa
          </NavLink>
        </li>
      </ul>
      
    </nav>
  );
};

export default Navbar;
