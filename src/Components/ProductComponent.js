import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addCart } from "../store/action/cartAction";
import axios from "axios";
import { url } from "../urlConfig";

export default function ProductComponent(props) {
  const [product, setProduct] = useState("");
  const [number, setNumber] = useState(1)
  const history = useHistory();
  const dispatch = useDispatch();

  function popUp(product) {
    alert("Anda Belum Login ke Page, tapi karena loginnya gakbisa yaudah sok lanjut");
    setProduct(product);

    console.log(product);

    let condition;

    do {
      const Qty = prompt("Masukkan Jumlah Stok yang mau anda beli : ");

      Number(Qty);

      const data = {
        id: setNumber(number),
        img: props.img,
        name: props.name,
        price: props.price,
        stock: props.stock,
        Qty,
      };

      if (Qty <= 0) {
        condition = true;
        alert("Masukkan Stok dengan jumlah angka!");
      } else if (Qty > props.stock) {
        condition = true;
        alert("Qty melebihi stok yang ada!");
      } else {
        condition = false;
        dispatch(addCart(data));
        axios.post(`${url}/carts`, data)
        history.push(`/Cart`);
      }
    } while (condition);
  }

  return (
    <div className="ProductComponent">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.img} alt="imagese" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>Product Price : {props.price}</Card.Text>
          <Card.Text>Product stock : {props.stock}</Card.Text>
          <Button
            onClick={() => {
              popUp();
            }}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
