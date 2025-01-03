// "use client";
// import { useState } from "react";
// import { Stack, Typography } from "@mui/material";
// import { ParaNormal } from "@/app/styledComponents/frontend/Para";

// function CollapsibleSection({ title, items }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSection = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Stack
//       sx={{
//         borderBottom: "1px solid #ccc",
//         padding: "5px 0",
//       }}
//     >
//       <Stack
//         direction="row"
//         justifyContent="space-between"
//         alignItems="center"
//         onClick={toggleSection}
//         sx={{ cursor: "pointer" }}
//       >
//         <Typography fontWeight="bold" fontSize={{md:"25px", smmm:"20px", sm:"16px"}}>{title}</Typography>
//         <Typography fontWeight="bold" fontSize={"2rem"} lineHeight={0.6}>{isOpen ? "-" : "+"}</Typography>
//       </Stack>
//       {isOpen && (
//         <Stack mt={2} gap={1} alignItems={"start"}>
//           {items.map((el) => (
//             <ParaNormal key={el.id} fontSize={{md:"1.2rem", smm:"1rem", sm:"0.8rem"}}>{el}</ParaNormal>
//           ))}
//         </Stack>
//       )}
//     </Stack>
//   );
// }

// export default CollapsibleSection;


"use client";

import { useState } from "react";
import { Stack, Typography } from "@mui/material";
import { ParaNormal } from "@/app/styledComponents/frontend/Para";
import { useRouter } from "next/navigation";

function CollapsibleSection({ title, items, isOpen, onClick }) {
    const router = useRouter(); // Initialize Next.js router

    const handleItemClick = (path) => {
      if (path) {
        router.push(path); // Navigate to the desired path
      }
    };

  return (
    <Stack
      sx={{
        borderBottom: "1px solid #ccc",
        padding: "5px 0",
      }}
    >
      {/* Title and Toggle Button */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        onClick={onClick}
        sx={{ cursor: "pointer" }}
      >
        <Typography
          fontWeight="bold"
          fontSize={{ md: "25px", smm: "20px", sm: "16px" }}
        >
          {title}
        </Typography>
        <Typography fontWeight="bold" fontSize={"2rem"} lineHeight={0.6}>
          {isOpen ? "-" : "+"}
        </Typography>
      </Stack>

      {/* Items (Shown only if isOpen is true) */}
      {isOpen && (
        <Stack mt={2} gap={1} alignItems={"start"}>
          {items.map((el) => (
            <ParaNormal
              key={el.id}
              fontSize={{ md: "1.2rem", smm: "1rem", sm: "0.8rem" }}
              sx={{ cursor: "pointer" }}
              onClick={() => handleItemClick(el)}
            >
              {el}
            </ParaNormal>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default CollapsibleSection;
