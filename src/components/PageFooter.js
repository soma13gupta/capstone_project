import React from "react";
import "../styles/PageFooter.css";
import greeksalad from "../images/greeksalad.jpg";

export default  function PageFooter() {
    return <>
        <div className="footer-section">
            <section>
                <article>
                    <img className="footer-icon" src={greeksalad} width="100%" height="50px" alt={"menu"}/>
                </article>

                <article>
                    <h1> Doormat Navigation</h1>
                    <h2> Home</h2>
                    <h2> Menu</h2>
                    <h2> About</h2>
                    <h2> Contact</h2>
                    <h2>Reservation</h2>
                    <h2> Online</h2>
                    <h2> Login</h2>
                </article>

                <article>
                <h1>Contact</h1>
                    <h2>Address</h2>
                    <h2>Phone</h2>
                    <h2>Email</h2>
                </article>
                <article>
                    <h1>Social Media Links</h1>
                    <h2>Address</h2>
                    <h2>Phone</h2>
                    <h2>Email</h2>
                </article>
            </section>
        </div>
    </>
}