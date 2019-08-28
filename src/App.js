import React from "react";
import "./App.css";
import ProductList from "/home/isabel/carrito/src/components/Lista.js";

// En este componente se definen en un arreglo, los productos involucrados
class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        name: "Mate",
        price: 200,
        brand: "Marolio",
        cant: 0,
        subtotal: 0
        // status: 5,
      },
      {
        id: 2,
        name: "Cafe",
        price: 100,
        brand: "La Virginia",
        cant: 0,
        subtotal: 0
        // status: 6,
      },
      {
        id: 3,
        name: "Harina",
        price: 40,
        brand: "Blancaflor",
        cant: 0,
        subtotal: 0
        // status: 2,
      },
      {
        id: 4,
        name: "Palmitos",
        price: 100,
        brand: "Marolio otra vez",
        cant: 0,
        subtotal: 0
        // status: 2,
      }
    ]
  };

  render() {
    return (
      <span>
        <ProductList products={this.state.products} />
      </span>
    );
  }
}

export default App;
