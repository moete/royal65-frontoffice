import React from "react";
import Modal from "../../UI/Modal";
import Logo from "./../../UI/Logo";
import Button from "./../../UI/Button";
import { SocialMediaBar } from "./../../Shared";
import closeBtn from "./../../../assets/icons/cancelBtn.svg";
import styles from "./Register.module.css";
import { register } from '../../../store/userSlice';
import { useDispatch, useSelector } from "react-redux";

function Register(props) {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.user)
  console.log(user)
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
              Already have an account?{" "}
              <span
                onClick={() => {
                  props.onClose();
                  props.onOpenLogin();
                }}
              >
                login
              </span>
            </p>
          </div>
        </div>
        <div className={styles["login-form-section"]}>
          <form
            onSubmit={(values) => { dispatch(register(values)) }}
          >
            <div className={styles["form-group"]}>
              <label>Email Address</label>
              <input type="email" placeholder="Enter your Email Address here" />
            </div>
            <div className={styles["form-group"]}>
              <label>Username </label>
              <input type="email" placeholder="Enter your username here " />
            </div>
            <div className={styles["form-group"]}>
              <label> Name </label> 
              <input type="text" placeholder="Enter your name here " />
            </div>

            <div className={styles["form-group"]}>
              <label>Password</label>
              <input type="password" placeholder="Password" />
            </div>


            <Button
              type="button"
              value=" Register Now"
              className={styles["custom-btn"]}
              onClick={(values) => { dispatch(register(values)) }}

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
