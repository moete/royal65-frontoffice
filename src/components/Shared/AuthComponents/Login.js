import React, { useState } from "react";

import Modal from "../../UI/Modal";
import Logo from "./../../UI/Logo";
import Button from "./../../UI/Button";
import { SocialMediaBar } from "./../../Shared";
import closeBtn from "./../../../assets/icons/cancelBtn.svg";
import styles from "./Login.module.css";

import { useDispatch } from 'react-redux';
import { login } from '../../../store/userSlice';
import { Redirect, Route } from 'react-router-dom';
function Login(props) {
  const dispatch = useDispatch()

  //  const { user } = useSelector((state) => state.user)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const PublicRoute = ({ component: Component, restricted, ...rest }) => {

    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route {...rest} render={props => (
      login() && restricted ?
        <Redirect to="/games" />
        : <Component {...props} />
    )} />

  };


  return (
    <Modal onClose={props.onClose} >
      <div className={styles["login-form"]}>
        <div className={styles["login-form-header"]}>
          <div className={styles["login-form-header-upper"]}>
            <Logo />
            <img src={closeBtn} alt="close button" onClick={props.onClose} />
          </div>
          <div className={styles["login-form-header-lower"]}>
            <h5>Get started in a minute!</h5>
            <p>
              Not a member?{" "}
              <span
                onClick={() => {
                  props.onClose();
                  props.onOpenRegister();
                }}
              >
                Register
              </span>
            </p>

          </div>
        </div>
        <div className={styles["login-form-section"]}>
          <form

          >
            <div className={styles["form-group"]}>
              <label>Username </label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Registered Email Address." />
            </div>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </div>
            <div className={styles["form-group-checkbox"]}>
              <input type="checkbox" />
              <p>
                I agree with <span>user agreement</span>, and confirm that I am
                at least 18 years old!
              </p>
            </div>
            <Button
              type="button"
              value="SIGN IN "
              className={styles["custom-btn"]}
              onClick={() => {
                console.log(username)
                dispatch(login({ username, password }))
              }}
            />


          </form>
          <p>register in directly with</p>
          <div className={styles["social-media-wrapper"]}>
            <SocialMediaBar />
          </div>
        </div>
      </div>
      <Redirect to='/games' />
    </Modal>
  );
}

export default Login;
