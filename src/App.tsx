import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";

import CustomerDashboard from "./pages/CustomerDashboard";
import MyTickets from "./pages/MyTickets";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";

import AgentDashboard from "./pages/AgentDashboard";
import AgentTicketDetails from "./pages/AgentTicketDetails";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* CUSTOMER DASHBOARD */}
        <Route
          path="/customer/dashboard"
          element={<CustomerDashboard />}
        />

        {/* CUSTOMER MY TICKETS */}
        <Route
          path="/customer/tickets"
          element={<MyTickets />}
        />

        {/* CREATE TICKET */}
        <Route
          path="/customer/create-ticket"
          element={<CreateTicket />}
        />

        {/* CUSTOMER TICKET DETAILS */}
        <Route
          path="/customer/tickets/:id"
          element={<TicketDetails />}
        />

        {/* AGENT DASHBOARD */}
        <Route
          path="/agent/dashboard"
          element={<AgentDashboard />}
        />

        {/* AGENT TICKET DETAILS */}
        <Route
          path="/agent/tickets/:id"
          element={<AgentTicketDetails />}
        />

        {/* HOME */}
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;