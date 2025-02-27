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
    if (data && Array.isArray(data)) {
      const sortedData = data.sort((a, b) => a.order - b.order);
      setDoctors(sortedData);
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

    try {
      await axios.post(
        "https://privily.co/api/doctor/update-doctors-order",
        updatedDoctorsOrder
      );
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: 2 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>
        Reorder Doctors
      </Typography>
      {isLoading ? (
        <CircularProgress sx={{ display: "block", margin: "auto" }} />
      ) : (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="doctors-list">
            {(provided) => (
              <Table {...provided.droppableProps} ref={provided.innerRef}>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Order</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
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
              </Table>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </TableContainer>
  );
};

export default ReorderDoctorForm;
