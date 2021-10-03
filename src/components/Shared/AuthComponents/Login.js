import React from "react";

import Modal from "../../UI/Modal";
import Logo from "./../../UI/Logo";
import Button from "./../../UI/Button";
import { SocialMediaBar } from "./../../Shared";
import closeBtn from "./../../../assets/icons/cancelBtn.svg";

import styles from "./Login.module.css";
function Login(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles["login-form"]}>
        <div className={styles["login-form-header"]}>
          <div className={styles["login-form-header-upper"]}>
            <Logo />
            <img src={closeBtn} alt="close button" onClick={props.onClose} />
          </div>
          <div className={styles["login-form-header-lower"]}>
            <h5>Get started in a minute!</h5>
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  props.onClose();
                  props.onOpenRegister();
                }}
              >
                login
              </span>
            </p>
          </div>
        </div>
        <div className={styles["login-form-section"]}>
          <form>
            <div className={styles["form-group"]}>
              <label>Email Address</label>
              <input type="email" placeholder="Registered Email Address." />
            </div>
            <div className={styles["form-group"]}>
              <label>Password</label>
              <input type="password" placeholder="Password" />
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
              value="Register Now!"
              className={styles["custom-btn"]}
            />
          </form>
          <p>register in directly with</p>
          <div className={styles["social-media-wrapper"]}>
            <SocialMediaBar />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Login;
