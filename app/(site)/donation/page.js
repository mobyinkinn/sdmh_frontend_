import ClientPaymentComponent from "./ClientPaymentComponent";

async function getPaymentToken() {
  const res = await fetch("http://localhost:3001/api/auth", {
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
