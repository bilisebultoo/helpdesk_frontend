import { useState } from "react";
import {
  Search,
  Plus,
  ArrowUpRight,
  CalendarDays,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

function MyTickets() {
  const navigate = useNavigate();

  // Ticket data
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

  // Search
  const [search, setSearch] = useState("");

  // Show/hide filter menu
  const [showFilters, setShowFilters] = useState(false);

  // Filter values
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");

  // Open ticket
  const openTicket = (id: string) => {
    navigate(`/customer/tickets/${id}`);
  };

  // Clear all filters
  const clearFilters = () => {
    setSearch("");
    setPriorityFilter("All");
    setStatusFilter("All");
    setCategoryFilter("All");
  };

  // Filter tickets
  const filteredTickets = tickets.filter((ticket) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      ticket.id.toLowerCase().includes(searchText) ||
      ticket.title.toLowerCase().includes(searchText) ||
      ticket.category.toLowerCase().includes(searchText);

    const matchesPriority =
      priorityFilter === "All" ||
      ticket.priority === priorityFilter;

    const matchesStatus =
      statusFilter === "All" ||
      ticket.status === statusFilter;

    const matchesCategory =
      categoryFilter === "All" ||
      ticket.category === categoryFilter;

    return (
      matchesSearch &&
      matchesPriority &&
      matchesStatus &&
      matchesCategory
    );
  });

  return (
    <div className="tickets-page">

      {/* HEADER */}
      <header className="tickets-page-header">

        <div className="tickets-brand">
          <div className="tickets-brand-icon">
            🎧
          </div>

          <strong>HelpDesk</strong>
        </div>

        <button
          type="button"
          className="tickets-new-button"
          onClick={() =>
            navigate("/customer/create-ticket")
          }
        >
          <Plus size={18} />
          New Ticket
        </button>

      </header>


      {/* MAIN CONTENT */}
      <main className="tickets-page-content">

        {/* PAGE TITLE */}
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


        {/* SEARCH + FILTER */}
        <div className="tickets-controls">

          {/* SEARCH */}
          <div className="tickets-search">

            <Search size={18} />

            <input
              type="text"
              placeholder="Search tickets..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          {/* FILTER BUTTON */}
          <button
            type="button"
            className="filter-button"
            onClick={() =>
              setShowFilters(!showFilters)
            }
          >
            {showFilters ? (
              <X size={17} />
            ) : (
              <SlidersHorizontal size={17} />
            )}

            {showFilters ? "Close" : "Filter"}
          </button>

        </div>


        {/* FILTER PANEL */}
        {showFilters && (
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
              alignItems: "end",
              padding: "18px",
              marginBottom: "20px",
              background: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
            }}
          >

            {/* PRIORITY */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Priority
              </label>

              <select
                value={priorityFilter}
                onChange={(e) =>
                  setPriorityFilter(e.target.value)
                }
                style={{
                  padding: "9px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  minWidth: "140px",
                }}
              >
                <option value="All">
                  All Priorities
                </option>

                <option value="High">
                  High
                </option>

                <option value="Medium">
                  Medium
                </option>

                <option value="Low">
                  Low
                </option>
              </select>
            </div>


            {/* STATUS */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Status
              </label>

              <select
                value={statusFilter}
                onChange={(e) =>
                  setStatusFilter(e.target.value)
                }
                style={{
                  padding: "9px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  minWidth: "140px",
                }}
              >
                <option value="All">
                  All Statuses
                </option>

                <option value="Open">
                  Open
                </option>

                <option value="In Progress">
                  In Progress
                </option>

                <option value="Resolved">
                  Resolved
                </option>

                <option value="Closed">
                  Closed
                </option>
              </select>
            </div>


            {/* CATEGORY */}
            <div>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                Category
              </label>

              <select
                value={categoryFilter}
                onChange={(e) =>
                  setCategoryFilter(e.target.value)
                }
                style={{
                  padding: "9px 12px",
                  border: "1px solid #d1d5db",
                  borderRadius: "6px",
                  minWidth: "190px",
                }}
              >
                <option value="All">
                  All Categories
                </option>

                <option value="Account & Authentication">
                  Account & Authentication
                </option>

                <option value="Billing & Payment">
                  Billing & Payment
                </option>

                <option value="Technical Support">
                  Technical Support
                </option>
              </select>
            </div>


            {/* CLEAR */}
            <button
              type="button"
              onClick={clearFilters}
              style={{
                padding: "9px 15px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                background: "#ffffff",
                cursor: "pointer",
              }}
            >
              Clear Filters
            </button>

          </div>
        )}


        {/* RESULT COUNT */}
        <div
          style={{
            marginBottom: "12px",
            fontSize: "14px",
            color: "#6b7280",
          }}
        >
          Showing {filteredTickets.length} of {tickets.length} tickets
        </div>


        {/* TICKETS TABLE */}
        <div className="my-tickets-card">

          <div className="tickets-table-header">
            <span>Ticket</span>
            <span>Priority</span>
            <span>Status</span>
            <span>Created</span>
            <span></span>
          </div>


          {/* FILTERED TICKETS */}
          {filteredTickets.length > 0 ? (

            filteredTickets.map((ticket) => (

              <div
                className="my-ticket-row"
                key={ticket.id}
              >

                {/* TICKET */}
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


                {/* PRIORITY */}
                <div>

                  <span
                    className={`priority-badge ${ticket.priority.toLowerCase()}`}
                  >

                    <span className="badge-dot"></span>

                    {ticket.priority}

                  </span>

                </div>


                {/* STATUS */}
                <div>

                  <span
                    className={`status-badge ${ticket.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {ticket.status}
                  </span>

                </div>


                {/* DATE */}
                <div className="ticket-created-date">

                  <CalendarDays size={15} />

                  {ticket.date}

                </div>


                {/* OPEN TICKET */}
                <button
                  type="button"
                  className="ticket-details-button"
                  onClick={() =>
                    openTicket(ticket.id)
                  }
                  aria-label={`Open ${ticket.id}`}
                >
                  <ArrowUpRight size={18} />
                </button>

              </div>

            ))

          ) : (

            /* NO RESULTS */
            <div
              style={{
                padding: "50px 20px",
                textAlign: "center",
                color: "#6b7280",
              }}
            >
              <h3>
                No tickets found
              </h3>

              <p>
                Try changing your search or filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                style={{
                  marginTop: "12px",
                  padding: "9px 16px",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Clear Filters
              </button>

            </div>

          )}

        </div>

      </main>

    </div>
  );
}

export default MyTickets;