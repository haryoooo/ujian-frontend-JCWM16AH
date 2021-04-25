import React, { useEffect, useState } from "react";
import { Table, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTheCart, fetchCart, removeCart } from "../store/action/cartAction";
import "./CartProductComponent.css";

export default function CartProductComponent(props) {
  const dispatch = useDispatch();
  const [Qty, setQty] = useState('')
  // const [cart, setCart] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchCart())
  }, [])

  function editCart() {
    handleShow();
    setQty()
  }

  function deletedCart(id) {
    dispatch(removeCart(id));
  }

  function updateCart() {
    const data = {
      id:props.id,
      img:props.img,
      name:props.name,
      price:props.price,
      stock:props.stock,
      Qty
    }

    let condition;
  
      do {

        if (Qty <= 0) {
          condition = true;
          alert("Masukan angka diatas nol");
          return Qty
        } else if (Qty > props.stock ) {
          condition = true;
          alert("Angka yang anda Masukan lebih dari stock");
          return Qty
        } else {
          condition = false;
          handleClose()
          dispatch(editTheCart(data))
          // history.pushState(`/histories`)
        }
      } while (condition);
    }

  return (
    <div className="CartProductComponent">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Qty Order</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr key={props.id}>
            <td>{props.id}</td>
            <td>
              <img src={props.img} alt="imgs"></img>
            </td>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.stock} pcs</td>
            <td>{props.Qty} pcs</td>
            <td>
              <Button variant="success"
                onClick={() => {
                  editCart();
                }}
              >
                Edit
              </Button>
              {"   "}
              <Button variant="danger"
                onClick={() => {
                  deletedCart(props.id);
                }}
              >
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Quantity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="number" min="0" onChange={(e) => setQty(Number(e.target.value))} value={Qty}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateCart}>Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
