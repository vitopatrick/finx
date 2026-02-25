import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../Auth/auth.css";

const Form = () => {
  const navigate = useNavigate();

  const toastConfig = {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const loginUser = async (e) => {
    e.preventDefault();
    if (!emailRef.current.value | !passwordRef.current.value) {
      toast.error("Please fill the form correctly", toastConfig);
      return;
    }
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      sessionStorage.setItem("token", user.user.refreshToken);
      toast.success("Welcome Back! Redirecting to dashboard...", {
        ...toastConfig,
        position: "top-center",
      });
      navigate("/dashboard");
    } catch (error) {
      console.log(error.code);

      if (error.code === "auth/invalid-login-credentials") {
        toast.error("Password is incorrect", toastConfig);
      }
      if (error.code === "auth/user-not-found") {
        toast.error("User not found", toastConfig);
      }
    }
  };

  const resetPassword = async (e) => {
    e.preventDefault();
    try {
      if (!emailRef.current.value) {
        toast.error("Please enter your email address", toastConfig);
      } else {
        await sendPasswordResetEmail(auth, emailRef.current.value);
        toast.info("Check your email for a reset link", {
          ...toastConfig,
          position: "top-center",
        });
      }
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email", toastConfig);
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <div className="brand">
            <div className="brand-logo">N</div>
            <Link to="/" className="brand-name">
              Capital flow
            </Link>
          </div>

          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Access your trading dashboard</p>

          <form className="auth-form" onSubmit={loginUser}>
            <div className="form-group">
              <div className="input-icon">
                <FaEnvelope />
              </div>
              <input
                type="email"
                ref={emailRef}
                className="form-input"
                placeholder="Email Address"
                required
              />
              <div className="input-border"></div>
            </div>

            <div className="form-group">
              <div className="input-icon">
                <FaLock />
              </div>
              <input
                type="password"
                ref={passwordRef}
                className="form-input"
                placeholder="Password"
                required
              />
              <div className="input-border"></div>
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/" className="forgot-link" onClick={resetPassword}>
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="auth-button">
              <span>Sign In</span>
              <div className="button-shine"></div>
            </button>
          </form>

          <div className="auth-footer">
            <p>
              New to Capital flow?{" "}
              <Link to="/register" className="auth-link">
                Create Account
              </Link>
            </p>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="auth-background">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-line line-1"></div>
          <div className="bg-line line-2"></div>
        </div>
      </div>
    </div>
  );
};

export default Form;
