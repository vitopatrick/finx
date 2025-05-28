import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, store } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaPhone, FaGlobe } from "react-icons/fa";
import "../Auth/auth.css";

const Form = () => {
  // control the input fields
  const [disable, setDisable] = useState(false);
  const [country, setCountry] = useState([]);

  // toast configuration
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

  // navigation router hook
  const navigate = useNavigate();
  // refs for form
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  // const walletRef = useRef();

  // fetch countries

  const fetchCountry = async () => {
    try {
      const apiCall = await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );
      const response = await apiCall.json();
      const countriesAndCities = response.data;

      const countries = countriesAndCities.map((country) => {
        return {
          main: country.country,
        };
      });
      setCountry(countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setDisable(true);
      toast.error("Failed to load countries list", toastConfig);
    }
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  // function to create and save user to the database
  const saveUser = async (e) => {
    e.preventDefault();
    // check if the input fields are empty
    if (
      !nameRef.current.value |
      !emailRef.current.value |
      !phoneRef.current.value |
      !passwordRef.current.value |
      !countryRef.current.value
    ) {
      toast.error("Please fill all fields correctly", toastConfig);
      return;
    }
    //create the user in firebase and then save to firestore
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      // send verification
      await sendEmailVerification(user);
      // set the backdrop

      // add to the database
      await setDoc(doc(store, "users", emailRef.current.value), {
        email: user.email,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
        password: passwordRef.current.value,
        country: countryRef.current.value,
        balance: 0,
        profit: 0,
        bonus: 0,
        deposited: 0,
        refBonus: 0,
        totalPackages: 0,
        activePages: 0,
        verified: user.emailVerified,
        createdAt: user.metadata.creationTime,
        uid: user.uid,
        // walletPhrase: walletRef.current.value,
      });
      // toast notification
      toast.success(
        "Welcome to Neo Market! Please check your email for verification",
        {
          ...toastConfig,
          position: "top-center",
        }
      );
      // redirect user to login
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered", toastConfig);
      }
      if (error.code === "auth/weak-password") {
        toast.error("Password must be at least 6 characters long", toastConfig);
      }
      if (error.code === "auth/invalid-email") {
        toast.error("Please enter a valid email address", toastConfig);
      }
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card register">
          <div className="brand">
            <div className="brand-logo">N</div>
            <Link to="/" className="brand-name">
              Neo Market
            </Link>
          </div>

          <h2 className="auth-title">Create Account</h2>
          <p className="auth-subtitle">Join our trading community today</p>

          <form className="auth-form" onSubmit={saveUser}>
            <div className="form-group">
              <div className="input-icon">
                <FaUser />
              </div>
              <input
                type="text"
                ref={nameRef}
                className="form-input"
                placeholder="Full Name"
                required
              />
              <div className="input-border"></div>
            </div>

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
                <FaPhone />
              </div>
              <input
                type="tel"
                ref={phoneRef}
                className="form-input"
                placeholder="Phone Number"
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

            <div className="form-group">
              <div className="input-icon">
                <FaGlobe />
              </div>
              <select
                ref={countryRef}
                className="form-input"
                required
                disabled={disable}
              >
                <option value="">Select Country</option>
                {country.map((state, index) => (
                  <option key={index} value={state.main}>
                    {state.main}
                  </option>
                ))}
              </select>
              <div className="input-border"></div>
            </div>

            <div className="form-terms">
              <label className="terms-checkbox">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                <span>
                  I agree to the{" "}
                  <Link to="/terms" className="auth-link">
                    Terms & Conditions
                  </Link>
                </span>
              </label>
            </div>

            <button type="submit" className="auth-button">
              <span>Create Account</span>
              <div className="button-shine"></div>
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="auth-link">
                Sign In
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
