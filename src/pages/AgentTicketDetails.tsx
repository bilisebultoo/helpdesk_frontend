import {
  ArrowLeft,
  Send,
  User,
  Clock3,
  Tag,
  CheckCircle2,
   AlertCircle,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AgentTicketDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  const tickets = [
    {
      id: "HD-1001",
      title: "Unable to login to my account",
      customer: "Abebe Kebede",
      email: "abebe@example.com",
      category: "Account & Authentication",
      priority: "High",
      status: "Open",
      date: "Oct 4, 2026",
      description:
        "I have been trying to login to my account since this morning, but my password keeps getting rejected. I am sure that I am using the correct password. Please help me access my account.",
      messages: [
        {
          sender: "customer",
          name: "Abebe Kebede",
          text: "I cannot login to my account. My password keeps getting rejected.",
          time: "10:32 AM",
        },
        {
          sender: "customer",
          name: "Abebe Kebede",
          text: "I have already tried resetting the password but the problem is still there.",
          time: "10:35 AM",
        },
      ],
    },
    {
      id: "HD-1002",
      title: "Payment was deducted twice",
      customer: "Sara Ahmed",
      email: "sara@example.com",
      category: "Billing & Payment",
      priority: "Medium",
      status: "In Progress",
      date: "Oct 2, 2026",
      description:
        "I made one payment, but my bank account was charged twice. Please check the transaction and help me get the extra payment refunded.",
      messages: [
        {
          sender: "customer",
          name: "Sara Ahmed",
          text: "I was charged twice for the same payment.",
          time: "2:10 PM",
        },
        {
          sender: "agent",
          name: "Support Agent",
          text: "Thank you for reporting this. We are checking the transaction.",
          time: "2:25 PM",
        },
      ],
    },
    {
      id: "HD-1003",
      title: "Internet connection problem",
      customer: "Dawit Tesfaye",
      email: "dawit@example.com",
      category: "Technical Support",
      priority: "Low",
      status: "Resolved",
      date: "Sep 29, 2026",
      description:
        "My internet connection was unstable and frequently disconnected. I needed help troubleshooting the issue.",
      messages: [
        {
          sender: "customer",
          name: "Dawit Tesfaye",
          text: "My internet connection keeps disconnecting.",
          time: "9:15 AM",
        },
        {
          sender: "agent",
          name: "Support Agent",
          text: "Please restart your router and check the connection again.",
          time: "9:40 AM",
        },
      ],
    },
    {
      id: "HD-1004",
      title: "Unable to update profile",
      customer: "Marta Bekele",
      email: "marta@example.com",
      category: "Account & Authentication",
      priority: "Medium",
      status: "Closed",
      date: "Sep 25, 2026",
      description:
        "I cannot update my profile information. Every time I save the changes, I receive an error.",
      messages: [
        {
          sender: "customer",
          name: "Marta Bekele",
          text: "I cannot save my profile changes.",
          time: "11:20 AM",
        },
        {
          sender: "agent",
          name: "Support Agent",
          text: "The profile issue has been fixed. Please try again.",
          time: "12:05 PM",
        },
      ],
    },
    {
      id: "HD-1005",
      title: "Application keeps crashing",
      customer: "Yonas Alemu",
      email: "yonas@example.com",
      category: "Technical Support",
      priority: "High",
      status: "Open",
      date: "Sep 23, 2026",
      description:
        "The application closes unexpectedly whenever I try to open the reports section.",
      messages: [
        {
          sender: "customer",
          name: "Yonas Alemu",
          text: "The application keeps crashing when I open reports.",
          time: "4:10 PM",
        },
      ],
    },
  ];

  const selectedTicket = tickets.find(
    (ticket) => ticket.id === id
  );

  const [reply, setReply] = useState("");

  const [ticketStatus, setTicketStatus] = useState(
    selectedTicket?.status ?? "Open"
  );

  const [messages, setMessages] = useState(
    selectedTicket?.messages ?? []
  );

  if (!selectedTicket) {
    return (
      <div className="agent-not-found">
        <h2>Ticket not found</h2>

        <p>
          The ticket you are trying to view does not exist.
        </p>

        <button
          onClick={() => navigate("/agent/dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const handleReply = () => {
    if (!reply.trim()) {
      return;
    }

    const newMessage = {
      sender: "agent",
      name: "Support Agent",
      text: reply,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((previousMessages) => [
      ...previousMessages,
      newMessage,
    ]);

    setReply("");
  };

  return (
    <div className="agent-details-page">

      {/* HEADER */}
      <header className="agent-details-header">

        <button
          className="agent-back-button"
          onClick={() => navigate("/agent/dashboard")}
        >
          <ArrowLeft size={18} />
          Back to Tickets
        </button>

        <div className="agent-details-brand">
          <div className="agent-details-logo">
            🎧
          </div>

          <strong>HelpDesk</strong>
        </div>

        <div className="agent-details-user">
          <div className="agent-details-avatar">
            A
          </div>

          <div>
            <strong>Support Agent</strong>
            <span>Agent</span>
          </div>
        </div>

      </header>

      {/* CONTENT */}
      <main className="agent-details-container">

        {/* TITLE */}
        <section className="agent-details-heading">

          <div>
            <p className="agent-page-label">
              TICKET {selectedTicket.id}
            </p>

            <h1>
              {selectedTicket.title}
            </h1>

            <p>
              Created on {selectedTicket.date}
            </p>
          </div>

          <span
            className={`status-badge ${ticketStatus
              .toLowerCase()
              .replace(" ", "-")}`}
          >
            {ticketStatus}
          </span>

        </section>

        {/* GRID */}
        <div className="agent-details-grid">

          {/* CONVERSATION */}
          <section className="agent-conversation-panel">

            <div className="agent-conversation-header">

              <div>
                <h2>Conversation</h2>
                <p>
                  Communicate with the customer.
                </p>
              </div>

              <span className="agent-message-count">
                {messages.length} messages
              </span>

            </div>

            {/* ISSUE */}
            <div className="agent-issue-card">

              <div className="agent-issue-icon">
                <Tag size={19} />
              </div>

              <div>
                <span>Customer issue</span>

                <p>
                  {selectedTicket.description}
                </p>
              </div>

            </div>

            {/* MESSAGES */}
            <div className="agent-messages">

              {messages.map((message, index) => (
                <div
                  className={`agent-message ${
                    message.sender === "agent"
                      ? "agent-message-own"
                      : ""
                  }`}
                  key={index}
                >

                  <div className="agent-message-avatar">
                    {message.sender === "agent"
                      ? "A"
                      : selectedTicket.customer.charAt(0)}
                  </div>

                  <div className="agent-message-content">

                    <div className="agent-message-meta">
                      <strong>
                        {message.name}
                      </strong>

                      <span>
                        {message.time}
                      </span>
                    </div>

                    <div className="agent-message-bubble">
                      {message.text}
                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* REPLY */}
            {ticketStatus !== "Closed" && (
              <div className="agent-reply-section">

                <textarea
                  placeholder="Write a reply to the customer..."
                  value={reply}
                  onChange={(e) =>
                    setReply(e.target.value)
                  }
                />

                <div className="agent-reply-actions">

                  <span>
                    Replying as Support Agent
                  </span>

                  <button
                    className="agent-send-button"
                    onClick={handleReply}
                  >
                    <Send size={16} />
                    Send Reply
                  </button>

                </div>

              </div>
            )}

            {ticketStatus === "Closed" && (
              <div className="agent-closed-message">
                <CheckCircle2 size={19} />

                <span>
                  This ticket is closed and no
                  longer accepts replies.
                </span>
              </div>
            )}

          </section>

          {/* SIDE INFORMATION */}
          <aside className="agent-ticket-info-panel">

            {/* CUSTOMER */}
            <div className="agent-info-section">

              <h3>Customer</h3>

              <div className="agent-customer-profile">

                <div className="agent-large-avatar">
                  {selectedTicket.customer.charAt(0)}
                </div>

                <div>
                  <strong>
                    {selectedTicket.customer}
                  </strong>

                  <span>
                    {selectedTicket.email}
                  </span>
                </div>

              </div>

            </div>

            {/* TICKET INFO */}
            <div className="agent-info-section">

              <h3>Ticket information</h3>

              <div className="agent-info-row">
                <span>
                  <Tag size={15} />
                  Category
                </span>

                <strong>
                  {selectedTicket.category}
                </strong>
              </div>

              <div className="agent-info-row">
                <span>
                  <AlertCircle size={15} />
                  Priority
                </span>

                <span
                  className={`priority-badge ${selectedTicket.priority.toLowerCase()}`}
                >
                  <span className="badge-dot"></span>
                  {selectedTicket.priority}
                </span>
              </div>

              <div className="agent-info-row">
                <span>
                  <Clock3 size={15} />
                  Created
                </span>

                <strong>
                  {selectedTicket.date}
                </strong>
              </div>

            </div>

            {/* STATUS */}
            <div className="agent-info-section">

              <h3>Update status</h3>

              <div className="agent-status-select">

                <select
                  value={ticketStatus}
                  onChange={(e) =>
                    setTicketStatus(e.target.value)
                  }
                >
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

                <ChevronDown size={16} />

              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
}

export default AgentTicketDetails;