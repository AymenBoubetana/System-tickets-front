import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/LogIn/Login';
import DefaultLayout from './Layout/DefaultLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import AddTicket from './Pages/NouveauTicket/AddTicket';
import ListeTicket from './Pages/ListesTickets/ListeTicket';
import Ticket from './Pages/TicketDetails/Ticket';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route element={<DefaultLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-ticket" element={<AddTicket />} />
            <Route path="/tickets" element={<ListeTicket />} />
            <Route path="/ticket/:tid" element={<Ticket />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
