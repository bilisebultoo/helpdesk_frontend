import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Headphones,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import "../App.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  // React Router navigation
  const navigate = useNavigate();

  // Handle login for frontend testing
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Temporary frontend login
    // We will connect this to Laravel later.
    localStorage.setItem("token", "frontend-test-token");

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Biliise",
        role: "customer",
      })
    );

    // Go to customer dashboard
    navigate("/customer/dashboard");
  };

  return (
    <div className="auth-page">

      {/* Left side */}
      <div className="auth-brand">

        <div className="brand-logo">
          <div className="brand-icon">
            <Headphones size={24} />
          </div>

          <span>HelpDesk</span>
        </div>

        <div className="brand-content">

          <span className="brand-badge">
            CUSTOMER SUPPORT PLATFORM
          </span>

          <h1>
            Support your customers
            <span> better and faster.</span>
          </h1>

          <p>
            Manage support tickets, communicate with customers,
            and resolve problems from one simple workspace.
          </p>

          <div className="feature-list">

            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Track every support request</span>
            </div>

            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Communicate with customers</span>
            </div>

            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Resolve issues efficiently</span>
            </div>

          </div>

        </div>

        <div className="brand-footer">
          © 2026 HelpDesk. All rights reserved.
        </div>

      </div>


      {/* Right side */}
      <div className="auth-form-container">

        <div className="auth-form-wrapper">

          <div className="mobile-logo">

            <div className="brand-icon">
              <Headphones size={22} />
            </div>

            <span>HelpDesk</span>

          </div>


          <div className="auth-heading">

            <h2>Welcome back</h2>

            <p>
              Sign in to continue to your HelpDesk account.
            </p>

          </div>


          {/* LOGIN FORM */}
          <form
            className="auth-form"
            onSubmit={handleLogin}
          >

            {/* Email */}
            <div className="form-group">

              <label htmlFor="email">
                Email address
              </label>

              <div className="input-wrapper">

                <Mail size={19} />

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                />

              </div>

            </div>


            {/* Password */}
            <div className="form-group">

              <div className="password-label">

                <label htmlFor="password">
                  Password
                </label>

                <button
                  type="button"
                  className="forgot-password"
                >
                  Forgot password?
                </button>

              </div>


              <div className="input-wrapper">

                <Lock size={19} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Remember */}
            <div className="remember-row">

              <label className="remember-label">

                <input type="checkbox" />

                <span>Remember me</span>

              </label>

            </div>


            {/* Login */}
            <button
              type="submit"
              className="primary-button"
            >
              Sign in

              <ArrowRight size={19} />
            </button>

          </form>


          {/* Register */}
          <div className="auth-divider">
            <span>New to HelpDesk?</span>
          </div>


          <Link
            to="/register"
            className="secondary-button auth-link"
          >
            Create an account
          </Link>


          <p className="security-note">
            Your account information is securely protected.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;