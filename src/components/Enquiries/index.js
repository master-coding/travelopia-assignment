import styles from "./styles.module.css";

const Enquiries = ({ setShowEnquiry }) => {
  const enquiryData = JSON.parse(localStorage.getItem("enquiries"));
  console.log(enquiryData, "data");

  return (
    <div className={styles["enquiry-modal"]}>
      <div>
        <div className={styles["enquiry__title"]}>Enquiries</div>

        <div className={styles["enquiry__datas"]}>
          {enquiryData?.map((item) => (
            <div className={styles["enquiry__data"]}>
              <div style={{ textAlign: "right" }}>Date</div>
              <div>
                Name: {item.fname} {item.lname || ""}
              </div>
              <div>Email: {item.email || ""}</div>
              <div>Location: {item.location || ""}</div>
              <div>
                Date: {item.startDate || "NA"} to {item.endDate || "NA"}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className={styles["enquiry__cancel"]}
        onClick={() => setShowEnquiry(false)}
      >
        Cancel
      </button>
    </div>
  );
};

export default Enquiries;
