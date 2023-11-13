import { useEffect, useState } from 'react';
import api from '../api/apiShop';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import ProductItem from '../components/ProductItem/ProductItem';

import ProductPromo from '../components/ProductPromo/ProductPromo';
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
      <section className='product'>
        <div className="product__container">
          <h2 className='product__title title-big'>{product.title}</h2>
          <Breadcrumbs category={product.category} title={product.title} className='product__breadcrumbs' />
          <ProductItem item={product} />
          <ProductPromo subtitle="Связанные товары" className='related' limit={2} />
        </div>
      </section>
    </>
  );
};
export default Product;
