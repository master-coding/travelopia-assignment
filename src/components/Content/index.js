import { useState } from "react";
import { ImCross } from "react-icons/im";
import { BiSolidSad } from "react-icons/bi";
import { GiConfirmed } from "react-icons/gi";
import { BsChatRightDotsFill } from "react-icons/bs";
import TripForm from "../TripForm";
import Travelling from "../../assests/images/travelling.png";
import styles from "./styles.module.css";

const Content = ({ setShowEnquiry }) => {
  const [showForm, setShowForm] = useState({
    form: false,
    confirmModal: false,
    success: false,
  });

  return (
    <div className={styles["content-container"]}>
      <div className={styles["image"]}>
        <img src={Travelling} alt="travelling" />
      </div>

      <div className={styles["explore"]}>
        <div>
          <div className={styles["explore__title"]}>Love Travelling</div>
          <div className={styles["explore__subtitle"]}>
            Explore different places with Travelopia...
          </div>

          {!showForm.form && !showForm.confirmModal ? (
            <button
              className={styles["create-trip"]}
              onClick={() =>
                setShowForm({ form: true, success: false, confirmModal: false })
              }
            >
              Create Trip
            </button>
          ) : null}

          {showForm.form ? <TripForm setShowForm={setShowForm} /> : null}

          {showForm.confirmModal ? (
            <div className={styles["success-modal"]}>
              <div className={styles["success-modal__header"]}>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    setShowForm({
                      form: false,
                      confirmModal: false,
                      success: false,
                    })
                  }
                >
                  <ImCross />
                </div>
              </div>
              <div className={styles["success-state"]}>
                {showForm.success ? (
                  <div>
                    Trip Confirm Successfully <GiConfirmed />
                  </div>
                ) : (
                  <div>
                    Trip Declined <BiSolidSad />
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </div>

        <div className={styles["enquiry"]} onClick={() => setShowEnquiry(true)}>
          <div style={{ cursor: "pointer" }}>
            <BsChatRightDotsFill size="40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
