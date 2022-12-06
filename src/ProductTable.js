import React, { useState } from "react";
import { Base_URL } from "./Config";
function ProductTable() {
  const [product, setProduct] = useState([]);
  const getRecords = () => {
    console.log("1");
    try {
      console.log("2");
      const url = `${Base_URL}/api/common/dbOperations/getRecords?tableName=product`;
      fetch(url, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((result) => setProduct(result));
    } catch (err) {
      console.log("4");
      console.log({ err });
    }
  };
  React.useEffect(() => {
    getRecords();
  }, []);
  function deletehandler(_id) {
    const url = `${Base_URL}/api/common/dbOperations/deleteRecordById?tableName=product&id=${_id}`;
    fetch(url, {
      method: "DELETE",
    }).then((result) => {
      if (result.status === 200) {
        getRecords();
      }
    });
  }
  return (
    <table>
      <tr>
        <td>product</td>
        <td>business category</td>
        <td>_id</td>
        <td>category</td>
        <td>sub category</td>
        <td>Delete</td>
      </tr>
      {product.map((item) => (
        <tr>
          <td>{item.product}</td>
          <td>{item.business_category}</td>
          <td>{item._id}</td>
          <td>{item.category}</td>
          <td>{item.sub_category}</td>
          <td>
            <button onClick={() => deletehandler(item._id)}>delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
}
export default ProductTable;
