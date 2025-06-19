// import Home from "@/app/components/Frontend/donation/parts";

import ClientPaymentComponent from "./ClientPaymentComponent";

// export default function Page(){
//     return <Home />;
// }




// app/payment/page.jsx (or page.js)



async function getPaymentToken() {
  const res = await fetch("https://sdmh.in/api/auth", {
    cache: "no-store",
  });
  console.log("res",res)
  if (!res.ok) throw new Error("Failed to fetch payment token");
  return res.json();
}

export default async function PaymentPage() {
  const data = await getPaymentToken();
  return <ClientPaymentComponent {...data} />;
}
