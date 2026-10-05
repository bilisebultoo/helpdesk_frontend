import {
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";

interface TicketCardProps {
  title: string;
  category: string;
  priority: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  date: string;
}

function TicketCard({
  title,
  category,
  priority,
  status,
  date,
}: TicketCardProps) {

  const priorityClass =
    priority.toLowerCase();

  const statusClass =
    status.toLowerCase().replace(" ", "-");

  return (
    <div className="ticket-card">

      {/* Ticket information */}
      <div className="ticket-main">

        <div className="ticket-title-row">

          <h3>{title}</h3>

          <button className="ticket-open-button">
            <ArrowUpRight size={17} />
          </button>

        </div>

        <p className="ticket-category">
          {category}
        </p>

      </div>


      {/* Priority */}
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


      {/* Status */}
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


      {/* Date */}
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