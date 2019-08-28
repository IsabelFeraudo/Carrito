/**
 * calcular total y pasar como prop al modal
 * volver todo a cero a partir del modal (pasar los estados a modificar al componente funcional)
 * evitar agregar mas de un bagde
 * si un elemento llega a cero, sacar del carrito
 * 
 * DESEABLES:
 * cambiar etiqueta del boton desplegable
 * poner colores a los botones y acomodarlos en linea
 * 
 * 6 y 38  modal: quiero hacer un handle click para que con las props de carrito que le paso,me reinicie los valores de subtotal y total. no puedo
 * contador: se usa un for pero no se en que cmponente ni como: poner un estado dentro de products que sea subtotal?
 * 28 formas de pago: intente mandar la etiqueta como prop y no pude 
 * 
*/

/**/

/**SUMADOR DE TOTAL */
Const total= for(let i = 0; i < this.props.carrito.length; i++){
  this.props.carrito.total =+ this.props.carrito.total
}
<h1>TOTAL: {this.props.carrito.total}</h1>



<Badge
                // products={this.state.products}
                // agregar={this.state.clicked}
                carrito={this.state.carrito}
                id={this.state.products.id}
                name={this.state.products.name}
                brand={this.state.products.brand}
                price={this.state.products.price}
                // cant={this.state.products.cant}
                // products={this.props.products}
              />