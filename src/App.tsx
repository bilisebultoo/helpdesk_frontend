import AgentTicketDetails from "./pages/AgentTicketDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import CustomerDashboard from "./pages/CustomerDashboard";
import MyTickets from "./pages/MyTickets";
import AgentDashboard from "./pages/AgentDashboard";
import CreateTicket from "./pages/CreateTicket";
import TicketDetails from "./pages/TicketDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* CUSTOMER */}
        <Route
          path="/customer/dashboard"
          element={<CustomerDashboard />}
        />

        <Route
          path="/customer/tickets"
          element={<MyTickets />}
        />

        <Route
          path="/customer/create-ticket"
          element={<CreateTicket />}
        />

        <Route
          path="/customer/tickets/:id"
          element={<TicketDetails />}
        />

        {/* AGENT */}
        <Route
          path="/agent/dashboard"
          element={<AgentDashboard />}
        />
<Route
  path="/agent/tickets/:id"
  element={<AgentTicketDetails />}
/>
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;