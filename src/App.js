
import './App.css';
import { Button } from 'react-bootstrap';
import Login from './Pages/LogIn/Login';
import DefaultLayout from './Layout/DefaultLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddTicket from './Pages/NouveauTicket/AddTicket';
import ListeTicket from './Pages/ListesTickets/ListeTicket';

function App() {
  return (
    <div className="App">
    {/* <Login/> */}
    <DefaultLayout>
      {/* <Dashboard/> */}
      {/* <AddTicket/> */}
      <ListeTicket/>
    </DefaultLayout>
    </div>
  );
}

export default App;
