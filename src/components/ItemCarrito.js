import React from "react";
// import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Item extends React.Component {
  state = {};

  // handleClickAdd = props => {
  //   this.setState({
  //     clicked: true,
  //     cant: this.state.cant + 1,
  //     subtotal: (this.state.cant + 1) * this.props.price
  //     // total: this.state.total + this.state.subtotal
  //   });
  // };

  // handleClickRemove = () => {
  //   if (this.state.cant > 0) {
  //     this.setState({
  //       cant: this.state.cant - 1,
  //       subtotal: (this.state.cant - 1) * this.props.price
  //       //   total: this.state.total + ((this.state.cant-1) * this.props.price
  //     });
  //   } else {
  //   }
  // };

  // handleClickOK=(index)=>{
  //     this.setState({
  //         total: this.state.total + this.setState.subtotal
  //     })
  // }

  // handleSubtotal=(e)=>{
  //   this.setState({
  //     e:this.state.cant * this.props.price
  //   });

  // }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <br />
          <h2>{this.props.subtotal}</h2>
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
