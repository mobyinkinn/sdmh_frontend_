// import React from 'react'
// import Navbar from '../navbar/Nav'
// import Footer from '../footer/Footer'
// import MobileFooter from '../footer/MobileFooter';

// const ThankYou = () => {
//   return (
//     <>
//       <Navbar />
//       <div>ThankYou</div>
//       <Footer />
//       <MobileFooter/>
//     </>
//   );
// }

// export default ThankYou


"use client";

import { useEffect, useState } from "react";
import Navbar from "../navbar/Nav";
import Footer from "../footer/Footer";
import MobileFooter from "../footer/MobileFooter";

export default function ThankYouPage() {
  const [txnId, setTxnId] = useState(null);

  useEffect(() => {
    try {
      const url = new URL(window.location.href);
      const txn = url.searchParams.get("txnId");
      setTxnId(txn);
    } catch (err) {
      console.error("Invalid redirect URL:", err);
    }
  }, []);

  return (
    <>    
    <Navbar/>
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Thank You for Your Donation</h1>
      {txnId && <p>Your transaction ID: {txnId}</p>}
    </div>
    <Footer/>
    <MobileFooter/>
    </>
  );
}
