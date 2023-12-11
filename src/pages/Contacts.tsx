// import { useDispatch } from 'react-redux';
import Contact from '../components/Contact/Contact';
import Title from '../components/Title/Title';
// import { fetchAllProducts } from '../store/product';
// import { unwrapResult } from '@reduxjs/toolkit';
// import { AppDispatch } from '../store/store';
const Contacts = () => {

  // const dispatch: AppDispatch = useDispatch();
  // const handleAddProduct = async () => {
  //   try {
  //     const resultAction = await dispatch(fetchAllProducts());
  //     const result = unwrapResult(resultAction);
  //     console.log(result);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <Title title='Контакты' activeTitle='Контакты' activeLink='/contacts' />
      <Contact />
      {/* <button
        className='button'
        onClick={handleAddProduct}
      >
        Add Product
      </button> */}

    </>
  );
};
export default Contacts;
