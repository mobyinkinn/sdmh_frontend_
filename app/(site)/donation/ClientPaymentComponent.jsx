// "use client";
// import { useEffect } from "react";

// export default function ClientPaymentComponent({ token, txnId, merchId }) {
//   useEffect(() => {
//     const cdnScript = document.createElement("script");
//     cdnScript.src = `https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js?v=${Date.now()}`;
//     cdnScript.onload = () => {
//       console.log("AtomPaynetz script loaded");
//       const handleMessage = ({ data }) => {
//         if (data === "cancelTransaction") {
//           console.log("Payment cancelled by user");
//         } else if (data === "sessionTimeout") {
//           console.log("Session timeout");
//         } else if (data?.ndpsResponse) {
//           console.log("Payment response:", data.ndpsResponse);
//         }
//       };
//       window.addEventListener("message", handleMessage);
//       return () => window.removeEventListener("message", handleMessage);
//     };
//     document.head.appendChild(cdnScript);
//   }, []);

//   const openPay = () => {
//     const options = {
//       atomTokenId: token,
//       merchId,
//       custEmail: "jatin@mobyink.com",
//       custMobile: "9829231118",
//       returnUrl: "http://localhost:3000/donation",
//     };
//     new AtomPaynetz(options, "uat");
//   };

//   return (
//     <div>
//       <h3>Merchant Shop</h3>
//       <p>Transaction Id: {txnId}</p>
//       <p>Atom Token Id: {token}</p>
//       <p>Pay Rs. 100</p>
//       <button onClick={openPay}>Pay Now</button>
//     </div>
//   );
// }

// "use client";

// import { useEffect, useState } from "react";

// export default function ClientPaymentComponent({ token, txnId, merchId }) {
//   const [formData, setFormData] = useState({
//     donationType: "Avedna Ashram",
//     amount: "",
//     fname: "",
//     lname: "",
//     mobile: "",
//     email: "",
//     state: "",
//     city: "",
//     address: "",
//     zip: "",
//   });

//   useEffect(() => {
//     const cdnScript = document.createElement("script");
//     cdnScript.src = `https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js?v=${Date.now()}`;
//     cdnScript.onload = () => {
//       console.log("AtomPaynetz script loaded");
//       const handleMessage = ({ data }) => {
//         if (data === "cancelTransaction") {
//           console.log("Payment cancelled by user");
//         } else if (data === "sessionTimeout") {
//           console.log("Session timeout");
//         } else if (data?.ndpsResponse) {
//           console.log("Payment response:", data.ndpsResponse);
//         }
//       };
//       window.addEventListener("message", handleMessage);
//       return () => window.removeEventListener("message", handleMessage);
//     };
//     document.head.appendChild(cdnScript);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const openPay = (e) => {
//     e.preventDefault();

//     if (!formData.amount || !formData.email || !formData.mobile) {
//       alert("Please fill in required fields: Amount, Email, Mobile");
//       return;
//     }

//     const options = {
//       atomTokenId: token,
//       merchId,
//       custEmail: formData.email,
//     custMobile: formData.mobile,
//     amount: formData.amount,
//       // You can add more fields here if your payment gateway supports them
//       returnUrl: "http://localhost:3000/donation",
//     };
//     new AtomPaynetz(options, "uat");
//   };

//   return (
//     <div
//       style={{
//         maxWidth: 600,
//         margin: "auto",
//         padding: 20,
//         border: "1px solid #ddd",
//         borderRadius: 8,
//       }}
//     >
//       <h3>Make a Donation</h3>
//       <form onSubmit={openPay}>
//         <label>
//           Donation Type:
//           <select
//             name="donationType"
//             value={formData.donationType}
//             onChange={handleChange}
//             style={{ width: "100%", margin: "8px 0" }}
//           >
//             {[
//               "Avedna Ashram",
//               "Help Little Hearts",
//               "Jaipur Foot & Polio Caliper",
//               "Outreach",
//               "SDMH Free Clinic",
//               "Thalassemia Centre",
//             ].map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>
//         </label>

//         <label>
//           Amount (INR)*:
//           <input
//             type="number"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             required
//             style={{ width: "100%", margin: "8px 0" }}
//           />
//         </label>

//         <label>
//           First Name*:
//           <input
//             type="text"
//             name="fname"
//             value={formData.fname}
//             onChange={handleChange}
//             required
//             style={{ width: "100%", margin: "8px 0" }}
//           />
//         </label>

//         <label>
//           Last Name*:
//           <input
//             type="text"
//             name="lname"
//             value={formData.lname}
//             onChange={handleChange}
//             required
//             style={{ width: "100%", margin: "8px 0" }}
//           />
//         </label>

//         <label>
//           Mobile*:
//           <input
//             type="tel"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//             style={{ width: "100%", margin: "8px 0" }}
//           />
//         </label>

//         <label>
//           Email*:
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             style={{ width: "100%", margin: "8px 0" }}
//           />
//         </label>

