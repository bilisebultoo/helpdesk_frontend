import {
  Ticket,
  Clock3,
  CheckCircle2,
  Plus,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Sidebar from "../components/sidebar";
import StatCard from "../components/StatCard";
import TicketCard from "../components/TicketCard";

function CustomerDashboard() {
  const navigate = useNavigate();

  const tickets = [
    {
      id: "HD-1001",
      title: "Unable to login to my account",
      category: "Account & Authentication",
      priority: "High" as const,
      status: "Open" as const,
      date: "Oct 4, 2026",
    },
    {
      id: "HD-1002",
      title: "Payment was deducted twice",
      category: "Billing & Payment",
      priority: "Medium" as const,
      status: "In Progress" as const,
      date: "Oct 2, 2026",
    },
    {
      id: "HD-1003",
      title: "Internet connection problem",
      category: "Technical Support",
      priority: "Low" as const,
      status: "Resolved" as const,
      date: "Sep 29, 2026",
    },
    {
      id: "HD-1004",
      title: "Unable to update profile",
      category: "Account & Authentication",
      priority: "Medium" as const,
      status: "Closed" as const,
      date: "Sep 25, 2026",
    },
  ];

  return (
    <div className="dashboard-layout">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="dashboard-main">

        {/* TOP BAR */}
        <header className="dashboard-topbar">

          <div className="mobile-menu-button">
            ☰
          </div>

          <div className="topbar-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search tickets..."
            />
          </div>

          <div className="topbar-right">

            <button
              type="button"
              className="notification-button"
            >
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>

            <div className="user-profile">

              <div className="user-avatar">
                B
              </div>

              <div className="user-info">
                <strong>Biliise</strong>
                <span>Customer</span>
              </div>

              <ChevronDown size={17} />

            </div>

          </div>

        </header>

        {/* DASHBOARD CONTENT */}
        <div className="dashboard-content">

          {/* WELCOME */}
          <section className="welcome-section">

            <div>
              <p className="welcome-small">
                CUSTOMER PORTAL
              </p>

              <h1>
                Good evening, Biliise 👋
              </h1>

              <p>
                Here's an overview of your support requests.
              </p>
            </div>

            <button
              type="button"
              className="create-ticket-button"
              onClick={() =>
                navigate("/customer/create-ticket")
              }
            >
              <Plus size={19} />
              Create ticket
            </button>

          </section>

          {/* STATISTICS */}
          <section className="stats-grid">

            <StatCard
              title="Total Tickets"
              value={8}
              icon={Ticket}
              description="All your support requests"
            />

            <StatCard
              title="Open Tickets"
              value={3}
              icon={Clock3}
              description="Waiting for resolution"
            />

            <StatCard
              title="Resolved"
              value={4}
              icon={CheckCircle2}
              description="Successfully resolved"
            />

          </section>

          {/* RECENT TICKETS */}
          <section
            className="tickets-section"
            id="tickets"
          >

            <div className="section-header">

              <div>
                <h2>Recent tickets</h2>

                <p>
                  Your latest support requests
                </p>
              </div>

              <button
                type="button"
                className="view-all-button"
                onClick={() =>
                  navigate("/customer/tickets")
                }
              >
                View all
              </button>

            </div>

            {/* TICKET LIST */}
            <div className="ticket-list">

              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  id={ticket.id}
                  title={ticket.title}
                  category={ticket.category}
                  priority={ticket.priority}
                  status={ticket.status}
                  date={ticket.date}
                />
              ))}

            </div>

          </section>

        </div>

      </main>
    </div>
  );
}

export default CustomerDashboard;