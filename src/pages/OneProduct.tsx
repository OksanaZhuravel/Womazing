import { useEffect, useState } from 'react';
import api from '../api/apiShop';

interface ProductProps {
  category: number;
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
}
const OneProduct = () => {
  const [product, setProduct] = useState<ProductProps | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productId = 4;
        const productData = await api.getProductId(productId);
        // console.log(productData);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>OneProduct</div>
      <div>{product.id} {product.title}</div>

    </>
  );
};
export default OneProduct;
