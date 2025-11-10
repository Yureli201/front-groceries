import React from "react";

function ProductForm() {
  return (
    <div className="card p-3">
      <h3 className="card-title text-center">Registro de productos</h3>
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
              />
            </div>
          </div>
          <div className="col-auto text-center mt-4">
            <button className="btn btn-success">Guardar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
