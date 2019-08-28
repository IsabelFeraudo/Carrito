import React from "react";
// import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Item extends React.Component {
  state = {};

  render() {
    // consolelog de las props para probar si se estan pasando correctamente
    console.log(this.props);
    return (
      <div>
        <div>
          <br />

          <h2>{this.props.name}</h2>
          <h4>Marca: {this.props.brand}</h4>
          <p>Precio: {this.props.price}</p>
          {/* cantidad y suubtotal se pasan como props desde lista */}
          <p>Cantidad: {this.props.cantidad}</p>
          <p>Subtotal: {this.props.subtotal}</p>

          <button
            type="button"
            class="btn btn-success"
            onClick={() => this.props.handleClick()}
            // onSubtotal={(e)=>this.handleSubtotal(this.state.cant)}
          >
            +
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => this.props.handleClickRemove()}
            // onSubtotal={this.handleSubtotal}
          >
            -
          </button>

          {/* <button
                type="button"
                class="btn btn-primary"
                onClick={()=>this.handleClickOK(this.props.index)}
                
                // onSubtotal={(e)=>this.handleSubtotal(this.state.cant)}
              >
                Grabar Subtotal
              </button> */}
          {/* <h1>TOTAL: {this.state.total}</h1> */}

          {/* {this.props.id} */}
        </div>
      </div>
    );
  }
}
