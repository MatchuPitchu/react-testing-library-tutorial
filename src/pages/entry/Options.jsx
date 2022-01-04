import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import { AlertBanner } from '../components/AlertBanner';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';

// optionType is 'scoops' or 'toppings'
const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(`http://localhost:3030/${optionType}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    fetching();
  }, [optionType]);

  if (error) {
    return <AlertBanner />;
  }

  const ItemComponent = optionType === 'scoops' ? ScoopOption : ToppingOption;
  const optionItems = items.map(({ name, imagePath }) => (
    <ItemComponent key={name} name={name} imagePath={imagePath} />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
