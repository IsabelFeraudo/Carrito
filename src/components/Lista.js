import React from "react";
import Badge from "/home/isabel/carrito/src/components/Badge.js";
import "bootstrap/dist/css/bootstrap.min.css";

class Item extends React.Component {
  render() {
    return (
      <div>
        <div>
          <br />
          <p>Producto: {this.props.name}</p>
          <p>Marca: {this.props.brand}</p>
          <p>Precio: {this.props.price}</p>
          {/*<p>Subtotal: {this.props.subtotal}</p> */}

          {/* {this.props.id} */}
        </div>
      </div>
    );
  }
}

class Lista extends React.Component {
  state = {
    clicked: false,
    contador: 0,
    carrito: []
  };

  funcionBorradora = carrito => {
    this.setState({ carrito: [] });
    return carrito;
  };

  /**funcion encargada de incrementar la cantidad de un producto en el carrito
   * en caso que lo contenga, en caso contrario, lo agrega
   * @param elem elemento a agregar
   * @param carrito arreglo al que se le agregan cosas */
  handleClick = async (elem, carrito) => {
    // copia de carrito existente
    let carritoItem = carrito.slice();
    //crear bandera como constante, existe o no el item en el carrito
    //banderas con let
    let flag = false;
    //for each de la copia del carrito

    carritoItem.forEach(item => {
      if (item.id === elem.id) {
        flag = true;
        item.cantidad++;
        item.subtotal = parseFloat(item.price * item.cantidad);
      }
    });

    if (flag === false) {
      //creacion de objeto nuevo producto
      const newProduct = {
        id: elem.id,
        name: elem.name,
        price: elem.price,
        brand: elem.brand,
        cantidad: 1,
        subtotal: parseFloat(elem.price * 1)
      };

      carritoItem.push(newProduct);
    }
    this.setState({ carrito: carritoItem });
  };

  /**funcion encargada de decrementar la cantidad de un producto en el carrito
   * en caso que contenga mas de uno, en caso de que sea uno, lo quita del carrito
   * @param elemento elemento a quitar
   * @param carrito arreglo al que se le quitan elementos */
  handleClickRemove = (elemento, carrito) => {
    let carritoItem = carrito.slice();
    carritoItem.forEach(item => {
      if (item.id === elemento.id) {
        if (item.cantidad === 1) {
          //se realiza una copia de carritoItems sin el producto que se quiere eliminar
          //porque tiene cantidad igual a 1
          let carritoWOItem = carritoItem
            .slice()
            .filter(item1 => item1.id !== item.id);
          //carritoWOItem reemplaza carritoItem
          carritoItem = carritoWOItem;
        } else {
          item.cantidad--;
          item.subtotal = parseFloat(item.price * item.cantidad);
        }
      }
    });
    this.setState({ carrito: carritoItem });
  };

  // Funcion que calcula el total a pagar, sumando todos los subtotales
  iteradorSuma = carrito => {
    let total = 0;
    carrito.forEach(product => {
      total = total + product.subtotal;
    });
    return total;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul>
              {/* Funcion que mapea los elementos de la lista */}
              {this.props.products.map((elemento, index) => {
                return (
                  <div class="row">
                    <div class="col-sm-20">
                      <li key={index}>
                        <span>
                          <Item
                            id={elemento.id}
                            name={elemento.name}
                            brand={elemento.brand}
                            price={elemento.price}
                            subtotal={elemento.subtotal}
                          />
                          <button
                            onClick={() =>
                              this.handleClick(elemento, this.state.carrito)
                            }
                          >
                            Agregar
                          </button>

                          {/** onClick={() => this.openModalEdit(elemento, index)*/}
                        </span>
                      </li>
                      <br />
                    </div>
                  </div>
                );
              })}
              <br />
            </ul>
          </div>

          <div className="col-300">
            {/* 
            Llamada al badge del lado derecho de la pantalla que contendra:
            tarjetas mostrando los productos anadidos al carrito y el boton de confirmacion */}
            <Badge
              //el state se puede usar siempre y cuando se encuentre dentro del mismo componente
              carrito={this.state.carrito}
              handleClick={(elemento, carrito) =>
                this.handleClick(elemento, carrito)
              }
              handleClickRemove={(elemento, carrito) =>
                this.handleClickRemove(elemento, carrito)
              }
              iteradorSuma={this.iteradorSuma(this.state.carrito)}
              borrador={() => this.funcionBorradora()}
              carritoABorrar={this.state.carrito}
            />
          </div>
        </div>
      </div>
    );
  }
}
/**NOTA
 * NO SE PUEDEN ITERAR COMPONENTES, SOLO ARREGLOS */

export default Lista;
