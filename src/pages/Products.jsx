import { Link } from "react-router-dom";

const ProductsPage = () => {
  return (
    <>
      <h1>Products Page</h1>
      <p>
        Back to the <Link to="/">Home</Link>
      </p>
    </>
  );
};

export default ProductsPage;
