import React, { useEffect, useState } from "react";
import axios from "axios";
import { url } from "../../src/urlConfig";
import "../pages/Cart.css";
import { useHistory } from "react-router-dom";
import { Button, Toast, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteAllCart, fetchCart } from "../store/action/cartAction";
import CartProductComponent from "../Components/CartProductComponent";
/* eslint-disable */

export default function Cart() {
  const { carts } = useSelector((state) => state.cartReducer);
  // const [qty,setQTy] = useState(0)
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchCart());
  }, []);

  function deleteAllTheCart() {
    const promiseAll = [];

    carts.forEach((value) => {
      promiseAll.push(axios.delete(`${url}/carts/${value.id}`));
    });

    Promise.all(promiseAll).then((res) => {
      dispatch(deleteAllCart());
    });
    history.push("/");
  }

  function checkOut() {
    handleShow()
    axios
      .post(`${url}/histories`, { carts, date: new Date() })
      .then((res) => {
        deleteAllTheCart();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  if (carts.length === 0) {
    return (
      <div className="CartEmpty">
        <h3>Cart is empty.....</h3>
      </div>
    );
  } else {
    return (
      <div className="Toast">
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Notifications</strong>
          </Toast.Header>
          <Toast.Body>Cart Has Been Added</Toast.Body>
        </Toast>
        <div className="CartPage">
          <h3>Carts</h3>
          {carts.map((cart) => {
            return (
              <CartProductComponent
                key={cart.id}
                id={cart.id}
                name={cart.name}
                img={cart.img}
                price={cart.price}
                Qty={cart.Qty}
                stock={cart.stock}
              />
            );
          })}
          <Button
            className="checkOut"
            variant="outline-dark"
            onClick={() => {
              handleShow();
            }}
          >
            Check Out
          </Button>
        </div>
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
            <h5>You sure you want to check out this stuff?</h5>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={checkOut}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
