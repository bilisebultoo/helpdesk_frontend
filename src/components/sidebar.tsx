import {
  LayoutDashboard,
  Ticket,
  PlusCircle,
  Settings,
  LogOut,
  Headphones,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard =
    location.pathname === "/customer/dashboard";

  const isTickets =
    location.pathname === "/customer/tickets";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside className="dashboard-sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">

        <div className="sidebar-logo-icon">
          <Headphones size={21} />
        </div>

        <span>HelpDesk</span>

      </div>

      {/* NAVIGATION */}
      <nav className="sidebar-nav">

        <p className="sidebar-section-title">
          MAIN MENU
        </p>

        {/* DASHBOARD */}
        <button
          type="button"
          className={`sidebar-link ${
            isDashboard ? "active" : ""
          }`}
          onClick={() =>
            navigate("/customer/dashboard")
          }
        >
          <LayoutDashboard size={19} />

          <span>
            Dashboard
          </span>
        </button>

        {/* MY TICKETS */}
        <button
          type="button"
          className={`sidebar-link ${
            isTickets ? "active" : ""
          }`}
          onClick={() =>
            navigate("/customer/tickets")
          }
        >
          <Ticket size={19} />

          <span>
            My Tickets
          </span>
        </button>

        {/* NEW TICKET */}
        <button
          type="button"
          className="sidebar-link"
          onClick={() =>
            navigate("/customer/create-ticket")
          }
        >
          <PlusCircle size={19} />

          <span>
            New Ticket
          </span>
        </button>

        {/* ACCOUNT */}
        <p className="sidebar-section-title settings-title">
          ACCOUNT
        </p>

        {/* SETTINGS */}
        <button
          type="button"
          className="sidebar-link"
          onClick={() =>
            alert(
              "Settings page will be added later."
            )
          }
        >
          <Settings size={19} />

          <span>
            Settings
          </span>
        </button>

      </nav>

      {/* LOGOUT */}
      <div className="sidebar-bottom">

        <button
          type="button"
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <LogOut size={19} />

          <span>
            Logout
          </span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;