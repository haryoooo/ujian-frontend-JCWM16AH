import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import ProductComponent from "../Components/ProductComponent";
import { fetchProducts } from "../store/action/productAction";
import "./Home.css";

export default function Home() {
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="Home">
      {/* <h3>Home</h3> */}
      {products.map(product=>{
          return <ProductComponent
            key={product.id}
            id={product.id} 
            name={product.name}
            img={product.img}
            price={product.price}
            stock={product.stock}
          />
      })}
    </div>
  );
}