//         <label>
//           State:
//           <input
//             type="text"
//             name="state"
//             value={formData.state}
//             onChange={handleChange}
//             style={{ width: "100%", margin: "8px 0" }}
//           />
//         </label>

//         <label>
//           City:
//           <input
//             type="text"
//             name="city"
//             value={formData.city}
//             onChange={handleChange}
//             style={{ width: "100%", margin: "8px 0" }}
//           />
//         </label>

//         <label>
//           Zip Code:
//           <input
//             type="text"
//             name="zip"
//             value={formData.zip}
//             onChange={handleChange}
//             style={{ width: "100%", margin: "8px 0" }}
//           />
//         </label>

//         <label>
//           Address:
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             rows={3}
//             style={{ width: "100%", margin: "8px 0" }}
//           />
//         </label>

//         <button
//           type="submit"
//           style={{ marginTop: 16, padding: "10px 20px", fontSize: 16 }}
//         >
//           Donate & Pay Now
//         </button>
//       </form>

//       <div style={{ marginTop: 20 }}>
//         <p>
//           <strong>Transaction Id:</strong> {txnId}
//         </p>
//         <p>
//           <strong>Atom Token Id:</strong> {token}
//         </p>
//       </div>
//     </div>
//   );
// }






"use client";

import Footer from "@/app/components/Frontend/footer/Footer";
import Navbar from "@/app/components/Frontend/navbar/Nav";
import { useEffect, useState } from "react";

export default function ClientPaymentComponent() {
  const [formData, setFormData] = useState({
    donationType: "Avedna Ashram",
    amount: "",
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    state: "",
    city: "",
    address: "",
    zip: "",
  });

  const [paymentData, setPaymentData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cdnScript = document.createElement("script");
    cdnScript.src = `https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js?v=${Date.now()}`;
    cdnScript.onload = () => {
      const handleMessage = ({ data }) => {
        if (data === "cancelTransaction") {
          console.log("Payment cancelled by user");
        } else if (data === "sessionTimeout") {
          console.log("Session timeout");
        } else if (data?.ndpsResponse) {
          console.log("Payment response:", data.ndpsResponse);
        }
      };
      window.addEventListener("message", handleMessage);
      return () => window.removeEventListener("message", handleMessage);
    };
    document.head.appendChild(cdnScript);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.amount || !formData.email || !formData.mobile) {
      alert("Please fill required fields: Amount, Email, Mobile");
      return;
    }

    setLoading(true);
    try {
      const params = new URLSearchParams({
        amount: formData.amount,
        email: formData.email,
        mobile: formData.mobile,
      });

      const res = await fetch(`/api/auth?${params.toString()}`, {
        method: "GET",
      });

      if (!res.ok) {
        const err = await res.json();
        alert(`Error fetching payment token: ${err.error || "Unknown error"}`);
        setLoading(false);
        return;
      }

      const data = await res.json();
      setPaymentData(data);

      // Open payment gateway
      const options = {
        atomTokenId: data.token,
        merchId: data.merchId,
        custEmail: formData.email,
        custMobile: formData.mobile,
        amount: formData.amount,
        returnUrl: "https://sdmh.in/thank-you", // change as needed
      };

      new AtomPaynetz(options, "uat");
    } catch (error) {
      alert("Failed to initiate payment. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar/>
      <div
        style={{
          maxWidth: 600,
          margin: "auto",
          padding: 20,
          border: "1px solid #ddd",
          borderRadius: 8,
        }}
      >
        <h3>Make a Donation</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Donation Type:
            <select
              name="donationType"
              value={formData.donationType}
              onChange={handleChange}
              style={{ width: "100%", margin: "8px 0" }}
            >
              {[
                "Avedna Ashram",
                "Help Little Hearts",
                "Jaipur Foot & Polio Caliper",
                "Outreach",
                "SDMH Free Clinic",
                "Thalassemia Centre",
              ].map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Amount (INR)*:
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              style={{ width: "100%", margin: "8px 0" }}
            />
          </label>

          <label>
            First Name*:
            <input
              type="text"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              required
              style={{ width: "100%", margin: "8px 0" }}
            />
          </label>

          <label>
            Last Name*:
            <input
              type="text"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              required
              style={{ width: "100%", margin: "8px 0" }}
            />
          </label>

          <label>
            Mobile*:
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              style={{ width: "100%", margin: "8px 0" }}
            />
          </label>

          <label>
            Email*:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", margin: "8px 0" }}
            />
          </label>

          <label>
            State:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              style={{ width: "100%", margin: "8px 0" }}
            />
          </label>

          <label>
            City:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              style={{ width: "100%", margin: "8px 0" }}
            />
          </label>

          <label>
            Zip Code:
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              style={{ width: "100%", margin: "8px 0" }}
            />
          </label>

          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              style={{ width: "100%", margin: "8px 0" }}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            style={{ marginTop: 16, padding: "10px 20px", fontSize: 16 }}
          >
            {loading ? "Processing..." : "Donate & Pay Now"}
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
}
