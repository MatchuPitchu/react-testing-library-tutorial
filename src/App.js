import { useState } from 'react';
import './App.css';

const App = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const nextBtnColor = buttonColor === 'red' ? 'blue' : 'red';

  const clickHandler = () => setButtonColor(nextBtnColor);

  return (
    <div>
      <button className={`btn--${buttonColor}`} onClick={clickHandler}>
        Change to {nextBtnColor}
      </button>
    </div>
  );
};

export default App;
