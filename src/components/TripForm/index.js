import { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import styles from "./styles.module.css";

const TripForm = ({ setShowForm }) => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const { beforeToday } = DateRangePicker;

  const onSubmit = (e) => {
    const currentData = JSON.parse(localStorage.getItem("enquiries"));
    const newData = [...(currentData || []), data];
    localStorage.setItem("enquiries", JSON.stringify(newData));
    setShowForm({ form: false, confirmModal: true, success: true });
  };

  return (
    <div className={styles["form-container"]}>
      <form>
        <div className={styles["form-item"]}>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            placeholder="Your First name"
            required
            onChange={(e) =>
              setData((prev) => ({ ...prev, fname: e.target.value }))
            }
          />
        </div>

        <div className={styles["form-item"]}>
          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            placeholder="Your Last name"
            required
            onChange={(e) =>
              setData((prev) => ({ ...prev, lname: e.target.value }))
            }
          />
        </div>

        <div className={styles["form-item"]}>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>

        <div className={styles["form-item"]}>
          <label for="dateRange">Date</label>
          <DateRangePicker
            appearance="subtle"
            placeholder="Select Expected Trip Date"
            shouldDisableDate={beforeToday()}
            required
            onChange={(e) =>
              setData((prev) => ({
                ...prev,
                startDate: e?.[0]?.toLocaleDateString(),
                endDate: e?.[1]?.toLocaleDateString(),
              }))
            }
          />
        </div>

        <div className={styles["form-item"]}>
          <label for="location">Location</label>
          <input
            type="text"
            id="location"
            placeholder="Trip location"
            required
            onChange={(e) =>
              setData((prev) => ({ ...prev, location: e.target.value }))
            }
          />
        </div>

        <button
          type="button"
          className={styles["create-trip"]}
          onClick={onSubmit}
        >
          Create Trip
        </button>

        <button
          type="button"
          className={styles["create-trip"]}
          style={{ background: "#fa3b3b", marginLeft: "1rem" }}
          onClick={() =>
            setShowForm({ form: false, confirmModal: true, success: false })
          }
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default TripForm;
