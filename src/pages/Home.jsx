import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  // Example Navigate Handler - programmatic
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>Home Page</h1>
      <p>
        Access the <a href="products">Products</a> page.
      </p>
      <p>
        Using the Link <Link to="products">Products</Link> page.
      </p>
      <button onClick={navigateHandler}>Navigate Products</button>
    </>
  );
};

export default HomePage;
