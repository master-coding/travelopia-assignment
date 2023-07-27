import { useState } from "react";

import Content from "./Content";
import Header from "./Header";
import Enquiries from "./Enquiries";

import styles from "./styles.module.css";

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
