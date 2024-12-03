import imgIconTitle from "../images/imgIconTitle.png";
import './PageHeader.css';
// import {Link, Route, Routes} from "react-router-dom";
// import BookingPage from "./BookingPage";
// import App from "../App";

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

              <nav>
                  {/*<Link to="/">Home</Link>.*/}
                  {/*<Link to="/reservation">BookingPage</Link>*/}
                  <ul>
                      <li><a className="active" href="#home">Home</a></li>
                      <li><a href="/src/components/AboutSection">About</a></li>
                      <li><a href="/menu">Menu</a></li>
                      <li><a href="/reservation">Reservations</a></li>
                      <li><a href="#onlineOrder">Online Order</a></li>
                      <li><a href="#login">Login</a></li>
                  </ul>
              </nav>
              {/*<Routes>*/}
              {/*    <Route path="/" element={<App/>}/>*/}
              {/*    <Route path="/reservation" element={<BookingPage/>}/>*/}
              {/*</Routes>*/}
          </div>
          </body>
      </header>

  </>
}
