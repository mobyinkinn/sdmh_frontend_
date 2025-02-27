import React, { useState, useEffect } from "react";
import {
  useDoctors,
  useUpdateDoctorsOrder,
} from "../../admin/doctors/parts/useDoctor";
import SpinnerMini from "../../ui/SpinnerMini";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const ReorderDoctorForm = () => {
  const { data, isLoading } = useDoctors();
  const { updateDoctorOrder, isOrderUpdating } = useUpdateDoctorsOrder();
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

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;

    // Create a new array with reordered items
    const newDoctors = [...doctors];
    const [removed] = newDoctors.splice(sourceIndex, 1);
    newDoctors.splice(destIndex, 0, removed);

    // Update order values
    const updatedDoctors = newDoctors.map((doctor, index) => ({
      ...doctor,
      order: index,
    }));

    setDoctors(updatedDoctors);

    const updatedOrder = updatedDoctors.map((doctor) => ({
      id: doctor._id,
      order: doctor.order.toString(),
    }));

    updateDoctorOrder(updatedOrder);
  };

  if (isLoading || isOrderUpdating) return <SpinnerMini />;
  if (!doctors.length) return <div>No doctors available to reorder.</div>;

  return (
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
                          "&:last-child td, &:last-child th": { border: 0 },
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
  );
};

export default ReorderDoctorForm;
