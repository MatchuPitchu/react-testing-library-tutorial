import { useOrderContext } from '../../store/OrderContext';
import { Button } from 'react-bootstrap';
import Options from './Options';

const OrderEntry = ({ setOrderPhase }) => {
  const { totals } = useOrderContext();

  return (
    <div>
      <h1>Design Your Sundae</h1>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand total: {totals.grandTotal}</h2>
      <Button onClick={() => setOrderPhase('review')}>Order Sundae</Button>
    </div>
  );
};

export default OrderEntry;
