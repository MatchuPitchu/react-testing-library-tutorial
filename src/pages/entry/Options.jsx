import { useState, useEffect } from 'react';
import { useOrderContext } from '../../store/OrderContext';
import { pricePerItem } from '../../constants/index';
import Row from 'react-bootstrap/Row';
import ScoopOption from './ScoopOption';
import ToppingOption from './ToppingOption';
import AlertBanner from '../components/AlertBanner';

// optionType is 'scoops' or 'toppings'
const Options = ({ optionType }) => {
  const [orderDetails, updateItemCount] = useOrderContext();

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

  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const optionItems = items.map(({ name, imagePath }) => (
    <ItemComponent
      key={name}
      name={name}
      imagePath={imagePath}
      updateItemCount={(itemName, newItemCount) =>
        updateItemCount(itemName, newItemCount, optionType)
      }
    />
  ));

  return (
    <>
      <h2>{title}</h2>
      <p>{pricePerItem[optionType]} each</p>
      <p>
        {title} total: {orderDetails.totals[optionType]}
      </p>
      <Row>{optionItems}</Row>;
    </>
  );
};

export default Options;
