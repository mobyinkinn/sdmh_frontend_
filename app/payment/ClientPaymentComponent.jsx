"use client";
import { useEffect } from "react";

export default function ClientPaymentComponent({ token, txnId, merchId }) {
  useEffect(() => {
    const cdnScript = document.createElement("script");
    cdnScript.src = `https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js?v=${Date.now()}`;
    cdnScript.onload = () => {
      console.log("AtomPaynetz script loaded");
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

  const openPay = () => {
    const options = {
      atomTokenId: token,
      merchId,
      custEmail: "jatin@mobyink.com",
      custMobile: "9829231118",
      returnUrl: "http://localhost:3000/donation",
    };
    new AtomPaynetz(options, "uat");
  };

  return (
    <div>
      <h3>Merchant Shop</h3>
      <p>Transaction Id: {txnId}</p>
      <p>Atom Token Id: {token}</p>
      <p>Pay Rs. 100</p>
      <button onClick={openPay}>Pay Now</button>
    </div>
  );
}
