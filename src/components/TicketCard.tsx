import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

interface TicketCardProps {
  id: string;
  title: string;
  category: string;
  priority: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  date: string;
}

function TicketCard({
  id,
  title,
  category,
  priority,
  status,
  date,
}: TicketCardProps) {
  const navigate = useNavigate();

  const priorityClass = priority.toLowerCase();

  const statusClass = status
    .toLowerCase()
    .replace(" ", "-");

  const handleOpenTicket = () => {
    navigate(`/customer/tickets/${id}`);
  };

  return (
    <div className="ticket-card">
      <div className="ticket-main">
        <div className="ticket-title-row">
          <h3>{title}</h3>

          <button
            type="button"
            className="ticket-open-button"
            onClick={handleOpenTicket}
            aria-label="Open ticket"
          >
            <ArrowUpRight size={17} />
          </button>
        </div>

        <p className="ticket-category">
          {category}
        </p>
      </div>

      <div className="ticket-column">
        <span className="ticket-label">
          Priority
        </span>

        <span
          className={`priority-badge ${priorityClass}`}
        >
          <span className="badge-dot"></span>
          {priority}
        </span>
      </div>

      <div className="ticket-column">
        <span className="ticket-label">
          Status
        </span>

        <span
          className={`status-badge ${statusClass}`}
        >
          {status}
        </span>
      </div>

      <div className="ticket-column ticket-date">
        <span className="ticket-label">
          Created
        </span>

        <span className="date-value">
          <CalendarDays size={15} />
          {date}
        </span>
      </div>
    </div>
  );
}

export default TicketCard;