// import { useDispatch, useSelector } from 'react-redux';
import Contact from '../components/Contact/Contact';
import Title from '../components/Title/Title';
// import { decrement, increment, incrementByAmount, selectCount } from '../store/cout';
// import { useState } from 'react';


const Contacts = () => {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  // const [incrementAmount, setIncrementAmount] = useState('1');
  return (
    <>
      <Title title='Контакты' activeTitle='Контакты' activeLink='/contacts' />
      <Contact />
      {/* <div>
        <div >
          <button
            className='button'
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <span className='title-big'>{count}</span>
          <button
            className='button'
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        <div >
          <input
            className='form__input'
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
          />
          <button
            className='button'
            onClick={() =>
              dispatch(incrementByAmount(Number(incrementAmount) || 0))
            }
          >
            Add Amount
          </button>

        </div>
      </div> */}
    </>
  );
};
export default Contacts;
