import { useEffect, useState } from "react";
import ProductServices from "../services/ProductServices";
import React from "react";

function ProductTable() {

  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await ProductServices.getAll();
    setProducts(response.data.data);
    //console.log(products);
  }

  useEffect(() => {
    loadProducts();
  }, []);  
  return (
    <div className="card py-3 ">
      <h3 className="card-title text-center">Listado de productos</h3>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">C. de barras</th>
              <th scope="col">Descripción</th>
              <th scope="col">Marca</th>
              <th scope="col">Precio</th>
              <th scope="col">Inventario</th>
              <th colSpan="2" scope="col">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>

          { products.map( product => (
            <tr key={product.barcode}>
              <th scope="row">{product.barcode}</th>
              <td>{product.description}</td>
              <td>{product.brand}</td>
              <td>{product.price}</td>
              <td>{product.cost}</td>
              <td>
                <button className="btn btn-warning btn-sm">Editar</button>
              </td>
              <td>
                <button className="btn btn-danger btn-sm">Eliminar</button>
              </td>
            </tr>
          ))} 

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductTable;
