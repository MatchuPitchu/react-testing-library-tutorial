import { useState } from 'react';
import './App.css';

export const replaceCamelWithSpaces = (colorName) => {
  // regex tells if you find capital letter ([A-Z]) in a word (\B ...\B), even if you find it multiple times (/g)
  // replace it with the letter you found ($1) proceeded by a space
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
};

const App = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const [isChecked, setIsChecked] = useState(false);

  const nextBtnColor = buttonColor === 'red' ? 'blue' : 'red';

  const clickHandler = () => setButtonColor(nextBtnColor);
  const changeCheckboxHandler = () => setIsChecked((prev) => !prev);

  return (
    <div>
      <button
        className={`btn--${isChecked ? 'gray' : buttonColor}`}
        onClick={clickHandler}
        disabled={isChecked}
      >
        Change to {nextBtnColor}
      </button>
      <input
        type='checkbox'
        id='disable-button-checkbox'
        value={isChecked}
        aria-checked={isChecked}
        onChange={changeCheckboxHandler}
      />
      <label htmlFor='disable-button-checkbox'>Disable button</label>
    </div>
  );
};

export default App;
