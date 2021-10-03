import React from "react";

import Modal from "../../UI/Modal";
import Logo from "./../../UI/Logo";
import Button from "./../../UI/Button";
import { SocialMediaBar } from "./../../Shared";
import closeBtn from "./../../../assets/icons/cancelBtn.svg";

import styles from "./Register.module.css";
function Register(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles["login-form"]}>
        <div className={styles["login-form-header"]}>
          <div className={styles["login-form-header-upper"]}>
            <Logo />
            <img src={closeBtn} alt="close button" onClick={props.onClose} />
          </div>
          <div className={styles["login-form-header-lower"]}>
            <h5>Welcome back</h5>
            <p>
              Not a member?{" "}
              <span
                onClick={() => {
                  props.onClose();
                  props.onOpenLogin();
                }}
              >
                Register
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
            <Button
              type="button"
              value="Sign In"
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

export default Register;
