// import SortBy from "../../../ui/SortBy";
// import Filter from "../../../ui/Filter";
// import TableOperations from "../../../ui/TableOperations";
// import { useTpaContext } from "./TpaContext";
// import Button from "@/app/components/ui/Button";

// function TpaTableOperations() {
//   const { filter, setFilter } = useTpaContext();
//   return (
//     <TableOperations>
//       <Filter
//         filterField="status"
//         filter={filter}
//         setFilter={setFilter}
//         options={[
//           { value: "All", label: "All" },
//           { value: "Active", label: "Active" },
//           { value: "Inactive", label: "Inactive" },
//         ]}
//       />

//       <SortBy
//         options={[
//           { value: "startDate-desc", label: "Sort by date (recent first)" },
//           { value: "startDate-asc", label: "Sort by date (earlier first)" },
//           { value: "name-dsc", label: "Sort by name (Z - A)" },
//           { value: "name-asc", label: "Sort by name (A - Z)" },
//         ]}
//       />
//       <Button>Create Tpa</Button>
      
//     </TableOperations>
//   );
// }

// export default TpaTableOperations;



// import { useState } from "react";
// import Modal from "../../../ui/Modal";
// import Button from "@/app/components/ui/Button";
// import TableOperations from "../../../ui/TableOperations";
// import { useTpaContext } from "./TpaContext";
// import { useCreateTpa } from "../useTpa";
// import Filter from "@/app/components/ui/Filter";
// import SortBy from "@/app/components/ui/SortBy";
// import toast from "react-hot-toast";

// function TpaTableOperations() {
//   const { filter, setFilter } = useTpaContext();
//   const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
//   const { mutate: createTpa, isLoading: isCreating } = useCreateTpa();

//   const handleCreateTpa = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     formData.append("status", true);
//     createTpa(
//       {
//         data: formData,
//       },
//       {
//         onSuccess: () => {
//           setIsCreateModalOpen(false);
//           toast.success("TPA created successfully!");
//         },
//         onError: () => {
//           toast.error("Failed to create TPA. Please try again.");
//         },
//       }
//     );

//     setIsCreateModalOpen(false);
//   };

//   return (
//     <TableOperations>
//       <Filter
//         filterField="status"
//         filter={filter}
//         setFilter={setFilter}
//         options={[
//           { value: "All", label: "All" },
//           { value: "Active", label: "Active" },
//           { value: "Inactive", label: "Inactive" },
//         ]}
//       />

//       <SortBy
//         options={[
//           { value: "startDate-desc", label: "Sort by date (recent first)" },
//           { value: "startDate-asc", label: "Sort by date (earlier first)" },
//           { value: "name-dsc", label: "Sort by name (Z - A)" },
//           { value: "name-asc", label: "Sort by name (A - Z)" },
//         ]}
//       />
//       <Modal>
//         <Modal.Open opens="edit">
//           <Button onClick={() => setIsCreateModalOpen(true)}>Create TPA</Button>
//         </Modal.Open>
//         <Modal.Window name="edit">
//           <form onSubmit={handleCreateTpa}>
//             <div>
//               <label htmlFor="name">Name</label>
//               <input type="text" id="name" name="name" required />
//             </div>

//             <div>
//               <label htmlFor="logo">Logo</label>
//               <input type="file" id="logo" name="logo" required />
//             </div>
            

//             <Button type="submit" disabled={isCreating}>
//               {isCreating ? "Creating..." : "Create"}
//             </Button>
//           </form>
//         </Modal.Window>
//       </Modal>
//     </TableOperations>
//   );
// }

// export default TpaTableOperations;


import CreateBannerForm from "@/app/components/features/Banners/CreateBannerForm";
import TableOperations from "../../../ui/TableOperations";
import { useTpaContext } from "./TpaContext";
import Filter from "@/app/components/ui/Filter";
import SortBy from "@/app/components/ui/SortBy";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CreateTpaForm from "@/app/components/features/Tpa/CreateTpaForm";

function TpaTableOperations() {
  const { filter, setFilter } = useTpaContext();
 

  return (
    <TableOperations>
      <Filter
        filterField="status"
        filter={filter}
        setFilter={setFilter}
        options={[
          { value: "All", label: "All" },
          { value: "Active", label: "Active" },
          { value: "Inactive", label: "Inactive" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          { value: "name-dsc", label: "Sort by name (Z - A)" },
          { value: "name-asc", label: "Sort by name (A - Z)" },
        ]}
      />

      <Modal>
        <Modal.Open opens="Tpa-form">
          <Button>Add Tpa</Button>
        </Modal.Open>
        <Modal.Window name="Tpa-form">
          <CreateTpaForm />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default TpaTableOperations;
