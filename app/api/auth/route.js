// import { decrypt, encrypt } from "@/app/utils/encrypt";

// const merchId = "446442";
// const merchPass = "Test@123";
// const prodId = "NSE";
// const Authurl = "https://caller.atomtech.in/ots/aipay/auth"; // this is uat URL only

// export default async function handler(req, res) {
//   if (req.method === "GET") {
//     console.log("GET request received");

//     let txnId = "21343123";
//     let txnDate = "2023-03-10 20:46:00";
//     let amount = "1";
//     let userEmailId = "jatin@mobyink.com";
//     let userContactNo = "9829231118";

//     const jsondata = `{
//       "payInstrument": {
//         "headDetails": {
//           "version": "OTSv1.1",
//           "api": "AUTH",
//           "platform": "FLASH"
//         },
//         "merchDetails": {
//           "merchId": "${merchId}",
//           "userId": "",
//           "password": "${merchPass}",
//           "merchTxnId": "${txnId}",
//           "merchTxnDate": "${txnDate}"
//         },
//         "payDetails": {
//           "amount": "${amount}",
//           "product": "${prodId}",
//           "custAccNo": "213232323",
//           "txnCurrency": "INR"
//         },
//         "custDetails": {
//           "custEmail": "${userEmailId}",
//           "custMobile": "${userContactNo}"
//         },
//         "extras": {
//           "udf1": "udf1",
//           "udf2": "udf2",
//           "udf3": "udf3",
//           "udf4": "udf4",
//           "udf5": "udf5"
//         }
//       }
//     }`;

//     const JSONString = jsondata.toString();
//     console.log("JSONString created:", JSONString);
//     let encDataR = encrypt(JSONString);
//     console.log("Encrypted data ready for sending:", encDataR);

//     try {
//       const response = await fetch(Authurl, {
//         method: "POST",
//         headers: {
//           "cache-control": "no-cache",
//           "content-type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           encData: encDataR,
//           merchId: merchId,
//         }),
//       });

//       if (!response.ok) throw new Error("Network response was not ok");

//       const datas = await response.text();
//       console.log("Response received:", datas);

//       var arr = datas.split("&").map((val) => val);
//       var arrTwo = arr[1].split("=").map((val) => val);

//       var decrypted_data = decrypt(arrTwo[1]);
//       console.log("Decrypted data:", decrypted_data);

//       let jsonData = JSON.parse(decrypted_data);

//       if (jsonData["responseDetails"]["txnStatusCode"] === "OTS0000") {
//         console.log("Transaction successful");
//         res.status(200).json({
//           token: jsonData["atomTokenId"],
//           txnId: txnId,
//           merchId: merchId,
//         });
//       } else {
//         console.log(
//           "Transaction failed with status code:",
//           jsonData["responseDetails"]["txnStatusCode"]
//         );
//         res.status(400).json({
//           error: jsonData["responseDetails"]["txnStatusCode"],
//         });
//       }
//     } catch (error) {
//       console.error("Error in fetch request:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   }

//   if (req.method === "POST") {
//     console.log("POST request received with body:", req.body);

//     var decrypted_data = decrypt(req.body.encData);
//     console.log("Decrypted data:", decrypted_data);

//     let jsonData = JSON.parse(decrypted_data);
//     let respArray = Object.keys(jsonData).map((key) => jsonData[key]);

//     let signature = generateSignature(respArray);
//     console.log("Generated signature:", signature);

//     if (signature === respArray[0]["payDetails"]["signature"]) {
//       if (respArray[0]["responseDetails"]["statusCode"] === "OTS0000") {
//         console.log("Transaction successful");
//         res.status(200).json("Transaction successful");
//       } else {
//         console.log(
//           "Transaction failed with status code:",
//           respArray[0]["responseDetails"]["statusCode"]
//         );
//         res.status(400).json("Transaction failed");
//       }
//     } else {
//       console.log("Signature mismatch");
//       res.status(400).json("Signature mismatched!! Transaction failed.");
//     }
//   }
// }

import { decrypt, encrypt } from "@/app/utils/encrypt";
import { generateSignature } from "@/app/utils/encrypt"; // Make sure you import this if used

