import Contact from '../components/Contact/Contact';
import Title from '../components/Title/Title';


const Contacts = () => {

  return (
    <>
      <Title title='Контакты' activeTitle='Контакты' activeLink='/contacts' />
      <Contact />
    </>
  );
};
export default Contacts;
