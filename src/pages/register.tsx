import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Headphones,
  Mail,
  Lock,
  User,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="auth-page">

      {/* LEFT SIDE */}
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
            Get support
            <span> when you need it.</span>
          </h1>

          <p>
            Create your account and get a simple,
            reliable way to report problems and
            communicate with our support team.
          </p>

          <div className="feature-list">

            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Create and track support tickets</span>
            </div>

            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Communicate directly with agents</span>
            </div>

            <div className="feature-item">
              <CheckCircle size={20} />
              <span>Follow the progress of your requests</span>
            </div>

          </div>

        </div>

        <div className="brand-footer">
          © 2026 HelpDesk. All rights reserved.
        </div>

      </div>


      {/* RIGHT SIDE */}
      <div className="auth-form-container">

        <div className="auth-form-wrapper">

          {/* Mobile logo */}
          <div className="mobile-logo">

            <div className="brand-icon">
              <Headphones size={22} />
            </div>

            <span>HelpDesk</span>

          </div>


          {/* Heading */}
          <div className="auth-heading">

            <h2>Create your account</h2>

            <p>
              Join HelpDesk and start managing your support requests.
            </p>

          </div>


          {/* FORM */}
          <form className="auth-form">

            {/* Name */}
            <div className="form-group">

              <label htmlFor="name">
                Full name
              </label>

              <div className="input-wrapper">

                <User size={19} />

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                />

              </div>

            </div>


            {/* Email */}
            <div className="form-group">

              <label htmlFor="register-email">
                Email address
              </label>

              <div className="input-wrapper">

                <Mail size={19} />

                <input
                  id="register-email"
                  type="email"
                  placeholder="you@example.com"
                />

              </div>

            </div>


            {/* Password */}
            <div className="form-group">

              <label htmlFor="register-password">
                Password
              </label>

              <div className="input-wrapper">

                <Lock size={19} />

                <input
                  id="register-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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


            {/* Confirm password */}
            <div className="form-group">

              <label htmlFor="confirm-password">
                Confirm password
              </label>

              <div className="input-wrapper">

                <Lock size={19} />

                <input
                  id="confirm-password"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>

              </div>

            </div>


            {/* Terms */}
            <div className="remember-row">

              <label className="remember-label">

                <input type="checkbox" />

                <span>
                  I agree to the terms and conditions
                </span>

              </label>

            </div>


            {/* Register button */}
            <button
              type="submit"
              className="primary-button"
            >
              Create account

              <ArrowRight size={19} />
            </button>

          </form>


          {/* Login link */}
          <div className="auth-divider">
            <span>Already have an account?</span>
          </div>

          <Link
  to="/login"
  className="secondary-button auth-link"
>
  Sign in instead
</Link>


          <p className="security-note">
            Your account information is securely protected.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;