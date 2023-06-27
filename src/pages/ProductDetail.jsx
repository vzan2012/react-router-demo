import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Detail Page</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetailPage;
