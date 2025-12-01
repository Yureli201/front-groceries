import ProductServices from "../services/ProductServices";
import { useState, useEffect } from "react";

function ModalEditProduct({ barcode, onProductUpdated }) {
  const [product, setProduct] = useState({
    barcode: "",
    description: "",
    brand: "",
    category: "",
    cost: "",
    price: "",
    stock: "",
    expiredDate: ""
  });

  const loadProduct = async (barcode) => {
    if (!barcode) return;
    
    try {
      console.log("Cargando producto con barcode:", barcode);
      const response = await ProductServices.getOne(barcode);
      setProduct(response.data.data);
    } catch (error) {
      console.error("Error al cargar el producto:", error);
    }
  };

  useEffect(() => {
    loadProduct(barcode);
  }, [barcode]);

  const productChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    
    try {
      const response = await ProductServices.updateOne(product.barcode, product);
      console.log("Producto actualizado:", response);
      
      // Recargar la página para cerrar el modal y actualizar la lista
      window.location.reload();
      
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
      alert("Error al actualizar el producto. Por favor, intenta de nuevo.");
    }
  };

  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div class="modal-content p-3">
                <h3 className="card-title text-center">Edición de producto:</h3>
                <div className="card-body">
                    <form>
                    <div className="row">
                        <div className="col-lg-6">
                        <label htmlFor="txtBarcode" className="form-label">
                            Código de barras
                        </label>
                        <input
                            type="text"
                            name="barcode"
                            id="txtBarcode"
                            className="form-control"
                            value={product.barcode}
                            onChange={productChange}
                            disabled
                        />
                        </div>

                        <div className="col-lg-6">
                        <label htmlFor="txtDescription" className="form-label">
                            Descripción
                        </label>
                        <input
                            type="text"
                            name="description"
                            id="txtDescription"
                            className="form-control"
                            value={product.description}
                            onChange={productChange}
                        />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                        <label htmlFor="txtBrand" className="form-label">
                            Marca
                        </label>
                        <input
                            type="text"
                            name="brand"
                            id="txtBrand"
                            className="form-control"
                            value={product.brand}
                            onChange={productChange}
                        />
                        </div>
                        <div className="col-lg-6">
                        <label htmlFor="txtCategory" className="form-label">
                            Categoría
                        </label>
                        <input
                            type="text"
                            name="category"
                            id="txtCategory"
                            className="form-control"
                            value={product.category}
                            onChange={productChange}
                        />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                        <label htmlFor="txtCost" className="form-label">
                            Costo
                        </label>
                        <input
                            type="number"
                            name="cost"
                            id="txtCost"
                            className="form-control"
                            value={product.cost}
                            onChange={productChange}
                        />
                        </div>
                        <div className="col-lg-6">
                        <label htmlFor="txtPrice" className="form-label">
                            Precio
                        </label>
                        <input
                            type="number"
                            name="price"
                            id="txtPrice"
                            className="form-control"
                            value={product.price}
                            onChange={productChange}
                        />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                        <label htmlFor="txtStock" className="form-label">
                            Inventario
                        </label>
                        <input
                            type="number"
                            name="stock"
                            id="txtStock"
                            className="form-control"
                            value={product.stock}
                            onChange={productChange}
                        />
                        </div>
                        <div className="col-lg-6">
                        <label htmlFor="txtExpiredDate" className="form-label">
                            Fecha de caducidad
                        </label>
                        <input
                            type="date"
                            name="expiredDate"
                            id="txtExpiredDate"
                            className="form-control"
                            value={product.expiredDate}
                            onChange={productChange}
                        />
                        </div>
                    </div>
                    <div className="col-auto text-center mt-4">
                        <button type="submit" className="btn btn-success" onClick={saveProduct}>
                        Guardar cambios
                        </button>
                    </div>
                    </form>
                </div>
            
            </div>
        </div>
    </div>
  );
}

export default ModalEditProduct;
