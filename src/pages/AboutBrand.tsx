import About from '../components/About/About';
import Title from '../components/Title/Title';

const AboutBrand = () => {
  return (
    <>
      <Title title='О бренде' activeTitle='О бренде' activeLink='/about' />
      <About />
    </>
  );
};
export default AboutBrand;
