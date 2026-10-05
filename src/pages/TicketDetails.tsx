import { useState } from "react";
import {
  ArrowLeft,
  Send,
  Paperclip,
  Clock3,
  CalendarDays,
  Tag,
  AlertCircle,
  CheckCircle2,
  MoreHorizontal,
} from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";

function TicketDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [message, setMessage] = useState("");
  const [ticketStatus, setTicketStatus] = useState("Open");

  // =========================
  // ALL TICKETS
  // =========================

  const tickets = [
    {
      id: "HD-1001",
      title: "Unable to login to my account",
      category: "Account & Authentication",
      priority: "High",
      status: "Open",
      created: "Oct 4, 2026",
      description:
        "I am unable to login to my account. I have entered my correct email and password several times, but the system keeps showing an invalid credentials message. Please help me resolve this issue.",
    },

    {
      id: "HD-1002",
      title: "Payment was deducted twice",
      category: "Billing & Payment",
      priority: "Medium",
      status: "In Progress",
      created: "Oct 2, 2026",
      description:
        "I made a payment for my account, but the amount was deducted twice from my balance. Please check the transaction and help me get the extra payment refunded.",
    },

    {
      id: "HD-1003",
      title: "Internet connection problem",
      category: "Technical Support",
      priority: "Low",
      status: "Resolved",
      created: "Sep 29, 2026",
      description:
        "My internet connection was not working properly. The connection was frequently disconnecting and becoming very slow.",
    },

    {
      id: "HD-1004",
      title: "Unable to update profile",
      category: "Account & Authentication",
      priority: "Medium",
      status: "Closed",
      created: "Sep 25, 2026",
      description:
        "I am unable to update my profile information. Whenever I try to save the changes, the system does not update my profile.",
    },
  ];

  // Find the ticket that matches the URL
  const selectedTicket = tickets.find(
    (ticket) => ticket.id === id
  );

  // If ticket doesn't exist
  if (!selectedTicket) {
    return (
      <div className="modern-ticket-page">

        <header className="modern-ticket-header">

          <button
            className="modern-back-button"
            onClick={() => navigate("/customer/tickets")}
          >
            <ArrowLeft size={18} />
            <span>My Tickets</span>
          </button>

          <div className="modern-brand">
            <div className="modern-brand-icon">
              🎧
            </div>

            <span>HelpDesk</span>
          </div>

        </header>

        <main className="modern-ticket-container">

          <div
            style={{
              background: "#fff",
              border: "1px solid #e5e9ef",
              borderRadius: "14px",
              padding: "50px",
              textAlign: "center",
            }}
          >

            <h2>
              Ticket not found
            </h2>

            <p>
              The ticket you are looking for does not exist.
            </p>

            <button
              className="modern-send-button"
              onClick={() => navigate("/customer/tickets")}
              style={{
                margin: "20px auto 0",
              }}
            >
              Back to My Tickets
            </button>

          </div>

        </main>

      </div>
    );
  }

  // Use the selected ticket
  const ticket = {
    ...selectedTicket,
    status:
      ticketStatus === "Open"
        ? selectedTicket.status
        : ticketStatus,
  };

  // =========================
  // MESSAGES
  // =========================

  const messages = [
    {
      sender: "Biliise",
      role: "Customer",
      text: selectedTicket.description,
      time: "10:30 AM",
      date: selectedTicket.created,
      type: "customer",
    },

    {
      sender: "Support Agent",
      role: "Support Agent",
      text:
        selectedTicket.id === "HD-1001"
          ? "Hello Biliise, thank you for contacting support. We are checking your account and will help you resolve the login problem."
          : selectedTicket.id === "HD-1002"
          ? "Hello Biliise, we are checking the payment transaction and will investigate the duplicate deduction."
          : selectedTicket.id === "HD-1003"
          ? "Hello Biliise, we have checked the connection issue and provided a solution. Please let us know if the problem happens again."
          : "Hello Biliise, we are checking your profile settings and will help you resolve the problem.",
      time: "11:05 AM",
      date: selectedTicket.created,
      type: "agent",
    },
  ];

  // =========================
  // SEND MESSAGE
  // =========================

  const handleSendMessage = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!message.trim()) {
      return;
    }

    console.log("New message:", message);

    setMessage("");
  };

  // =========================
  // CLOSE TICKET
  // =========================

  const handleCloseTicket = () => {
    setTicketStatus("Closed");
  };

  return (
    <div className="modern-ticket-page">

      {/* ================= HEADER ================= */}

      <header className="modern-ticket-header">

        <button
          className="modern-back-button"
          onClick={() => navigate("/customer/tickets")}
        >
          <ArrowLeft size={18} />
          <span>My Tickets</span>
        </button>

        <div className="modern-brand">

          <div className="modern-brand-icon">
            🎧
          </div>

          <span>
            HelpDesk
          </span>

        </div>

        <div className="header-user">

          <div className="header-user-avatar">
            B
          </div>

          <div>
            <strong>Biliise</strong>
            <span>Customer</span>
          </div>

        </div>

      </header>


      {/* ================= PAGE ================= */}

      <main className="modern-ticket-container">


        {/* ================= TICKET HEADING ================= */}

        <section className="modern-ticket-heading">

          <div className="heading-left">

            <div className="ticket-number">
              {ticket.id}
            </div>

            <h1>
              {ticket.title}
            </h1>

            <p>
              <CalendarDays size={15} />

              Created {ticket.created}
            </p>

          </div>


          <div className="heading-right">

            <span
              className={`modern-status ${
                ticket.status.toLowerCase()
              }`}
            >

              <span></span>

              {ticket.status}

            </span>

            <button className="more-button">
              <MoreHorizontal size={20} />
            </button>

          </div>

        </section>


        {/* ================= MAIN GRID ================= */}

        <div className="modern-ticket-grid">


          {/* ================= CONVERSATION ================= */}

          <section className="conversation-panel">


            {/* Conversation header */}

            <div className="conversation-header">

              <div>

                <h2>
                  Conversation
                </h2>

                <p>
                  Communication with the support team
                </p>

              </div>

              <div className="message-count">
                {messages.length} messages
              </div>

            </div>


            {/* Problem description */}

            <div className="issue-card">

              <div className="issue-header">

                <div className="issue-icon">
                  <AlertCircle size={18} />
                </div>

                <div>

                  <strong>
                    Problem description
                  </strong>

                  <span>
                    Original ticket request
                  </span>

                </div>

              </div>

              <p>
                {ticket.description}
              </p>

            </div>


            {/* Messages */}

            <div className="modern-messages">

              {messages.map(
                (item, index) => (

                  <div
                    key={index}
                    className={`modern-message ${
                      item.type === "customer"
                        ? "customer-message"
                        : "agent-message"
                    }`}
                  >

                    <div className="modern-avatar">

                      {item.type === "customer"
                        ? "B"
                        : <CheckCircle2 size={17} />
                      }

                    </div>


                    <div className="modern-message-body">

                      <div className="modern-message-top">

                        <div className="sender-info">

                          <strong>
                            {item.sender}
                          </strong>

                          <span>
                            {item.role}
                          </span>

                        </div>

                        <time>
                          {item.date} · {item.time}
                        </time>

                      </div>


                      <div className="modern-message-bubble">

                        <p>
                          {item.text}
                        </p>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>


            {/* ================= REPLY ================= */}

            {ticket.status !== "Closed" && (

              <form
                className="modern-reply"
                onSubmit={handleSendMessage}
              >

                <div className="reply-header">

                  <div className="reply-user-avatar">
                    B
                  </div>

                  <div>

                    <strong>
                      Reply to support
                    </strong>

                    <span>
                      Send a message to the support team
                    </span>

                  </div>

                </div>


                <div className="reply-box">

                  <textarea
                    value={message}
                    onChange={(e) =>
                      setMessage(e.target.value)
                    }
                    placeholder="Type your message here..."
                    rows={5}
                  />


                  <div className="reply-toolbar">

                    <button
                      type="button"
                      className="attachment-button"
                    >
                      <Paperclip size={17} />
                      Attach file
                    </button>


                    <button
                      type="submit"
                      className="modern-send-button"
                    >
                      Send Message
                      <Send size={16} />
                    </button>

                  </div>

                </div>

              </form>

            )}


            {/* Closed */}

            {ticket.status === "Closed" && (

              <div className="closed-conversation">

                <CheckCircle2 size={20} />

                <div>

                  <strong>
                    Ticket closed
                  </strong>

                  <span>
                    This conversation has been closed.
                  </span>

                </div>

              </div>

            )}

          </section>


          {/* ================= INFORMATION ================= */}

          <aside className="ticket-info-panel">

            <div className="info-panel-header">

              <h2>
                Ticket Information
              </h2>

              <p>
                Details about this request
              </p>

            </div>


            {/* Category */}

            <div className="info-item">

              <div className="info-icon">
                <Tag size={17} />
              </div>

              <div>

                <span>
                  Category
                </span>

                <strong>
                  {ticket.category}
                </strong>

              </div>

            </div>


            {/* Priority */}

            <div className="info-item">

              <div className="info-icon priority-icon">
                <AlertCircle size={17} />
              </div>

              <div>

                <span>
                  Priority
                </span>

                <strong className="high-priority">

                  <i></i>

                  {ticket.priority}

                </strong>

              </div>

            </div>


            {/* Created */}

            <div className="info-item">

              <div className="info-icon">
                <CalendarDays size={17} />
              </div>

              <div>

                <span>
                  Created
                </span>

                <strong>
                  {ticket.created}
                </strong>

              </div>

            </div>


            {/* Status */}

            <div className="info-item">

              <div className="info-icon">
                <Clock3 size={17} />
              </div>

              <div>

                <span>
                  Status
                </span>

                <strong>

                  <span
                    className={`small-status ${
                      ticket.status.toLowerCase()
                    }`}
                  >
                    {ticket.status}
                  </span>

                </strong>

              </div>

            </div>


            <div className="info-divider"></div>


            {/* Requester */}

            <div className="requester-section">

              <span className="requester-label">
                REQUESTER
              </span>

              <div className="requester">

                <div className="requester-avatar">
                  B
                </div>

                <div>

                  <strong>
                    Biliise
                  </strong>

                  <span>
                    Customer
                  </span>

                </div>

              </div>

            </div>


            {/* Close */}

            {ticket.status !== "Closed" && (

              <button
                className="modern-close-button"
                onClick={handleCloseTicket}
              >

                <CheckCircle2 size={17} />

                Close Ticket

              </button>

            )}

          </aside>

        </div>

      </main>

    </div>
  );
}

export default TicketDetails;