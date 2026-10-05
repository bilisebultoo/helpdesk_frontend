import {
  Search,
  Plus,
  ArrowUpRight,
  CalendarDays,
  SlidersHorizontal,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function MyTickets() {
  const navigate = useNavigate();

  const tickets = [
    {
      id: "HD-1001",
      title: "Unable to login to my account",
      category: "Account & Authentication",
      priority: "High",
      status: "Open",
      date: "Oct 4, 2026",
    },
    {
      id: "HD-1002",
      title: "Payment was deducted twice",
      category: "Billing & Payment",
      priority: "Medium",
      status: "In Progress",
      date: "Oct 2, 2026",
    },
    {
      id: "HD-1003",
      title: "Internet connection problem",
      category: "Technical Support",
      priority: "Low",
      status: "Resolved",
      date: "Sep 29, 2026",
    },
    {
      id: "HD-1004",
      title: "Unable to update profile",
      category: "Account & Authentication",
      priority: "Medium",
      status: "Closed",
      date: "Sep 25, 2026",
    },
  ];

  return (
    <div className="tickets-page">

      {/* Header */}
      <header className="tickets-page-header">

        <div className="tickets-brand">
          <div className="tickets-brand-icon">
            🎧
          </div>

          <strong>HelpDesk</strong>
        </div>

        <button
          className="tickets-new-button"
          onClick={() => navigate("/customer/create-ticket")}
        >
          <Plus size={18} />
          New Ticket
        </button>

      </header>


      {/* Main content */}
      <main className="tickets-page-content">

        {/* Page heading */}
        <div className="tickets-page-heading">

          <div>

            <p className="page-label">
              CUSTOMER PORTAL
            </p>

            <h1>
              My Tickets
            </h1>

            <p>
              View and manage all your support requests.
            </p>

          </div>

        </div>


        {/* Search and filter */}
        <div className="tickets-controls">

          <div className="tickets-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search tickets..."
            />

          </div>


          <button className="filter-button">

            <SlidersHorizontal size={17} />

            Filter

          </button>

        </div>


        {/* Tickets */}
        <div className="my-tickets-card">

          {/* Table header */}
          <div className="tickets-table-header">

            <span>Ticket</span>

            <span>Priority</span>

            <span>Status</span>

            <span>Created</span>

            <span></span>

          </div>


          {/* Ticket rows */}
          {tickets.map((ticket) => (

            <div
              className="my-ticket-row"
              key={ticket.id}
            >

              {/* Ticket information */}
              <div className="my-ticket-info">

                <span className="ticket-id">
                  {ticket.id}
                </span>

                <h3>
                  {ticket.title}
                </h3>

                <p>
                  {ticket.category}
                </p>

              </div>


              {/* Priority */}
              <div>

                <span
                  className={`priority-badge ${ticket.priority.toLowerCase()}`}
                >
                  <span className="badge-dot"></span>

                  {ticket.priority}

                </span>

              </div>


              {/* Status */}
              <div>

                <span
                  className={`status-badge ${
                    ticket.status
                      .toLowerCase()
                      .replace(" ", "-")
                  }`}
                >
                  {ticket.status}
                </span>

              </div>


              {/* Date */}
              <div className="ticket-created-date">

                <CalendarDays size={15} />

                {ticket.date}

              </div>


              {/* Open ticket */}
              <button
                className="ticket-details-button"
                onClick={() =>
                  navigate(`/customer/tickets/${ticket.id}`)
                }
              >
                <ArrowUpRight size={18} />
              </button>

            </div>

          ))}

        </div>

      </main>

    </div>
  );
}

export default MyTickets;