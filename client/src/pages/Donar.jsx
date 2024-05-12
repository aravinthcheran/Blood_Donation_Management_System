import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import Sidebar from "./SideBar";
import "./Donar.css";
import Plasma from "../Assets/Plasma-1.jpeg";
import Platlets from "../Assets/Platlets.jpeg";
import RBC from "../Assets/RBC.jpeg";

const Donar = () => {
  // const [donationAmount, setDonationAmount] = useState(0);
  // const [donationType, setDonationType] = useState("");
  // const history = useHistory();

  // const handleDonation = () => {
  // Backend logic to handle donation process
  // For example:
  // fetch("/api/donate", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     amount: donationAmount,
  //     type: donationType,
  //   }),
  // })
  // .then(response => response.json())
  // .then(data => {
  //   console.log("Donation successful:", data);
  //   // Redirect to confirmation page or any other page after donation
  //   history.push("/donation-confirmation");
  // })
  // .catch(error => {
  //   console.error("Error donating:", error);
  //   // Handle error (e.g., display error message to user)
  // });
  // console.log("Donation Amount:", donationAmount);
  // console.log("Donation Type:", donationType);
  // // Redirect to confirmation page or any other page after donation
  // history.push("/donation-confirmation");
  // };

  return (
    <div className="donar-landing">
      <Sidebar />
      <div className="donation-image">
        <img
          src="https://media.giphy.com/media/VGKYr7yDEUESBlAbEW/giphy.gif"
          alt="Donation "
          className="logo"
        />
      </div>
      <div className="donation-form">
        <h2>Welcome to Blood Donation Management System</h2>
        <div className="Content">
          <p>
            The blood donation system plays a vital role in healthcare, serving
            as a lifeline for countless individuals in need of blood
            transfusions due to medical emergencies, surgeries, or chronic
            conditions. This system encompasses various components, including
            blood collection, testing, storage, and distribution, all working
            together to ensure a safe and adequate supply of blood.
          </p>
          <p>
            At its core, the blood donation system relies on the generosity of
            volunteer donors who selflessly contribute blood to help others in
            need. These donors undergo a thorough screening process to ensure
            the safety of the donated blood and minimize the risk of
            transmitting infections or diseases. Once collected, the blood is
            carefully tested for compatibility and screened for pathogens before
            being processed and stored under controlled conditions.
          </p>
          <p>
            Blood donation centers, hospitals, and blood banks form the
            infrastructure of the blood donation system, facilitating the
            collection, storage, and distribution of blood products. Advanced
            logistics and tracking systems help manage inventory levels and
            ensure that blood products are available when and where they are
            needed most.
          </p>
          <p>
            The importance of the blood donation system cannot be overstated, as
            access to safe and timely blood transfusions can mean the difference
            between life and death for patients facing critical medical
            situations. Through continued public awareness efforts and support
            for blood donation drives, communities can help sustain this
            essential system and ensure that patients receive the lifesaving
            blood products they require.
          </p>
        </div>
        <hr />
        <div className="Gap"></div>
        <div className="Imageblock">
          <div className="Interimage">
            <img src={Plasma} alt="Blood Donation" />
            <h4>Donate Plasma</h4>
          </div>
          <div className="Interimage">
            <img src={RBC} alt="Blood Donation" />
            <h4>Donate Red Blood Cells</h4>
          </div>
          <div className="Interimage">
            <img src={Platlets} alt="Blood Donation" />
            <h4>Donate Platlets</h4>
          </div>
        </div>
        <div className="Gap"></div>
        <hr />
        <div className="Gap"></div>
        <div className="Container">
          <h3>Make a Donation</h3>
          <div className="form-group">
            <label htmlFor="amount">Donation Amount (ml):</label>
            <input
              type="number"
              id="amount"
              // value={donationAmount}
              // onChange={(e) => setDonationAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="type">Donation Type:</label>
            <select
              id="type"
              // value={donationType}
              // onChange={(e) => setDonationType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="whole blood">Whole Blood</option>
              <option value="plasma">Plasma</option>
              <option value="platelets">Platelets</option>
            </select>
          </div>
          <div className="button-style">
            <button>Donate Now</button>
          </div>
          {/*onClick={handleDonation} to be added*/}
        </div>
      </div>
    </div>
  );
};

export default Donar;
