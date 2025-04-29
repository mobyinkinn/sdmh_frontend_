// import React, { useState, useEffect } from "react";
// import {
//   useDoctors,
//   useUpdateDoctorsOrder,
// } from "../../admin/doctors/parts/useDoctor"; // Assuming you already have these hooks for doctors
// import SpinnerMini from "../../ui/SpinnerMini";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Select from "@/app/components/ui/Select"; // For department selection
// import toast from "react-hot-toast";
// import { useDepartment } from "../../admin/departments/parts/useDepartment";

// const NewOrderform = () => {
//   const { data: departmentsData, isLoading: isLoadingDepartments } =
//     useDepartment(); // Fetch all departments
//   const { data: doctorsData, isLoading: isLoadingDoctors } = useDoctors(); // Fetch doctors
//   const { updateDoctorOrder, isOrderUpdating } = useUpdateDoctorsOrder();
//   const [selectedDepartmentId, setSelectedDepartmentId] = useState(""); // Store selected department ID
//   const [doctors, setDoctors] = useState([]); // Store doctors associated with selected department

//   // Handle department selection change
//   const handleDepartmentChange = (selectedOption) => {
//     setSelectedDepartmentId(selectedOption.value);
//   };

//   // Handle form submission to fetch doctors for the selected department
//   const handleDepartmentSubmit = () => {
//     if (!selectedDepartmentId) {
//       toast.error("Please select a department.");
//       return;
//     }

//     // Assuming you fetch doctors based on the selected department ID
//     const selectedDepartment = departmentsData.find(
//       (dept) => dept._id === selectedDepartmentId
//     );
//     if (selectedDepartment && selectedDepartment.doctors) {
//       setDoctors(selectedDepartment.doctors); // Set doctors data for the selected department
//     } else {
//       toast.error("No doctors found for the selected department.");
//     }
//   };

//   // Handle drag-and-drop reorder of doctors
//   const handleDragEnd = (result) => {
//     if (!result.destination) return; // If the drop was outside valid destination, return

//     const sourceIndex = result.source.index;
//     const destIndex = result.destination.index;

//     // Reorder the doctors array
//     const reorderedDoctors = [...doctors];
//     const [removedDoctor] = reorderedDoctors.splice(sourceIndex, 1);
//     reorderedDoctors.splice(destIndex, 0, removedDoctor);

//     // Update the order state
//     const updatedDoctors = reorderedDoctors.map((doctor, index) => ({
//       ...doctor,
//       order: index,
//     }));

//     setDoctors(updatedDoctors);

//     // Prepare updated order data to send to the server
//     const updatedOrder = updatedDoctors.map((doctor, index) => ({
//       id: doctor._id,
//       order: index.toString(),
//     }));

//     updateDoctorOrder(updatedOrder); // Send updated order to API
//   };

//   if (isLoadingDepartments || isLoadingDoctors || isOrderUpdating)
//     return <SpinnerMini />;
//   if (!doctors.length)
//     return <div>No doctors available for the selected department.</div>;

//   return (
//     <div>
//       {/* Dropdown to select department */}
//       <Select
//         options={departmentsData?.map((dept) => ({
//           value: dept._id,
//           label: dept.name,
//         }))}
//         onChange={handleDepartmentChange}
//         placeholder="Select Department"
//       />
//       <button onClick={handleDepartmentSubmit}>Fetch Doctors</button>

