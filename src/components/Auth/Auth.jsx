import React, { useState } from "react";
import auth from "../Auth/Auth.module.css";
import whiteLogo from "../../assets/Spotify_Logo_CMYK_White.png";
import facebookLogo from "../../assets/facebook-logo.png";
import googleLogo from "../../assets/icon-google.png";
import appleLogo from "../../assets/apple.png";
import hide from "../../assets/hide.png";
import eye from "../../assets/eye.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContextProvider";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin } = useAuth();

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function handleSave(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("заполните поля");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
      handleLogin(formData, email);
    }
  }

  return (
    <div className={auth.wrapperLogIn}>
      <div className={auth.boxLogIn}>
        <div className={auth.header}>
          <div>
            <img src={whiteLogo} alt="white logo" />
          </div>
        </div>
        <div className={auth.loginBox}>
          <h1>Log in to Spotify</h1>
          <div className={auth.btnBox}>
            <Link>
              <button className={auth.btnGoogle}>
                <img src={googleLogo} alt="" />
                <p>Continue with Google</p>
              </button>
            </Link>
            <Link>
              <button className={auth.btnFacebook}>
                <img src={facebookLogo} alt="" />
                <p>Continue with Facebook</p>
              </button>
            </Link>
            <Link>
              <button className={auth.btnApple}>
                <img src={appleLogo} alt="" />
                <p>Continue with Apple</p>
              </button>
            </Link>
          </div>
          <hr />
          <form action="" className={auth.form}>
            <div className={auth.formGroup}>
              <div className={auth.LabelGroup}>
                <label htmlFor="email" className={auth.LabelInner}>
                  <span>Email</span>
                </label>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="input"
                autoComplete="user-email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={auth.help}>
                <span>You need to enter your email</span>
              </div>
            </div>
            <div className={auth.formGroup}>
              <div className={auth.LabelGroup}>
                <label htmlFor="password" className={auth.LabelInner}>
                  <span>Password</span>
                </label>
              </div>
              <div className={auth.passwordBlock}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password-input"
                  placeholder="Password"
                  className="input"
                  autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className={auth.password}
                  onChange={(e) => setPassword(e.target.value)}
                >
                  {showPassword ? (
                    <img src={eye} alt="eye" />
                  ) : (
                    <img src={hide} alt="hideEye" />
                  )}
                </button>
              </div>
              <div className={auth.help}>
                <span>You need to enter a password.</span>
              </div>
            </div>
            <div className={auth.ButtonContainer}>
              <button className={auth.button} onClick={handleSave}>
                <span>Log in</span>
              </button>
            </div>
            <div className={auth.forgotPaaasword}>
              <div className={auth.forgotLink}>
                <button
                  onClick={() => {
                    navigate("/reset");
                  }}
                >
                  Forgot your password?
                </button>
              </div>
            </div>
          </form>
          <hr />
          <p className={auth.typeElement}>
            <span>
              Don't have an account?
              <Link to="/signup">Sign up for Spotify</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
