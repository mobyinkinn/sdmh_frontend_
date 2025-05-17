// import Home from "../components/Frontend/home/Home";

import Home from "../components/Frontend/home/Home";


export const dynamic = "force-dynamic"; // Optional: remove this if not needed

export async function generateMetadata() {
  return {
    title: "Santokba Durlabhji Memorial Hospital - SDMH",
    description:
      "Trusted multispeciality hospital offering advanced medical care with compassion.",
    keywords:
      "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
 other: {
      "google-site-verification": "QTcmfuX31VXilPv-HlbFdsiCkAOoSPCKra2Tz-y9CtM",
    },
  };
}

export default async function Homepage() {
  return (
    <>
      <Home />
    </>
  );
}
