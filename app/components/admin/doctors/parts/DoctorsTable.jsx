import DoctorsRow from "./DoctorsRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import { useDoctorsContext } from "./DoctorsContext";
import { useDoctors, useUpdateDoctorsOrder } from "./useDoctor";
import { useDepartment } from "../../departments/parts/useDepartment";
import { Pagination, Stack } from "@mui/material";
import { useState } from "react";
function DoctorsTable() {
  const { filter, sort } = useDoctorsContext();
  const [page, setPage] = useState(1);
  const itemsPerPage = 50;
  const { data, isLoading } = useDoctors();
  const { data: departmentData, isLoading: isLoadingDepartment } =
    useDepartment();

  if (isLoading || isLoadingDepartment) return <Spinner />;

  if (!data || data.length === 0) return <Empty resourceName="Doctors" />;

  const sortedDoctors = [...data].sort((a, b) => {
    if (sort === "startDate-desc")
      return new Date(b.startDate) - new Date(a.startDate);
    if (sort === "startDate-asc")
      return new Date(a.startDate) - new Date(b.startDate);
    if (sort === "name-dsc") return b.name.localeCompare(a.name);
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    return 0;
  });

  let filteredDoctor = sortedDoctors;

  if (filter !== "All") {
    filteredDoctor = sortedDoctors.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  // Pagination logic
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedDoctors = filteredDoctor.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const totalPages = Math.ceil(filteredDoctor.length / itemsPerPage);

  return (
    <Menus>
      <Table columns="1fr 2fr 2fr 1fr 1fr 1fr 2.5fr 2fr 1.4fr">
        <Table.Header>
          <div>Order</div>
          <div>Name</div>
          <div>Department</div>
          <div>Image</div>
          <div>Floor</div>
          <div>Room</div>
          <div>Available On</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={paginatedDoctors}
          render={(doctor, index) => (
            <DoctorsRow key={doctor._id} doctor={doctor} index={index} />
          )}
        />

        <Table.Footer>
          <Stack direction="row" justifyContent="center" marginTop={4}>
            <Pagination
              count={totalPages || 1}
              page={page}
              onChange={(event, value) => setPage(value)}
              variant="outlined"
              shape="rounded"
              showFirstButton
              showLastButton
              size="large"
            />
          </Stack>
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default DoctorsTable;
