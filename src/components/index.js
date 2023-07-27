import { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import styles from "./styles.module.css";
import Enquiries from "./Enquiries";

const Travelopia = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  return (
    <div className={styles["main-container"]}>
      <Header />
      <Content showEnquiry={showEnquiry} setShowEnquiry={setShowEnquiry} />

      {showEnquiry ? <Enquiries setShowEnquiry={setShowEnquiry} /> : null}
    </div>
  );
};

export default Travelopia;
