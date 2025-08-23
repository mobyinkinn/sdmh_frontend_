// "use client";
// import { useEffect, useState } from "react";

// export default function PaymentResponsePage() {
//   const [receipt, setReceipt] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Debugging: Log the full URL and encData
//     console.log("Window Location:", window.location);
//     const encData = new URLSearchParams(window.location.search).get("encData");
//     console.log("encData:", encData);

//     if (!encData) {
//       setError("No payment data found.");
//       setLoading(false);
//       return;
//     }

//     fetch("/api/response", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ encData }),
//     })
//       .then(async (res) => {
//         const data = await res.json();
//         if (!res.ok) {
//           throw new Error(data.error || "Something went wrong");
//         }
//         setReceipt(data);
//       })
//       .catch((err) => {
//         console.error("Payment receipt error:", err);
//         setError("Failed to load payment details.");
//       })
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div style={{ maxWidth: 600, margin: "4rem auto", padding: 24 }}>
//       <h1>Payment Receipt</h1>

//       {loading && <p>Loading...</p>}

//       {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

//       {receipt && (
//         <div
//           style={{
//             background: "#f4f4f4",
//             padding: "1.5rem",
//             borderRadius: "8px",
//             marginTop: "1rem",
//           }}
//         >
//           <p>
//             <strong>Status:</strong> {receipt.status}
//           </p>
//           <p>
//             <strong>Transaction ID:</strong>{" "}
//             {receipt.details?.payDetails?.atomTxnId || "N/A"}
//           </p>
//           <p>
//             <strong>Merchant Txn ID:</strong>{" "}
//             {receipt.details?.merchDetails?.merchTxnId || "N/A"}
//           </p>
//           <p>
//             <strong>Amount:</strong> ₹
//             {receipt.details?.payDetails?.totalAmount ||
//               receipt.details?.payDetails?.amount}
//           </p>
//           <p>
//             <strong>Date:</strong> {receipt.details?.merchDetails?.merchTxnDate}
//           </p>
//           <p>
//             <strong>Email:</strong> {receipt.details?.custDetails?.custEmail}
//           </p>
//           <p>
//             <strong>Mobile:</strong> {receipt.details?.custDetails?.custMobile}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }





// export default function PaymentResponsePage() {

 
//   return (
//     <div style={{ maxWidth: 600, margin: "4rem auto", padding: 24 }}>
//       <h1>Payment Receipt</h1>

//     </div>
//   );
// }



// import { cookies } from "next/headers";

// export default async function PaymentResponsePage() {
//   const cookieStore = await cookies();
//   console.log("cookieStore", cookieStore);
//   // const transactionData = cookieStore.get("transactionResponse");
//   // let response = null;

//   // if (transactionData) {
//   //   try {
//   //     response = JSON.parse(transactionData.value);
//   //   } catch (err) {
//   //     console.error("Failed to parse cookie:", err);
//   //   }
//   // }

//   return (
//     <div style={{ maxWidth: 600, margin: "4rem auto", padding: 24 }}>
//       <h1>Payment Receipt</h1>
//       {/* {response ? (
//         <pre>{JSON.stringify(response, null, 2)}</pre>
//       ) : (
//         <p>No transaction data found.</p>
//       )} */}
//     </div>
//   );
// }




import { cookies } from "next/headers";

export default async function PaymentResponsePage() {
  let response = null;
  let error = null;

  try {
    const cookieStore = await cookies();
    console.log("cookieStore", cookieStore);

    const transactionData = cookieStore.get("transactionResponse");
    console.log("transactionData cookie:", transactionData);

    if (transactionData && transactionData.value) {
      try {
        response = JSON.parse(transactionData.value);
        console.log("Parsed transaction response:", response);
      } catch (parseError) {
        console.error("Failed to parse cookie:", parseError);
        error = "Failed to parse transaction data";
      }
    } else {
      console.log("No transaction data found in cookies");
      error = "No transaction data found";
    }
  } catch (cookieError) {
    console.error("Error accessing cookies:", cookieError);
    error = "Failed to access transaction data";
  }

  return (
    <div style={{ maxWidth: 600, margin: "4rem auto", padding: 24 }}>
      <h1>Payment Receipt</h1>

      {error ? (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#fee",
            border: "1px solid #fcc",
            borderRadius: "4px",
            color: "#c00",
          }}
        >
          <p>Error: {error}</p>
        </div>
      ) : response ? (
        <div>
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#efe",
              border: "1px solid #cfc",
              borderRadius: "4px",
              marginBottom: "1rem",
            }}
          >
            <h2>Transaction Successful!</h2>
            <p>
              <strong>Status:</strong>{" "}
              {response[0]?.responseDetails?.statusCode}
            </p>
            <p>
              <strong>Message:</strong> {response[0]?.responseDetails?.message}
            </p>
            <p>
              <strong>Amount:</strong> ₹{response[0]?.payDetails?.amount}
            </p>
            <p>
              <strong>Transaction ID:</strong>{" "}
              {response[0]?.payDetails?.atomTxnId}
            </p>
            <p>
              <strong>Merchant Transaction ID:</strong>{" "}
              {response[0]?.merchDetails?.merchTxnId}
            </p>
          </div>

          <details style={{ marginTop: "2rem" }}>
            <summary style={{ cursor: "pointer", fontWeight: "bold" }}>
              View Full Transaction Details
            </summary>
            <pre
              style={{
                backgroundColor: "#f5f5f5",
                padding: "1rem",
                borderRadius: "4px",
                overflow: "auto",
                fontSize: "12px",
              }}
            >
              {JSON.stringify(response, null, 2)}
            </pre>
          </details>
        </div>
      ) : (
        <div
          style={{
            padding: "1rem",
            backgroundColor: "#fff3cd",
            border: "1px solid #ffeaa7",
            borderRadius: "4px",
          }}
        >
          <p>Loading transaction data...</p>
        </div>
      )}
    </div>
  );
}