import React from "react";
import "./App.css";
import ProductList from "/home/isabel/carrito/src/components/Lista.js";

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
      // {this.state.products.map((elemento, index) => {
      //   return (
      //     <div class="container-fluid">
      //       <li key={id}>
      //         <span>
      //           <Item
      //             name={elemento.name}
      //             price={elemento.price}
      //             brand={elemento.brand}
      //           />
      //           <button >Agregar</button>
      //         </span>
      //       </li>
      //     </div>
      //   );
      // })}

      <span>
        <ProductList
          products={this.state.products}
          // onSaveProduct={this.handleSaveProduct}
          // onIncrementProduct={this.handleSaveProduct}
          // onRemoveProduct={this.handlerRemoveProduct}
        />
      </span>
    );
  }
}

export default App;
