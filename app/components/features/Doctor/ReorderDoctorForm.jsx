// import React, { useState, useEffect } from "react";
// import {
//   useDoctors,
//   useUpdateDoctorsOrder,
// } from "../../admin/doctors/parts/useDoctor";
// import SpinnerMini from "../../ui/SpinnerMini";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// const ReorderDoctorForm = () => {
//   const { data, isLoading } = useDoctors();



//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 650 }} aria-label="doctors table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Doctor Name</TableCell>
//             <TableCell>Order</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody
//           sx={{
//             backgroundColor : "inherit",
//           }}
//         >
//           {data.map((doctor, index) => (
//             <TableRow
//               sx={{
//                 "&:last-child td, &:last-child th": { border: 0 },
//                 backgroundColor:"inherit",
//                 cursor: "grab",
//                 "&:hover": { backgroundColor: "#f5f5f5" },
//               }}
//             >
//               <TableCell component="th" scope="row">
//                 {doctor.name}
//               </TableCell>
//               <TableCell>{doctor.order}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default ReorderDoctorForm;

import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useDoctors } from "../../admin/doctors/parts/useDoctor";

const ReorderDoctorForm = ({ onClose }) => {
  const { data, isLoading } = useDoctors();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (data && Array.isArray(data) && data.length > 0) {
      const formattedDoctors = data
        .map((doctor, index) => ({
          ...doctor,
          order: doctor.order ?? index,
          _id: doctor._id.toString(),
        }))
        .sort((a, b) => a.order - b.order);

      setDoctors(formattedDoctors);
    }
  }, [data]);

  const handleOnDragEnd = async (result) => {
    if (!result.destination) return;

    const items = Array.from(doctors);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDoctors(items);

    const updatedDoctorsOrder = items.map((item, index) => ({
      id: item._id,
      order: index,
    }));

    setDoctors(updatedDoctors);

    const updatedOrder = updatedDoctors.map((doctor) => ({
      id: doctor._id,
      order: doctor.order.toString(),
    }));

    updateDoctorOrder(updatedOrder);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          Reorder Doctors
        </Typography>
        {isLoading ? (
          <CircularProgress sx={{ display: "block", margin: "auto" }} />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Order</TableCell>
              </TableRow>
            </TableHead>
            <Droppable droppableId="doctors-list">
              {(provided) => (
                <TableBody ref={provided.innerRef} {...provided.droppableProps}>
                  {doctors.map((doctor, index) => (
                    <Draggable
                      key={doctor._id}
                      draggableId={doctor._id}
                      index={index}
                    >
                      {(provided) => (
                        <TableRow
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TableCell>{doctor._id}</TableCell>
                          <TableCell>{doctor.name}</TableCell>
                          <TableCell>{index + 1}</TableCell>
                        </TableRow>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </TableBody>
              )}
            </Droppable>
          </Table>
        )}
      </TableContainer>
    </DragDropContext>
  );
};

export default ReorderDoctorForm;
