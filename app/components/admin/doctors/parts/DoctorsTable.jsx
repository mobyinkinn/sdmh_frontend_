import DoctorsRow from "./DoctorsRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import { useDoctorsContext } from "./DoctorsContext";
import { useDoctors, useUpdateDoctorsOrder } from "./useDoctor";
import { useDepartment } from "../../departments/parts/useDepartment";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

function DoctorsTable() {
  const { filter } = useDoctorsContext();
    const [page, setPage] = useState(1);
    const { data, isLoading } = useDoctors(page);
  const { data: departmentData, isLoading: isLoadingDepartment } =
    useDepartment();
  const { updateDoctorOrder, isOrderUpdating } = useUpdateDoctorsOrder();
  let filteredDoctors = data?.data;

  if (isLoading || isLoadingDepartment) return <Spinner />;
  if (!filteredDoctors.length) return <Empty resourceName="Doctors" />;

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedDoctors = Array.from(filteredDoctors);
    const [movedDoctor] = reorderedDoctors.splice(result.source.index, 1);
    reorderedDoctors.splice(result.destination.index, 0, movedDoctor);

    // Update the order in the backend
    updateDoctorOrder({ formdata: reorderedDoctors });
  };

  return (
    <Menus>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Table columns="1fr 2fr 2fr 1fr 1fr 1fr 2.5fr 2fr 1.4fr">
          <Table.Header>
            <div>Order</div>
            <div>Name</div>
            <div>Department</div>
            <div>Image</div>
            <div>floor</div>
            <div>Room</div>
            <div>Available On</div>
            <div>Status</div>
            <div>Actions</div>
          </Table.Header>

          <Droppable droppableId="doctors">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <Table.Body
                  data={filteredDoctors}
                  render={(doctor, index) => (
                    <DoctorsRow
                      key={doctor._id}
                      doctor={doctor}
                      index={index}
                    />
                  )}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Table.Footer>
            <Stack direction="row" justifyContent="center" marginTop={4}>
              <Pagination
                count={data?.totalPages} // Total number of pages
                page={page}
                onChange={(event, value) => setPage(value)} // Update page on click
                variant="outlined"
                shape="rounded"
                showFirstButton
                showLastButton
                size="large"
              />
            </Stack>
            {/* <Pagination count={doctorsData.length} /> */}
          </Table.Footer>
        </Table>
      </DragDropContext>
    </Menus>
  );
}

export default DoctorsTable;
