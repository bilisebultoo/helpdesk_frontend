import {
  LayoutDashboard,
  Ticket,
  PlusCircle,
  Settings,
  LogOut,
  Headphones,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="dashboard-sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          <Headphones size={21} />
        </div>

        <span>HelpDesk</span>
      </div>


      {/* Navigation */}
      <nav className="sidebar-nav">

        <p className="sidebar-section-title">
          MAIN MENU
        </p>

        <a
          href="/customer/dashboard"
          className="sidebar-link active"
        >
          <LayoutDashboard size={19} />
          <span>Dashboard</span>
        </a>

        <a
          href="#tickets"
          className="sidebar-link"
        >
          <Ticket size={19} />
          <span>My Tickets</span>
        </a>

        <a
          href="#create-ticket"
          className="sidebar-link"
        >
          <PlusCircle size={19} />
          <span>New Ticket</span>
        </a>


        <p className="sidebar-section-title settings-title">
          ACCOUNT
        </p>

        <a
          href="#settings"
          className="sidebar-link"
        >
          <Settings size={19} />
          <span>Settings</span>
        </a>

      </nav>


      {/* Bottom */}
      <div className="sidebar-bottom">

        <button className="sidebar-logout">
          <LogOut size={19} />
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;