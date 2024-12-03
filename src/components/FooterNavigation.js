import React from "react";
import "./FooterNavigation.css";
import greeksalad from "../images/greeksalad.jpg";

export default  function FooterNavigation() {
    return <>
        <div className="footer-section">
            <section>
                <article>
                    <img className="icon" src={greeksalad} width="100%" height="50px" alt={"menu"}/>
                </article>

                <article>
                    <div className="item-row">
                        <img className="icon" src={greeksalad} width="50px" height="50px" alt={"menu"}/>
                        <h2 className="customer-name"> Julia Roberts</h2>
                    </div>

                    <h3> Review some text</h3>
                </article>

                <article>
                    <img className="icon" src={greeksalad} width="200px" height="50px" alt={"menu"}/>

                    <div className="item-row">
                        <img className="icon" src={greeksalad} width="50px" height="50px" alt={"menu"}/>
                        <h2 className="customer-name"> Julia Roberts</h2>
                    </div>

                    <h3> Review some text</h3>
                </article>
                <article>
                    <img className="icon" src={greeksalad} width="200px" height="50px" alt={"menu"}/>

                    <div className="item-row">
                        <img className="icon" src={greeksalad} width="50px" height="50px" alt={"menu"}/>
                        <h2 className="customer-name"> Julia Roberts</h2>
                    </div>

                    <h3> Review some text</h3>
                </article>
            </section>
        </div>
    </>
}