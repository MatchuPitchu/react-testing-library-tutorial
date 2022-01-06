// import Testing from './exerciseOne/Testing';
import { OrderContextProvider } from './store/OrderContext';
import OrderEntry from './pages/entry/OrderEntry';
import SummaryForm from './pages/summary/SummaryForm';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <div className='app'>
      {/* <Testing /> */}
      <Container>
        <OrderContextProvider>
          <OrderEntry />
          <SummaryForm />
        </OrderContextProvider>
        {/* confirmation page does NOT need context provider */}
      </Container>
    </div>
  );
};

export default App;
