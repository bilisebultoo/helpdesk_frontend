interface TicketCardProps {
  title: string;
  category: string;
  priority: "High" | "Medium" | "Low";
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
  return (
    <div className="ticket-card">

      <div className="ticket-main">

        <div className="ticket-title-row">
          <h3>{title}</h3>
        </div>

        <p className="ticket-category">
          {category}
        </p>

        <p className="ticket-date">
          {date}
        </p>

      </div>

      <div className="ticket-meta">

        <span className={`priority-badge ${priority.toLowerCase()}`}>
          {priority}
        </span>

        <span className={`status-badge ${status.toLowerCase().replace(" ", "-")}`}>
          {status}
        </span>

      </div>

    </div>
  );
}

export default TicketCard;