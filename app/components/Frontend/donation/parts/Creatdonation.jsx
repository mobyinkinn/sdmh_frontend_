



"use client";
// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   Typography,
//   FormControlLabel,
//   Radio,
//   RadioGroup,
//   FormLabel,
// } from "@mui/material";
// import { useEffect, useState } from "react";

import { useEffect } from "react";

// const DonationForm = ({ token, txnId, merchId }) => {
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
//  useEffect(() => {
//    // Load AtomPaynetz script
//    const cdnScript = document.createElement("script");
//    cdnScript.setAttribute(
//      "src",
//      `https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js?v=${Date.now()}`
//    );

//    cdnScript.onload = () => {
//      console.log("AtomPaynetz script loaded successfully.");

//      // Event listener for AtomPaynetz responses
//      const handleMessage = ({ data }) => {
//        if (data === "cancelTransaction") {
//          console.log("Payment has been cancelled by the user!");
//        }
//        if (data === "sessionTimeout") {
//          console.log("Session Timeout");
//        }
//        if (data.ndpsResponse) {
//          console.log("ndpsResponse response found");
//          console.log(data.ndpsResponse.merchId);
//          console.log(data.ndpsResponse.encData);
//        }
//      };

//      window.addEventListener("message", handleMessage);

//      // Clean up event listener on unmount
//      return () => {
//        window.removeEventListener("message", handleMessage);
//      };
//    };

//    document.head.appendChild(cdnScript);
//  }, []);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const openPay = () => {
//     const options = {
//       atomTokenId: token,
//       merchId: merchId,
//       custEmail: "jatin@mobyink.com",
//       custMobile: "9829231118",
//       returnUrl: "http://localhost:3000", // replace with your return URL
//     };
//     let atom = new AtomPaynetz(options, "uat");
//   };

//   return (
//     <Box
//       sx={{
//         maxWidth: 800,
//         mx: "auto",
//         my: 4,
//         p: 3,
//         border: "1px solid #ccc",
//         borderRadius: 2,
//       }}
//     >
//       <Typography variant="h5" mb={2}>
//         Make a Donation
//       </Typography>
//       <form onSubmit={openPay}>
//         <FormLabel component="legend" sx={{ mb: 1 }}>
//           Select Donation Type
//         </FormLabel>
//         <RadioGroup
//           row
//           name="donationType"
//           value={formData.donationType}
//           onChange={handleChange}
//           sx={{ mb: 3, flexWrap: "wrap" }}
//         >
//           {[
//             "Avedna Ashram",
//             "Help Little Hearts",
//             "Jaipur Foot & Polio Caliper",
//             "Outreach",
//             "SDMH Free Clinic",
//             "Thalassemia Centre",
//           ].map((type) => (
//             <FormControlLabel
//               key={type}
//               value={type}
//               control={<Radio />}
//               label={type}
//               sx={{ width: "50%" }}
//             />
//           ))}
//         </RadioGroup>

//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="amount"
//               label="Amount (INR)"
//               fullWidth
//               required
//               value={formData.amount}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="mobile"
//               label="Mobile Number"
//               fullWidth
//               required
//               value={formData.mobile}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="fname"
//               label="First Name"
//               fullWidth
//               required
//               value={formData.fname}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="lname"
//               label="Last Name"
//               fullWidth
//               required
//               value={formData.lname}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="email"
//               label="Email Address"
//               fullWidth
//               required
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="state"
//               label="State"
//               fullWidth
//               value={formData.state}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="city"
//               label="City"
//               fullWidth
//               value={formData.city}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField
//               name="zip"
//               label="Zip Code"
//               fullWidth
//               value={formData.zip}
//               onChange={handleChange}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               name="address"
//               label="Address"
//               fullWidth
//               multiline
//               rows={2}
//               value={formData.address}
//               onChange={handleChange}
//             />
//           </Grid>
//         </Grid>

//         <Box mt={3}>
//           <Button type="submit" variant="contained" color="primary">
//             Donate Now
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };



// export async function getServerSideProps() {
//   // Fetch token from API
//   const response = await fetch("http://localhost:3000/api/auth");
//   const data = await response.json();
//   console.log(data);

//   const token = data.token;
//   const txnId = data.txnId;
//   const merchId = data.merchId;

//   return {
//     props: {
//       token,
//       txnId,
//       merchId,
//     },
//   };
// }
// export default DonationForm;




const DonationForm = ({ token, txnId, merchId }) => {
  useEffect(() => {
    // Load AtomPaynetz script
    const cdnScript = document.createElement("script");
    cdnScript.setAttribute(
      "src",
      `https://pgtest.atomtech.in/staticdata/ots/js/atomcheckout.js?v=${Date.now()}`
    );

    cdnScript.onload = () => {
      console.log("AtomPaynetz script loaded successfully.");

      // Event listener for AtomPaynetz responses
      const handleMessage = ({ data }) => {
        if (data === "cancelTransaction") {
          console.log("Payment has been cancelled by the user!");
        }
        if (data === "sessionTimeout") {
          console.log("Session Timeout");
        }
        if (data.ndpsResponse) {
          console.log("ndpsResponse response found");
          console.log(data.ndpsResponse.merchId);
          console.log(data.ndpsResponse.encData);
        }
      };

      window.addEventListener("message", handleMessage);

      // Clean up event listener on unmount
      return () => {
        window.removeEventListener("message", handleMessage);
      };
    };

    document.head.appendChild(cdnScript);
  }, []);

  const openPay = () => {
    const options = {
      atomTokenId: token,
      merchId: merchId,
      custEmail: "jatin@mobyink.com",
      custMobile: "9829231118",
      returnUrl: "https://sdmh.in/thank-you", // replace with your return URL
    };
    let atom = new AtomPaynetz(options, "uat");
  };

  return (
    <div className="container my-5">
      <h3>Merchant Shop</h3>
      <p>Transaction Id: {txnId}</p>
      <p>Atom Token Id: {token}</p>
      <p>Pay Rs. 100</p>
      <button className="btn btn-primary" onClick={openPay}>
        Pay Now
      </button>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch token from API
  const response = await fetch("https://sdmh.in/api/auth");
  const data = await response.json();
  console.log(data);

  const token = data.token;
  const txnId = data.txnId;
  const merchId = data.merchId;

  return {
    props: {
      token,
      txnId,
      merchId,
    },
  };
}

export default DonationForm;
