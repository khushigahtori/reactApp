import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Base_URL } from "./Config";

function Product() {
  const [product, setProduct] = useState("");
  const [business_category, setBusiness_Caregory] = useState("");
  const [_id, set_Id] = useState("");
  const [category, setCategroy] = useState("");
  const [sub_category, setSub_Category] = useState("");

  const navigate = useNavigate();
  function producthandler(event) {
    let data = { product, business_category, category, sub_category };
    console.log(product, business_category, category, sub_category);
    event.preventDefault();
    const url=`${Base_URL}/api/common/dbOperations/addRecord?tableName=product`
    fetch(url,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
        body: JSON.stringify(data),
      }
    ).then((result) => {
      console.warn("result", result);
      navigate("/ProductTable");
    });
  }

  return (
    <div>
      <input
        type=""
        value={product}
        onChange={(e) => {
          setProduct(e.target.value);
        }}
        placeholder="product"
      />
      <br></br>
      <input
        type=""
        value={business_category}
        onChange={(e) => {
          setBusiness_Caregory(e.target.value);
        }}
        placeholder="business category"
      />
      <input
        type=""
        value={_id}
        onChange={(e) => {
          set_Id(e.target.value);
        }}
        placeholder="id"
      />
      <br></br>
      <input
        type=""
        value={category}
        onChange={(e) => {
          setCategroy(e.target.value);
        }}
        placeholder="category"
      />
      <br></br>
      <input
        type=""
        value={sub_category}
        onChange={(e) => {
          setSub_Category(e.target.value);
        }}
        placeholder="sub_category"
      />
      <br></br>.
      <button type="" onClick={producthandler}>
        Click Me!
      </button>
    </div>
  );
}
export default Product;