const merchId = "446442";
const merchPass = "Test@123";
const prodId = "NSE";
const Authurl = "https://caller.atomtech.in/ots/aipay/auth"; // UAT URL

function generateTxnId() {
  return `TXN${Date.now()}${Math.floor(Math.random() * 10000)}`;
}

// Function to get current date in the required format (yyyy-MM-dd HH:mm:ss)
function getTxnDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
export async function GET(request) {
  console.log("GET request received", request);
const { searchParams } = new URL(request.url);
const amount = searchParams.get("amount") || "1"; // default 1 if not passed
const userEmailId = searchParams.get("email") || "jatin@mobyink.com";
const userContactNo = searchParams.get("mobile") || "9829231118";

  const txnId = generateTxnId();
  const txnDate = getTxnDate();

  const jsondata = `{
    "payInstrument": {
      "headDetails": {
        "version": "OTSv1.1",
        "api": "AUTH",
        "platform": "FLASH"
      },
      "merchDetails": {
        "merchId": "${merchId}",
        "userId": "",
        "password": "${merchPass}",
        "merchTxnId": "${txnId}",
        "merchTxnDate": "${txnDate}"
      },
      "payDetails": {
        "amount": "${amount}",
        "product": "${prodId}",
        "custAccNo": "213232323",
        "txnCurrency": "INR"
      },
      "custDetails": {
        "custEmail": "${userEmailId}",
        "custMobile": "${userContactNo}"
      },
      "extras": {
        "udf1": "udf1",
        "udf2": "udf2",
        "udf3": "udf3",
        "udf4": "udf4",
        "udf5": "udf5"
      }
    }
  }`;

  const JSONString = jsondata.toString();
  console.log("JSONString created:", JSONString);
  let encDataR = encrypt(JSONString);
  console.log("Encrypted data ready for sending:", encDataR);

  try {
    const response = await fetch(Authurl, {
      method: "POST",
      headers: {
        "cache-control": "no-cache",
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        encData: encDataR,
        merchId: merchId,
      }),
    });

    if (!response.ok) {
      console.error("Network response was not ok:", response.statusText);
      return new Response(
        JSON.stringify({ error: "Network response was not ok" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const datas = await response.text();
    console.log("Response received:", datas);

    var arr = datas.split("&").map((val) => val);
    var arrTwo = arr[1].split("=").map((val) => val);

    var decrypted_data = decrypt(arrTwo[1]);
    console.log("Decrypted data:", decrypted_data);

    let jsonData = JSON.parse(decrypted_data);

    if (jsonData["responseDetails"]["txnStatusCode"] === "OTS0000") {
      console.log("Transaction successful");
      return new Response(
        JSON.stringify({
          token: jsonData["atomTokenId"],
          txnId: txnId,
          merchId: merchId,
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      console.log(
        "Transaction failed with status code:",
        jsonData["responseDetails"]["txnStatusCode"]
      );
      return new Response(
        JSON.stringify({
          error: jsonData["responseDetails"]["txnStatusCode"],
        }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error in fetch request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(request) {
  const body = await request.json();
  console.log("POST request received with body:", body);

  try {
    var decrypted_data = decrypt(body.encData);
    console.log("Decrypted data:", decrypted_data);

    let jsonData = JSON.parse(decrypted_data);
    let respArray = Object.keys(jsonData).map((key) => jsonData[key]);

    let signature = generateSignature(respArray);
    console.log("Generated signature:", signature);

    if (signature === respArray[0]["payDetails"]["signature"]) {
      if (respArray[0]["responseDetails"]["statusCode"] === "OTS0000") {
        console.log("Transaction successful");
        return new Response(JSON.stringify("Transaction successful"), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } else {
        console.log(
          "Transaction failed with status code:",
          respArray[0]["responseDetails"]["statusCode"]
        );
        return new Response(JSON.stringify("Transaction failed"), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
    } else {
      console.log("Signature mismatch");
      return new Response(
        JSON.stringify("Signature mismatched!! Transaction failed."),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(JSON.stringify("Internal Server Error"), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