//       {/* Show Doctors After Department is Selected */}
//       {selectedDepartmentId && (
//         <DragDropContext onDragEnd={handleDragEnd}>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="doctors table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Doctor Name</TableCell>
//                   <TableCell>Order</TableCell>
//                 </TableRow>
//               </TableHead>
//               <Droppable droppableId="doctors-list" type="DOCTOR">
//                 {(provided, snapshot) => (
//                   <TableBody
//                     ref={provided.innerRef}
//                     {...provided.droppableProps}
//                     sx={{
//                       backgroundColor: snapshot.isDraggingOver
//                         ? "#f0f0f0"
//                         : "inherit",
//                     }}
//                   >
//                     {doctors.map((doctor, index) => (
//                       <Draggable
//                         key={doctor._id}
//                         draggableId={doctor._id}
//                         index={index}
//                       >
//                         {(provided, snapshot) => (
//                           <TableRow
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             sx={{
//                               "&:last-child td, &:last-child th": { border: 0 },
//                               backgroundColor: snapshot.isDragging
//                                 ? "#e0e0e0"
//                                 : "inherit",
//                               cursor: "grab",
//                               "&:hover": { backgroundColor: "#f5f5f5" },
//                             }}
//                           >
//                             <TableCell component="th" scope="row">
//                               {doctor.name}
//                             </TableCell>
//                             <TableCell>{doctor.order}</TableCell>
//                           </TableRow>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </TableBody>
//                 )}
//               </Droppable>
//             </Table>
//           </TableContainer>
//         </DragDropContext>
//       )}
//     </div>
//   );
// };

// export default NewOrderform;

// import React, { useState, useEffect } from "react";
// import { useDepartment } from "../../admin/departments/parts/useDepartment"; // Fetch departments
// import { useDoctors, useUpdateDoctorsOrder } from "../../admin/doctors/parts/useDoctor"; // Fetch doctors
// import SpinnerMini from "../../ui/SpinnerMini";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Select from "@/app/components/ui/Select"; // Department selection dropdown
// import toast from "react-hot-toast";

// const NewOrderform = () => {
//   const { data: departmentsData, isLoading: isLoadingDepartments } =
//     useDepartment(); // Fetch all departments
//   const [selectedDepartmentId, setSelectedDepartmentId] = useState(""); // Department ID state
//   const [doctors, setDoctors] = useState([]); // Doctors state
//   const { isLoading: isLoadingDoctors, data: doctorsData } =
//     useDoctors(selectedDepartmentId); // Fetch doctors for selected department
//   const { updateDoctorOrder, isOrderUpdating } = useUpdateDoctorsOrder();

//   // Handle department change
//   const handleDepartmentChange = (selectedOption) => {
//     console.log("Department selected:", selectedOption);
//     setSelectedDepartmentId(selectedOption.value); // Set selected department ID
//   };

//   // Handle form submit to fetch doctors
//   const handleDepartmentSubmit = () => {
//     if (!selectedDepartmentId) {
//       toast.error("Please select a department.");
//       return;
//     }

//     // Fetch doctors for the selected department
//     const selectedDepartment = departmentsData.find(
//       (dept) => dept._id === selectedDepartmentId
//     );

//     if (selectedDepartment && selectedDepartment.doctors) {
//       setDoctors(selectedDepartment.doctors); // Set doctors from the selected department
//     } else {
//       toast.error("No doctors found for the selected department.");
//     }
//   };

//   // Handle drag-and-drop reordering of doctors
//   const handleDragEnd = (result) => {
//     if (!result.destination) return;

//     const sourceIndex = result.source.index;
//     const destIndex = result.destination.index;

//     const reorderedDoctors = [...doctors];
//     const [removedDoctor] = reorderedDoctors.splice(sourceIndex, 1);
//     reorderedDoctors.splice(destIndex, 0, removedDoctor);

//     const updatedDoctors = reorderedDoctors.map((doctor, index) => ({
//       ...doctor,
//       order: index,
//     }));

//     setDoctors(updatedDoctors);

//     const updatedOrder = updatedDoctors.map((doctor, index) => ({
//       id: doctor._id,
//       order: index.toString(),
//     }));

//     updateDoctorOrder(updatedOrder); // Send updated order to the backend
//   };

//   useEffect(() => {
//     console.log("Departments Data:", departmentsData);
//     console.log("Selected Department ID:", selectedDepartmentId);
//     console.log("Doctors Data:", doctorsData);
//   }, [departmentsData, selectedDepartmentId, doctorsData]);

//   if (isLoadingDepartments || isLoadingDoctors || isOrderUpdating)
//     return <SpinnerMini />;
//   if (!doctors.length)
//     return <div>No doctors available for the selected department.</div>;

//   return (
//     <>
//       <Select
//         options={departmentsData?.map((dept) => ({
//           value: dept._id,
//           label: dept.name,
//         }))}
//         onChange={handleDepartmentChange}
//         placeholder="Select Department"
//       />
//       <button onClick={handleDepartmentSubmit}>Fetch Doctors</button>
//       <div>
//         {/* Department Select Dropdown */}

//         {/* Show Doctors After Department is Selected */}
//         {selectedDepartmentId && (
//           <DragDropContext onDragEnd={handleDragEnd}>
//             <TableContainer component={Paper}>
//               <Table sx={{ minWidth: 650 }} aria-label="doctors table">
//                 <TableHead>
//                   <TableRow>
//                     <TableCell>Doctor Name</TableCell>
//                     <TableCell>Order</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <Droppable droppableId="doctors-list" type="DOCTOR">
//                   {(provided, snapshot) => (
//                     <TableBody
//                       ref={provided.innerRef}
//                       {...provided.droppableProps}
//                       sx={{
//                         backgroundColor: snapshot.isDraggingOver
//                           ? "#f0f0f0"
//                           : "inherit",
//                       }}
//                     >
//                       {doctors.map((doctor, index) => (
//                         <Draggable
//                           key={doctor._id}
//                           draggableId={doctor._id}
//                           index={index}
//                         >
//                           {(provided, snapshot) => (
//                             <TableRow
//                               ref={provided.innerRef}
//                               {...provided.draggableProps}
//                               {...provided.dragHandleProps}
//                               sx={{
//                                 "&:last-child td, &:last-child th": {
//                                   border: 0,
//                                 },
//                                 backgroundColor: snapshot.isDragging
//                                   ? "#e0e0e0"
//                                   : "inherit",
//                                 cursor: "grab",
//                                 "&:hover": { backgroundColor: "#f5f5f5" },
//                               }}
//                             >
//                               <TableCell component="th" scope="row">
//                                 {doctor.name}
//                               </TableCell>
//                               <TableCell>{doctor.order}</TableCell>
//                             </TableRow>
//                           )}
//                         </Draggable>
//                       ))}
//                       {provided.placeholder}
//                     </TableBody>
//                   )}
//                 </Droppable>
//               </Table>
//             </TableContainer>
//           </DragDropContext>
//         )}
//       </div>
//     </>
//   );
// };

// export default NewOrderform;




import React, { useState, useEffect } from "react";
import { useDepartment } from "../../admin/departments/parts/useDepartment"; // Fetch departments
import {
    useDoctorById,
  useDoctors,
  useUpdateDoctorsOrder,
} from "../../admin/doctors/parts/useDoctor"; // Fetch doctors
import SpinnerMini from "../../ui/SpinnerMini";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Select from "@/app/components/ui/Select"; // Department selection dropdown
import toast from "react-hot-toast";

const NewOrderform = () => {
  const { data: departmentsData, isLoading: isLoadingDepartments } =
    useDepartment(); // Fetch all departments
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(
    "67c0318cd797f40db8325ca0"
  ); // Department ID state
  const [doctors, setDoctors] = useState([]); // Doctors state

    const { data: doctorsData, isLoading: isLoadingDoctors } =
      useDoctorById(selectedDepartmentId);
  const { updateDoctorOrder, isOrderUpdating } = useUpdateDoctorsOrder();
console.log("doctorsData", doctorsData);
  // Handle department change
 const handleDepartmentChange = (event) => {
   setSelectedDepartmentId(event.target.value); // Correct: event.target.value
 };


  // Handle drag-and-drop reordering of doctors
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;

    const reorderedDoctors = [...doctors];
    const [removedDoctor] = reorderedDoctors.splice(sourceIndex, 1);
    reorderedDoctors.splice(destIndex, 0, removedDoctor);

    const updatedDoctors = reorderedDoctors.map((doctor, index) => ({
      ...doctor,
      order: index,
    }));

    setDoctors(updatedDoctors);

    const updatedOrder = updatedDoctors.map((doctor, index) => ({
      id: doctor._id,
      order: index.toString(),
    }));

    updateDoctorOrder(updatedOrder); // Send updated order to the backend
  };
// useEffect(() => {
//   if (doctorsData && doctorsData.length > 0) {
//     setDoctors(doctorsData);
//   }
// }, [doctorsData]);
// useEffect(() => {
//   if (doctorsData && Array.isArray(doctorsData) && doctorsData.length > 0) {
//     const normalizedDoctors = doctorsData.map((doctor, index) => ({
//       ...doctor,
//       order: doctor.order ?? index, // fallback if order is missing
//       _id: doctor._id.toString(), // ensure it's a string for dnd
//     }));
//     setDoctors(normalizedDoctors);
//   }
// }, [doctorsData]);
useEffect(() => {
  if (doctorsData && Array.isArray(doctorsData) && doctorsData.length > 0) {
    const sortedDoctors = [...doctorsData].sort((a, b) => a.order - b.order);

    const normalizedDoctors = sortedDoctors.map((doctor, index) => ({
      ...doctor,
      order: doctor.order ?? index, // fallback if order missing
      _id: doctor._id.toString(), // ensure _id is string for draggable
    }));

    setDoctors(normalizedDoctors);
  }
}, [doctorsData]);



  useEffect(() => {
    console.log("Departments Data:", departmentsData);
    console.log("Selected Department ID:", selectedDepartmentId);
    console.log("Doctors Data:", doctorsData);
  }, [departmentsData, selectedDepartmentId, doctorsData]);

  if (isLoadingDepartments || isLoadingDoctors || isOrderUpdating)
    return <SpinnerMini />;
//   if (!doctors.length)
//     return <div>No doctors available for the selected department.</div>;

  return (
    <>
      {/* Department Select Dropdown */}
      <Select
        options={departmentsData?.map((dept) => ({
          value: dept._id,
          label: dept.name,
        }))}
        value={selectedDepartmentId}
        onChange={handleDepartmentChange}
        placeholder="Select Department"
      />
      <div>
        {/* Show Doctors After Department is Selected */}
        {selectedDepartmentId && (
          <DragDropContext onDragEnd={handleDragEnd}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="doctors table">
                <TableHead>
                  <TableRow>
                    <TableCell>Doctor Name</TableCell>
                    <TableCell>Order</TableCell>
                  </TableRow>
                </TableHead>
                <Droppable droppableId="doctors-list" type="DOCTOR">
                  {(provided, snapshot) => (
                    <TableBody
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{
                        backgroundColor: snapshot.isDraggingOver
                          ? "#f0f0f0"
                          : "inherit",
                      }}
                    >
                      {doctors.map((doctor, index) => (
                        <Draggable
                          key={doctor._id}
                          draggableId={doctor._id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <TableRow
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                                backgroundColor: snapshot.isDragging
                                  ? "#e0e0e0"
                                  : "inherit",
                                cursor: "grab",
                                "&:hover": { backgroundColor: "#f5f5f5" },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {doctor.name}
                              </TableCell>
                              <TableCell>{doctor.order}</TableCell>
                            </TableRow>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </TableBody>
                  )}
                </Droppable>
              </Table>
            </TableContainer>
          </DragDropContext>
        )}
      </div>
    </>
  );
};

export default NewOrderform;
