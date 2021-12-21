import { useState } from 'react';
import './App.css';

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
