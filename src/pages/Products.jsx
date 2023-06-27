import { Link } from "react-router-dom";

const PRODUCTS = [
  { id: "p1", title: "Product-1" },
  { id: "p2", title: "Product-2" },
  { id: "p3", title: "Product-3" },
  { id: "p4", title: "Product-4" },
  { id: "p5", title: "Product-5" },
  { id: "p6", title: "Product-6" },
];

const ProductsPage = () => {
  return (
    <>
      <h1>Products Page</h1>
      <p>
        Back to the <Link to="/">Home</Link>
      </p>
      <p>
        <ul>
          {PRODUCTS.map((prodItem) => (
            <li key={prodItem.id}>
              <Link to={`/products/${prodItem.id}`}>{prodItem.title}</Link>
            </li>
          ))}
        </ul>
      </p>
    </>
  );
};

export default ProductsPage;
