import { useState } from "react";
import {
  ArrowLeft,
  Send,
  AlertCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function CreateTicket() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!title.trim()) {
      setError("Please enter a ticket title.");
      return;
    }

    if (!category) {
      setError("Please select a category.");
      return;
    }

    if (!description.trim()) {
      setError("Please describe your problem.");
      return;
    }

    /*
      For now we are only testing the frontend.

      Later this will send the ticket to:

      POST /api/tickets

      and save it in MongoDB.
    */

    console.log({
      title,
      description,
      category,
      priority,
    });

    alert("Ticket created successfully!");

    navigate("/customer/dashboard");
  };

  return (
    <div className="create-ticket-page">

      {/* Top navigation */}

      <header className="create-ticket-header">

        <button
          className="back-button"
          onClick={() => navigate("/customer/dashboard")}
        >
          <ArrowLeft size={18} />
          Back to Dashboard
        </button>

        <div className="create-ticket-logo">
          <div className="create-ticket-logo-icon">
            🎧
          </div>

          <strong>HelpDesk</strong>
        </div>

      </header>


      {/* Main content */}

      <main className="create-ticket-container">

        <div className="create-ticket-heading">

          <div>

            <p className="page-label">
              CUSTOMER SUPPORT
            </p>

            <h1>
              Create a new ticket
            </h1>

            <p>
              Tell us what you're experiencing and our
              support team will help you.
            </p>

          </div>

        </div>


        {/* Form card */}

        <form
          className="create-ticket-card"
          onSubmit={handleSubmit}
        >

          {/* Error */}

          {error && (
            <div className="form-error">

              <AlertCircle size={18} />

              <span>{error}</span>

            </div>
          )}


          {/* Title */}

          <div className="form-group">

            <label htmlFor="title">
              Ticket title
            </label>

            <input
              id="title"
              type="text"
              placeholder="Example: I cannot login to my account"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <span className="input-help">
              Give your problem a short and clear title.
            </span>

          </div>


          {/* Category */}

          <div className="form-group">

            <label htmlFor="category">
              Category
            </label>

            <select
              id="category"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >

              <option value="">
                Select a category
              </option>

              <option value="Technical Support">
                Technical Support
              </option>

              <option value="Account & Authentication">
                Account & Authentication
              </option>

              <option value="Billing & Payment">
                Billing & Payment
              </option>

              <option value="Product">
                Product
              </option>

              <option value="Other">
                Other
              </option>

            </select>

          </div>


          {/* Priority */}

          <div className="form-group">

            <label htmlFor="priority">
              Priority
            </label>

            <select
              id="priority"
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value)
              }
            >

              <option value="Low">
                Low
              </option>

              <option value="Medium">
                Medium
              </option>

              <option value="High">
                High
              </option>

            </select>

            <span className="input-help">
              Choose High only when the problem is urgent.
            </span>

          </div>


          {/* Description */}

          <div className="form-group">

            <label htmlFor="description">
              Description
            </label>

            <textarea
              id="description"
              rows={7}
              placeholder="Please describe your problem in detail..."
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

            <span className="input-help">
              Include any useful information that can help
              our support team understand the problem.
            </span>

          </div>


          {/* Buttons */}

          <div className="form-actions">

            <button
              type="button"
              className="cancel-button"
              onClick={() =>
                navigate("/customer/dashboard")
              }
            >
              Cancel
            </button>

            <button
              type="submit"
              className="submit-ticket-button"
            >
              <Send size={17} />
              Submit Ticket
            </button>

          </div>

        </form>

      </main>

    </div>
  );
}

export default CreateTicket;