// import Home from "../components/Frontend/home/Home";

import Home from "../components/Frontend/home/Home";


// export default function Homepage() {
//   return <Home />;
// }



export const dynamic = "force-dynamic"; // Optional: remove this if not needed

// ✅ Hardcoded metadata
export async function generateMetadata() {
  return {
    title: "Santokba Durlabji Memorial Hospital - SDMH",
    description:
      "Trusted multispeciality hospital offering advanced medical care with compassion.",
    keywords:
      "SDMH, Jaipur hospital, best hospital in Rajasthan, multispeciality healthcare",
  };
}

export default async function Homepage() {
  return (
    <>
      <Home />
    </>
  );
}
