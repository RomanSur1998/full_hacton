import React, { useState } from "react";
import register from "../Registration/Registration.module.css";
import logoSpotify from "../../assets/Spotify_Logo_CMYK_Black.png";
import facebookLogo from "../../assets/facebook-logo.png";
import googleLogo from "../../assets/icon-google.png";
import { useAuth } from "../../context/AuthContextProvider";
import { Link } from "react-router-dom";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const { handleRegister, error, loading, setError } = useAuth();

  function handleSave(event) {
    event.preventDefault();
    if (
      !email.trim() ||
      !number.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      // Отображение сообщения об ошибке на странице
      setError("Please fill in all fields");
    } else {
      let formData = new FormData();
      formData.append("email", email);
      formData.append("phone", number); // Обновленное имя переменной
      formData.append("password", password);
      formData.append("password_confirm", passwordConfirm);
      handleRegister(formData);
    }
  }

  return (
    <div className={register.mainBlock}>
      <div className={register.registerBox}>
        <div className={register.image}>
          <img src={logoSpotify} alt="logo" />
        </div>
        <h2>Sign up for free to start listening.</h2>
        <Link>
          <button className={register.btnFacebook}>
            <img src={facebookLogo} alt="" />
            <p>Sign up with Facebook</p>
          </button>
        </Link>

        <Link>
          <button className={register.btnGoogle}>
            <img src={googleLogo} alt="" />
            <p>Sign up with Google</p>
          </button>
        </Link>
        <span className={register.span}>or</span>

        {/* form */}
        <form action="" className={register.form}>
          <h2>Sign up with your email address</h2>
          <div className={register.formGroup}>
            <div className={register.LabelGroup}>
              <label htmlFor="email" className={register.LabelInner}>
                <span>What's your email?</span>
              </label>
            </div>
            <input
              type="email"
              placeholder="Enter your email."
              className="input"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="user-email"
            />
            <div className={register.help}>
              <span>You need to enter your email.</span>
            </div>
          </div>
          <div className={register.formGroup}>
            <div className={register.LabelGroup}>
              <label htmlFor="phone" className={register.LabelInner}>
                <span>What's your phone number?</span>
              </label>
            </div>
            <input
              type="tel"
              placeholder="Enter your phone."
              className="input"
              onChange={(e) => setNumber(e.target.value)}
              autoComplete="number-phone"
            />
            <div className={register.help}>
              <span>You need to enter your number.</span>
            </div>
          </div>
          <div className={register.formGroup}>
            <div className={register.LabelGroup}>
              <label htmlFor="password" className={register.LabelInner}>
                <span>Create a password</span>
              </label>
            </div>
            <input
              type="password"
              placeholder="Enter your password."
              className="input"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
            />
            <div className={register.help}>
              <span>You need to enter a password.</span>
            </div>
          </div>
          <div className={register.formGroup}>
            <div className={register.LabelGroup}>
              <label htmlFor="password_confirm" className={register.LabelInner}>
                <span>Confirm password</span>
              </label>
            </div>
            <input
              type="password"
              placeholder="Enter your password."
              className="input"
              onChange={(e) => setPasswordConfirm(e.target.value)}
              autoComplete="confirm-password"
            />
            <div className={register.help}>
              <span>You need to enter a password.</span>
            </div>
          </div>
          <div className={register.ButtonContainer}>
            {!loading ? (
              <button className={register.button} onClick={handleSave}>
                <span>Sign up</span>
              </button>
            ) : (
              <button className={register.btnLoad} onClick={handleSave}>
                <div className={register.wave}>
                  <div className={register.ball}></div>
                  <div className={register.ball}></div>
                  <div className={register.ball}></div>
                  <div className={register.ball}></div>
                  <div className={register.ball}></div>
                </div>
              </button>
            )}
          </div>

          <p className={register.typeElement}>
            <span>
              Have an account?
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Registration;
