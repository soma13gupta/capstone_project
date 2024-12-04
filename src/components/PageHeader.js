import imgIconTitle from "../images/imgIconTitle.png";
import '../styles/PageHeader.css';
import {Link} from "react-router-dom";


export default  function PageHeader() {
  return <>
      <header>
          <body>
          <meta name="description" content="Little Lemon Restuarant Web Page"/>
          <meta name="og:title" content="Little Lemon Restuarant"/>
          <meta name="og:description" content="Little Lemon Restuarant Website"/>
          <meta name="og:image" content="https://example.com/ogp.jpg"/>

          <div className={"navbar"}>
              <img src={imgIconTitle} width="200" height="50" alt={"logo"}/>

              <nav className="menuoptions">
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/about-section">About</Link>
                      </li>
                      <li>
                          <Link to="/menu">Menu</Link>
                      </li>
                      <li>
                          <Link to="/reservation">Reservations</Link>
                      </li>
                      <li>
                          <Link to="/online-order">Online Order</Link>
                      </li>
                      <li>
                          <Link to="/login">Login</Link>
                      </li>
                  </ul>
              </nav>
          </div>
          </body>
      </header>

  </>
}
