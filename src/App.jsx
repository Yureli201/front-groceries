import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navbar.jsx";
import ProductForm from "./components/ProductForm.jsx";
import ProductTable from "./components/productTable.jsx";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        <div className="row mt-3">
          <div className="col-lg-5">
            <ProductForm/>
          </div>
          <div className="col-lg-7">
            <ProductTable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
