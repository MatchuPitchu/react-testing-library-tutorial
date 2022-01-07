import Options from './Options';
import { useOrderContext } from '../../store/OrderContext';

const OrderEntry = () => {
  const [orderDetails] = useOrderContext();

  return (
    <div>
      <h1>Design Your Sundae</h1>
      <Options optionType='scoops' />
      <Options optionType='toppings' />
      <h2>Grand total: {orderDetails.totals.grandTotal}</h2>
    </div>
  );
};

export default OrderEntry;
