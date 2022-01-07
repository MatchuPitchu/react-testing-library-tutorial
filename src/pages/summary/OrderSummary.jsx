import { useOrderContext } from '../../store/OrderContext';
import SummaryForm from './SummaryForm';

const OrderSummary = ({ setOrderPhase }) => {
  const { optionCounts, totals } = useOrderContext();

  const scoopArray = Array.from(optionCounts.scoops.entries());
  const scoopList = scoopArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingsArray = Array.from(optionCounts.toppings.keys());
  const toppingList = toppingsArray.map((key) => <li key={key}>{key}</li>);

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {totals.scoops}</h2>
      <ul>{scoopList}</ul>
      <h2>Toppings: {totals.toppings}</h2>
      <ul>{toppingList}</ul>
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
};

export default OrderSummary;
