import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';

// optionType is 'scoops' or 'toppings'
const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch(`http://localhost:3030/${optionType}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetching();
  }, [optionType]);

  const ItemComponent = optionType === 'scoops' ? ScoopOption : null;
  const optionItems = items.map(({ name, imagePath }) => (
    <ItemComponent key={name} name={name} imagePath={imagePath} />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
