import greeksalad from "../images/greeksalad.jpg";
import brushetta from "../images/brushetta.jpg";
import './Highlights.css';
import React from "react";


export default function Highlights(){
    return <div className="highlights-section">

        <div className="section-row">
            <h1> Highlights</h1>
            <button className="online-menu" onClick={() => alert("Online Menu")}>Online Menu</button>
        </div>

        <section>
            <article>
                <img className="icon" src={greeksalad} width="200px" heigth="200px" alt={"menu"}/>
                    <div className="item-row">
                        <h2> Greek Salad</h2>
                        <h2 className="price"> $10.99</h2>
                    </div>

                    <p> A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion,
                        olives, and feta cheese. </p>
                    <h3> Order a delivery</h3>
            </article>

            <article>
            <img className="icon" src={brushetta} width="200px" heigth="200px" alt={"menu"}/>
                <div className="item-row">
                    <h2> Bruchetta</h2>
                    <h2 className="price"> $10.99</h2>
                </div>

                <p> A slice of bread toasted in the oven or grilled, often rubbed with garlic and topped with
                    extra-virgin
                    olive oil, tomatoes and salt </p>
                <h3> Order a delivery</h3>
            </article>

            <article>
                <img className="icon" src={brushetta} width="200px" heigth="200px" alt={"menu"}/>
                <div className="item-row">
                    <h2> Lemon Desert</h2>
                    <h2 className="price"> $10.99</h2>
                </div>
                <p> This layered lemon dessert is the perfect combination of sweet and tart, with a cookie-like crust,
                    tangy cream cheese, lemon pudding, lemon curd, and whipped cream. </p>
                <h3> Order a delivery</h3>
            </article>
        </section>
    </div>
}