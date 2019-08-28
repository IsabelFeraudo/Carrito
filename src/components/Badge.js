import React from "react";
// import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCarrito from "/home/isabel/carrito/src/components/ItemCarrito.js";
// import {Modal, Button} from 'react-bootstrap';
import { Card, Button } from "react-bootstrap";
import Modal from "/home/isabel/carrito/src/components/Modal.js";

export default class Badge extends React.Component {
  // handleClickOK = () => {};

  render(props) {
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.props.carrito.map((elemento, index) => {
            return (
              <div class="row">
                <div class="col-sm-20">
                  <li key={index}>
                    <span>
                      <Card>
                        <Card.Body>
                          <Card.Text>
                            {/**Elemento a mapear */}
                            <ItemCarrito
                              cantidad={elemento.cantidad}
                              id={elemento.id}
                              name={elemento.name}
                              brand={elemento.brand}
                              price={elemento.price}
                              index={index}
                              subtotal={elemento.subtotal}
                              // el elemento que se pasa por parametro es el que se esta iterando
                              handleClick={() =>
                                this.props.handleClick(
                                  elemento,
                                  this.props.carrito
                                )
                              }
                              handleClickRemove={() =>
                                this.props.handleClickRemove(
                                  elemento,
                                  this.props.carrito
                                )
                              }
                            />
                            {this.props.subtotal}.
                          </Card.Text>
                        </Card.Body>
                      </Card>

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

        <Modal
          iteradorSuma={this.props.iteradorSuma}
          etiqueta="formas de pago"
          // borrador={this.props.borrador}
          carritoABorrar={this.props.carritoABorrar}
        />
      </div>
    );
  }
}

//   return (
//    <div>
//           <h1>Producto Seleccionado</h1>

//           <h5>PRODUCTO: {this.props.name}</h5>
//           <h5>MARCA: {this.props.brand}</h5>
//           <h5>PRECIO: ${this.props.price}</h5>
//           <h5>CANTIDAD: {this.state.cant}</h5>
//           <button
//             type="button"
//             class="btn btn-success"
//             onClick={this.handleClickAdd}
//           >
//             +
//           </button>
//           <button
//             type="button"
//             class="btn btn-danger"
//             onClick={this.handleClickRemove}
//           >
//             -
//           </button>

//           <button
//             type="button"
//             class="btn btn-primary"
//             onClick={this.handleClickOK}
//           >
//             OK
//           </button>
//     </div>
//   );
// }

// render(props) {
//   return (

//       <div class="col-sm-30">
//         <div class="card bg-light mb-36">
//           <div class="card-header">
//             <h1>Producto Seleccionado</h1>
//           </div>
//           <div class="card-body">
//             <h5>PRODUCTO: {this.props.name}</h5>
//             <h5>MARCA: {this.props.brand}</h5>
//             <h5>PRECIO: ${this.props.price}</h5>
//             <h5>CANTIDAD: {this.state.cant}</h5>
//             <button
//               type="button"
//               class="btn btn-success"
//               onClick={this.handleClickAdd}
//             >
//               +
//             </button>
//             <button
//               type="button"
//               class="btn btn-danger"
//               onClick={this.handleClickRemove}
//             >
//               -
//             </button>

//             <button
//               type="button"
//               class="btn btn-primary"
//               onClick={this.handleClickOK}
//             >
//               OK
//             </button>
//           </div>
//         </div>
//       </div>

//   );
// }
