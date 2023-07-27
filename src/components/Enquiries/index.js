import styles from "./styles.module.css";

const Enquiries = ({ setShowEnquiry }) => {
  const enquiryData = JSON.parse(localStorage.getItem("enquiries"));
  console.log(enquiryData, "data");

  return (
    <div className={styles["enquiry-modal"]}>
      <div>
        <div className={styles["enquiry__title"]}>Enquiries</div>

        <div className={styles["enquiry__datas"]}>
          {[...(enquiryData || [])].reverse()?.map((item) => (
            <div
              className={styles["enquiry__data"]}
              key={`${item.fname}${item.lname}${item.location}`}
            >
              <div style={{ textAlign: "right" }}>
                Date: {item.startDate || "NA"} to {item.endDate || "NA"}
              </div>
              <div>
                Name: {item.fname} {item.lname || ""}
              </div>
              <div>Email: {item.email || ""}</div>
              <div>Location: {item.location || ""}</div>
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
