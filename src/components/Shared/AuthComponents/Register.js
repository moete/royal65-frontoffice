import React from "react";

import Modal from "../../UI/Modal";
import styles from "./Register.module.css";
function Register(props) {
  return (
    <Modal onClose={props.onClose}>
      <div className={styles["register-form"]}>Register form</div>
    </Modal>
  );
}

export default Register;
