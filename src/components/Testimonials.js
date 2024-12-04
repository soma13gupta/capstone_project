import greeksalad from "../images/greeksalad.jpg";
import imgIconTitle from "../images/imgIconTitle.png";
import React from "react";
import '../styles/Testimonials.css';

export default function Testimonials() {
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <section>
                <article>
                    <img className="icon" src={imgIconTitle} width="200px" height="50px" alt={"menu"}/>

                    <div className="item-row">
                        <img className="icon" src={greeksalad} width="50px" height="50px" alt={"menu"}/>
                        <h2 className="customer-name"> Julia Roberts</h2>
                    </div>

                    <h3> Review some text</h3>
                </article>

                <article>
                    <img className="icon" src={imgIconTitle} width="200px" height="50px" alt={"menu"}/>

                    <div className="item-row">
                        <img className="icon" src={greeksalad} width="50px" height="50px" alt={"menu"}/>
                        <h2 className="customer-name"> Julia Roberts</h2>
                    </div>

                    <h3> Review some text</h3>
                </article>

                <article>
                    <img className="icon" src={imgIconTitle} width="200px" height="50px" alt={"menu"}/>

                    <div className="item-row">
                        <img className="icon" src={greeksalad} width="50px" height="50px" alt={"menu"}/>
                        <h2 className="customer-name"> Julia Roberts</h2>
                    </div>

                    <h3> Review some text</h3>
                </article>
                <article>
                    <img className="icon" src={imgIconTitle} width="200px" height="50px" alt={"menu"}/>

                    <div className="item-row">
                        <img className="icon" src={greeksalad} width="50px" height="50px" alt={"menu"}/>
                        <h2 className="customer-name"> Julia Roberts</h2>
                    </div>

                    <h3> Review some text</h3>
                </article>
            </section>
        </div>
    );
}