"use client";
import { useState } from "react";

export default function DonationForm() {
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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRadioChange = (e) => {
    setFormData((prev) => ({ ...prev, donationType: e.target.value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Redirect browser to your backend directly with POST form
  const form = document.createElement("form");
  form.method = "POST";
  form.action = "http://localhost:8000/api/v1/donation/initiate";

  for (const key in formData) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = formData[key];
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();
};

  return (
    <form onSubmit={handleSubmit}>
      <h3>Select Donation</h3>
      {[
        "Avedna Ashram",
        "Help Little Hearts",
        "Jaipur Foot & Polio Caliper",
        "Outreach",
        "SDMH Free Clinic",
        "Thalassemia Centre",
      ].map((type) => (
        <label key={type}>
          <input
            type="radio"
            name="donationType"
            value={type}
            checked={formData.donationType === type}
            onChange={handleRadioChange}
          />
          {type}
        </label>
      ))}

      <input
        name="amount"
        placeholder="Amount"
        type="number"
        onChange={handleChange}
        required
      />
      <input
        name="fname"
        placeholder="First Name"
        type="text"
        onChange={handleChange}
        required
      />
      <input
        name="lname"
        placeholder="Last Name"
        type="text"
        onChange={handleChange}
        required
      />
      <input
        name="mobile"
        placeholder="Mobile No"
        type="tel"
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        onChange={handleChange}
        required
      />
      <input
        name="state"
        placeholder="State"
        type="text"
        onChange={handleChange}
      />
      <input
        name="city"
        placeholder="City"
        type="text"
        onChange={handleChange}
      />
      <input
        name="address"
        placeholder="Address"
        type="text"
        onChange={handleChange}
      />
      <input name="zip" placeholder="Zip" type="text" onChange={handleChange} />

      <button type="submit">Donate Now</button>
    </form>
  );
}




// "use client";
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
// import { useState } from "react";

// const DonationForm = () => {
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

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = document.createElement("form");
//     form.method = "POST";
//     form.action = "http://localhost:8000/api/v1/donation/initiate";

//     for (const key in formData) {
//       const input = document.createElement("input");
//       input.type = "hidden";
//       input.name = key;
//       input.value = formData[key];
//       form.appendChild(input);
//     }

//     document.body.appendChild(form);
//     form.submit();
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

//       <form onSubmit={handleSubmit}>
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

// export default DonationForm;
