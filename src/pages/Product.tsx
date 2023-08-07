import { useEffect, useState } from 'react';
import api from '../api/apiShop';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
interface ProductProps {
  category: {
    id: number;
    name: string;
  };
  description: string;
  id: number;
  images: string[];
  price: number;
  title: string;
}
const Product = () => {
  const [product, setProduct] = useState<ProductProps | null>(null);
  const { productId } = useParams<{ productId?: string }>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (productId) {
          const productData = await api.getProductId(productId);
          setProduct(productData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [productId]);
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h2>{product.title}</h2>
      <Breadcrumbs category={product.category} title={product.title} />
      <img
        src={product.images[0]}
        width={536}
        height={729}
        alt={product.title}
      />
      <div>
        <p>{product.price} $</p>
      </div>
    </>
  );
};
export default Product;
