import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, ButtonToolbar, Dropdown } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  console.log(props);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confirmacion de compra
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>El total a pagar es de: </h4>
        <p>{props.iteradorSuma} pesos</p>

        {/* Este es un boton desplegable re piola que consegui en la pagina de bootstrap */}
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Formas de pago
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item>Efectivo</Dropdown.Item>
            <Dropdown.Item>Tarjeta de credito</Dropdown.Item>
            <Dropdown.Item>Tarjeta de debito</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.borrador()}>Confirmar</Button>
        {/* props.onHide */}
      </Modal.Footer>
    </Modal>
  );
}

function App(props) {
  // estos hooks re piolas vienen con el codigo del modal
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <ButtonToolbar>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Comprar
        </Button>

        <MyVerticallyCenteredModal
          iteradorSuma={props.iteradorSuma}
          show={modalShow}
          onHide={() => setModalShow(false)}
          borrador={props.borrador}
          carritoABorrar={props.carritoABorrar}
        />
      </ButtonToolbar>
    </div>
  );
}

export default App;
