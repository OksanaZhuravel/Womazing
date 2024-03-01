import { useEffect, useState } from 'react';
import api from '../api/apiShop';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import ProductItem from '../components/ProductItem/ProductItem';


const Category = () => {
  // const [category, setCategory] = useState< null>(null);
  // const { categoryId } = useParams<{ idCat?: string }>();
  // const parsedcategorytId = idCat ? parseInt(idCat, 10) : undefined;
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (parsedcategorytId) {
  //         const response = await api.getCategoryId(parsedcategorytId);
  //         if (response) {
  //           setCategory(response);
  //         }
  //       }

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, [productId]);
  // if (!product) {
  //   return <div className='loading'>Загрузка...</div>;
  // }
  // console.log(product);


  return (
    <>
      <section className='product'>
        <div className="product__container">
          <h2>Cat</h2>
          {/* <h2 className='product__title title-big'>{product.title}</h2> */}
          {/* <Breadcrumbs categories={product.categories} title={product.title} className='product__breadcrumbs' />
          <ProductItem item={product} /> */}

        </div>
      </section>
    </>
  );
};
export default Category;

