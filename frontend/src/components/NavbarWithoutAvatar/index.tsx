import { SNavbar } from "./styles";
import logo from "/app/src/assets/images/LOGO.png";
import genericAvatar from "/app/src/assets/images/avatars/generic_avatar.png";
import { Link } from "react-router-dom";

export function NavbarSemAvatar() {
  return (
    <SNavbar>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </li>

          <li>
            <input type="checkbox" id="dropdown-toggle" hidden />
            <label htmlFor="dropdown-toggle">
              <img src={genericAvatar} alt="Menu" />
            </label>

            <ul className="dropdown-menu">
              <li>
                <Link to="/login">ENTRAR</Link>
              </li>
              <li>
                <Link to="/register">CADASTRAR</Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </SNavbar>
  );
}
