
// import { decrypt } from "@/app/utils/encrypt";
// import { NextResponse } from "next/server";



// export async function POST(request) {
//   console.log("Received POST request on '/api/response' route.");

//   const formData = await request.text(); // get raw body
//   const params = new URLSearchParams(formData);
//   const encData = params.get("encData");

//   console.log("encData:", encData);

//   const decrypted_data = decrypt(encData);
//   console.log("Decrypted data:", decrypted_data);

//   let jsonData = JSON.parse(decrypted_data);
//   console.log("Parsed JSON data:", jsonData);

//   let resArray = Object.keys(jsonData).map((key) => jsonData[key]);
//   console.log("Response array constructed:", resArray);

//   // if (resArray[0]["responseDetails"]["statusCode"] === "OTS0000") {
//   //   console.log("Transaction successful.");
//   //   return Response.json(resArray);
//   // } else {
//   //   console.log(
//   //     "Transaction failed with status code:",
//   //     resArray[0]["responseDetails"]["statusCode"]
//   //   );
//   //   return Response.json("Transaction failed");
//   // }
//   if (resArray[0]["responseDetails"]["statusCode"] === "OTS0000") {
//     // return NextResponse.redirect("https://localhost:3001/payment/response");
//     const redirectUrl = "http://localhost:3001/payment/response";
//     const response = NextResponse.redirect(redirectUrl);

//     // Set cookie with response data
//     response.cookies.set("transactionResponse", JSON.stringify(resArray), {
//       path: "/",
//       httpOnly: false, // set true if sensitive
//       maxAge: 60 * 5, // 5 minutes
//     });

//     return response;
//   } else {
//     return NextResponse.redirect("http://localhost:3001");
//   }
// }



// import { decrypt } from "@/app/utils/encrypt";
// import { NextResponse } from "next/server";

// export async function POST(request) {
//   try {
//     console.log("Received POST request on '/api/response' route.");

//     const formData = await request.text();
//     const params = new URLSearchParams(formData);
//     const encData = params.get("encData");

//     if (!encData) {
//       console.error("No encData found in request");
//       return NextResponse.json({ error: "Missing encData" }, { status: 400 });
//     }

//     console.log("encData:", encData);

//     const decrypted_data = decrypt(encData);
//     if (!decrypted_data) {
//       console.error("Decryption failed");
//       return NextResponse.json({ error: "Decryption failed" }, { status: 400 });
//     }

//     console.log("Decrypted data:", decrypted_data);

//     let jsonData;
//     try {
//       jsonData = JSON.parse(decrypted_data);
//     } catch (error) {
//       console.error("Failed to parse JSON:", error);
//       return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 });
//     }

//     console.log("Parsed JSON data:", jsonData);

//     let resArray = Object.keys(jsonData).map((key) => jsonData[key]);
//     console.log("Response array constructed:", resArray);

//     if (resArray[0]["responseDetails"]["statusCode"] === "OTS0000") {
//       const redirectUrl = new URL("http://localhost:3001/payment/response");
//       const response = NextResponse.redirect(redirectUrl);

//       // response.cookies.set("transactionResponse", JSON.stringify(resArray), {
//       //   path: "/",
//       //   httpOnly: false,
//       //   maxAge: 60 * 5,
//       // });
//       return response;
//     } else {
//       return NextResponse.redirect(new URL("http://localhost:3001"));
//     }
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }


import { decrypt } from "@/app/utils/encrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    console.log("Received POST request on '/api/response' route.");

    const formData = await request.text();
    const params = new URLSearchParams(formData);
    const encData = params.get("encData");

    if (!encData) {
      console.error("No encData found in request");
      return NextResponse.json({ error: "Missing encData" }, { status: 400 });
    }

    console.log("encData:", encData);

    const decrypted_data = decrypt(encData);
    if (!decrypted_data) {
      console.error("Decryption failed");
      return NextResponse.json({ error: "Decryption failed" }, { status: 400 });
    }

    console.log("Decrypted data:", decrypted_data);

    let jsonData;
    try {
      jsonData = JSON.parse(decrypted_data);
    } catch (error) {
      console.error("Failed to parse JSON:", error);
      return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 });
    }

    console.log("Parsed JSON data:", jsonData);

    let resArray = Object.keys(jsonData).map((key) => jsonData[key]);
    console.log("Response array constructed:", resArray);

    if (resArray[0]["responseDetails"]["statusCode"] === "OTS0000") {
      // Method 1: Use Response.redirect with 302 status (forces GET)
      const response = Response.redirect(
        "http://localhost:3001/payment/response",
        302
      );

      // Set cookie before redirect
      const cookieValue = JSON.stringify(resArray);
      const headers = new Headers(response.headers);
      headers.set(
        "Set-Cookie",
        `transactionResponse=${encodeURIComponent(
          cookieValue
        )}; Path=/; Max-Age=300; HttpOnly=false`
      );

      return new Response(response.body, {
        status: 302,
        statusText: response.statusText,
        headers: headers,
      });
    } else {
      // Redirect to home page on failure
      return Response.redirect("http://localhost:3001/", 302);
    }
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}