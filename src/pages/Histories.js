import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { fetchHistories, removeHistories } from "../store/action/historiesAction";
import "./Histories.css";

export default function Histories() {
  const { histories, isLoading } = useSelector(
    (state) => state.historiesReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHistories());
  }, []);

  function deleteHistories(id){
      dispatch(removeHistories(id))
  }



  if (isLoading) {
    return (
      <div>
        <h3>Histories is empty....</h3>
      </div>
    );
  } else {
    return (
      <div className="header">
        <h3>Histories</h3>
        <div className="HistoriesPage">
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Transaction Id</th>
                <th>Date</th>
                <th>Product</th>
                <th>Quantity Order</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {histories.map((product) => {
                return (
                  <tr>
                    <td>{product.id}</td>
                    <td>{product.date}</td>
                    <td>
                      {product.carts.map((data) => {
                        return (
                          <ul style={{listStyle:"none"}}>
                            <li>{data.name}</li>
                          </ul>
                        );
                      })}
                    </td>
                    <td>
                      {product.carts.map((data) => {
                        return (
                          <ul style={{listStyle:"none"}}>
                            <li>{data.Qty} pcs</li>
                          </ul>
                        );
                      })}
                    </td>
                    <td>Belum Dibayar</td>
                    <td><Button variant="danger" onClick={()=>{deleteHistories(product.id)}}>Cancel</Button></td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
