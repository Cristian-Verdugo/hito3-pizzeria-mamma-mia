
import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../utils/pizzas";

const Home = () => (
  <main className="container mt-4">
    <Header />
    <div className="row justify-content-center">
      {pizzas.map((pizza) => (
        <div className="col-md-4 d-flex" key={pizza.id}>
          <CardPizza
            name={pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
          />
        </div>
      ))}
    </div>
  </main>
);

export default Home;
