import {
  Ticket,
  Clock3,
  CheckCircle2,
  AlertCircle,
  Search,
  Bell,
  ChevronDown,
  Filter,
  ArrowUpRight,
  X,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AgentDashboard() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const tickets = [
    {
      id: "HD-1001",
      title: "Unable to login to my account",
      customer: "Abebe Kebede",
      category: "Account & Authentication",
      priority: "High",
      status: "Open",
      date: "Oct 4, 2026",
    },
    {
      id: "HD-1002",
      title: "Payment was deducted twice",
      customer: "Sara Ahmed",
      category: "Billing & Payment",
      priority: "Medium",
      status: "In Progress",
      date: "Oct 2, 2026",
    },
    {
      id: "HD-1003",
      title: "Internet connection problem",
      customer: "Dawit Tesfaye",
      category: "Technical Support",
      priority: "Low",
      status: "Resolved",
      date: "Sep 29, 2026",
    },
    {
      id: "HD-1004",
      title: "Unable to update profile",
      customer: "Marta Bekele",
      category: "Account & Authentication",
      priority: "Medium",
      status: "Closed",
      date: "Sep 25, 2026",
    },
    {
      id: "HD-1005",
      title: "Application keeps crashing",
      customer: "Yonas Alemu",
      category: "Technical Support",
      priority: "High",
      status: "Open",
      date: "Sep 23, 2026",
    },
  ];

  const filteredTickets = tickets.filter((ticket) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      ticket.id.toLowerCase().includes(searchText) ||
      ticket.title.toLowerCase().includes(searchText) ||
      ticket.customer.toLowerCase().includes(searchText) ||
      ticket.category.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      ticket.status === statusFilter;

    const matchesPriority =
      priorityFilter === "All" ||
      ticket.priority === priorityFilter;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority
    );
  });

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("All");
    setPriorityFilter("All");
  };

  const hasFilters =
    search !== "" ||
    statusFilter !== "All" ||
    priorityFilter !== "All";

  return (
    <div className="agent-dashboard-layout">

      {/* SIDEBAR */}
      <aside className="agent-sidebar">
        <div className="agent-sidebar-logo">
          <div className="agent-logo-icon">🎧</div>
          <span>HelpDesk</span>
        </div>

        <nav className="agent-sidebar-nav">
          <p className="agent-nav-title">
            MAIN MENU
          </p>

          <button className="agent-nav-link active">
            <Ticket size={19} />
            <span>Dashboard</span>
          </button>

          <button className="agent-nav-link">
            <Ticket size={19} />
            <span>All Tickets</span>
          </button>

          <p className="agent-nav-title agent-account-title">
            ACCOUNT
          </p>

          <button className="agent-nav-link">
            <span>⚙️</span>
            <span>Settings</span>
          </button>
        </nav>

        <button className="agent-logout">
          <span>↪</span>
          <span>Logout</span>
        </button>
      </aside>

      {/* MAIN */}
      <main className="agent-dashboard-main">

        {/* TOPBAR */}
        <header className="agent-topbar">

          <div className="agent-search">
            <Search size={18} />

            <input
              type="text"
              placeholder="Search tickets, customers..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>

          <div className="agent-topbar-right">

            <button className="agent-notification">
              <Bell size={20} />
              <span></span>
            </button>

            <div className="agent-profile">

              <div className="agent-avatar">
                A
              </div>

              <div className="agent-profile-info">
                <strong>Support Agent</strong>
                <small>Agent</small>
              </div>

              <ChevronDown size={17} />

            </div>
          </div>

        </header>

        {/* CONTENT */}
        <div className="agent-dashboard-content">

          {/* WELCOME */}
          <section className="agent-welcome">

            <div>
              <p className="agent-page-label">
                SUPPORT PORTAL
              </p>

              <h1>
                Good evening, Support Agent 👋
              </h1>

              <p>
                Here's an overview of your
                support workload.
              </p>
            </div>

          </section>

          {/* STATISTICS */}
          <section className="agent-stats-grid">

            <div className="agent-stat-card">

              <div className="agent-stat-icon">
                <Ticket size={21} />
              </div>

              <div className="agent-stat-value">
                24
              </div>

              <div className="agent-stat-title">
                Total Tickets
              </div>

              <div className="agent-stat-description">
                All customer requests
              </div>

            </div>

            <div className="agent-stat-card">

              <div className="agent-stat-icon">
                <Clock3 size={21} />
              </div>

              <div className="agent-stat-value">
                8
              </div>

              <div className="agent-stat-title">
                Open Tickets
              </div>

              <div className="agent-stat-description">
                Waiting for response
              </div>

            </div>

            <div className="agent-stat-card">

              <div className="agent-stat-icon">
                <AlertCircle size={21} />
              </div>

              <div className="agent-stat-value">
                4
              </div>

              <div className="agent-stat-title">
                High Priority
              </div>

              <div className="agent-stat-description">
                Need attention
              </div>

            </div>

            <div className="agent-stat-card">

              <div className="agent-stat-icon">
                <CheckCircle2 size={21} />
              </div>

              <div className="agent-stat-value">
                12
              </div>

              <div className="agent-stat-title">
                Resolved
              </div>

              <div className="agent-stat-description">
                Successfully completed
              </div>

            </div>

          </section>

          {/* ALL TICKETS */}
          <section className="agent-tickets-section">

            <div className="agent-section-header">

              <div>
                <h2>All Tickets</h2>

                <p>
                  Manage customer support requests.
                </p>
              </div>

              <strong>
                {filteredTickets.length} tickets
              </strong>

            </div>

            {/* FILTER CONTROLS */}
            <div className="agent-ticket-controls">

              <div className="agent-ticket-search">

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

              {/* STATUS */}
              <div className="agent-select-wrapper">

                <Filter size={16} />

                <select
                  value={statusFilter}
                  onChange={(e) =>
                    setStatusFilter(e.target.value)
                  }
                >
                  <option value="All">
                    All Status
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

              {/* PRIORITY */}
              <div className="agent-select-wrapper">

                <Filter size={16} />

                <select
                  value={priorityFilter}
                  onChange={(e) =>
                    setPriorityFilter(e.target.value)
                  }
                >
                  <option value="All">
                    All Priority
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

              {/* RESET */}
              {hasFilters && (
                <button
                  className="agent-reset-button"
                  onClick={resetFilters}
                >
                  <X size={16} />
                  Reset
                </button>
              )}

            </div>

            {/* TABLE */}
            <div className="agent-ticket-card">

              <div className="agent-ticket-header-row">
                <span>Ticket</span>
                <span>Customer</span>
                <span>Priority</span>
                <span>Status</span>
                <span>Created</span>
                <span></span>
              </div>

              {filteredTickets.length > 0 ? (

                filteredTickets.map((ticket) => (

                  <div
                    className="agent-ticket-row"
                    key={ticket.id}
                  >

                    <div className="agent-ticket-info">

                      <span className="agent-ticket-id">
                        {ticket.id}
                      </span>

                      <h3>
                        {ticket.title}
                      </h3>

                      <p>
                        {ticket.category}
                      </p>

                    </div>

                    <div className="agent-customer">

                      <div className="small-customer-avatar">
                        {ticket.customer.charAt(0)}
                      </div>

                      <span>
                        {ticket.customer}
                      </span>

                    </div>

                    <div>

                      <span
                        className={`priority-badge ${ticket.priority.toLowerCase()}`}
                      >
                        <span className="badge-dot"></span>
                        {ticket.priority}
                      </span>

                    </div>

                    <div>

                      <span
                        className={`status-badge ${ticket.status
                          .toLowerCase()
                          .replace(" ", "-")}`}
                      >
                        {ticket.status}
                      </span>

                    </div>

                    <div className="agent-ticket-date">
                      {ticket.date}
                    </div>

                    <button
                      className="agent-ticket-open"
                      onClick={() =>
                        navigate(
                          `/agent/tickets/${ticket.id}`
                        )
                      }
                    >
                      <ArrowUpRight size={18} />
                    </button>

                  </div>

                ))

              ) : (

                <div className="agent-empty-state">

                  <div className="agent-empty-icon">
                    <Search size={25} />
                  </div>

                  <h3>
                    No tickets found
                  </h3>

                  <p>
                    Try changing your search
                    or filters.
                  </p>

                  <button
                    onClick={resetFilters}
                  >
                    Clear filters
                  </button>

                </div>

              )}

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default AgentDashboard;