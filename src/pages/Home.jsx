import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Access the <a href="/products">Products</a> page.
      </p>
      <p>
        Using the Link <Link to="/products">Products</Link> page.
      </p>
    </>
  );
};

export default HomePage;
