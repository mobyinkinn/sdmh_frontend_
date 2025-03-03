import DepartmentRow from "./DepartmentRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import departmentImg from "./assets/untitled.jpg";
import { useDepartmentContext } from "./DepartmentContext";
import { useDepartment } from "./useDepartment";
import { useState } from "react";
import { Pagination, Stack } from "@mui/material";

const departmentData = [
  {
    id: 0,
    name: "Child Devlopement Center(CDC)",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 1,
    name: "Shoulder Surgery",
    image: departmentImg,
    status: "inactive",
    created: "02/24/2022",
  },
  {
    id: 2,
    name: "Hip Surgery",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
];

function DepartmentTable() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5; // Number of rows per page

  const { data, isLoading, error } = useDepartment();
  const { filter } = useDepartmentContext();

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading data</p>;

  let filteredDepartment = data || [];

  // Convert filter string to boolean
  let convertedFilter = filter.toLowerCase() === "inactive" ? false : true;

  if (filter !== "All") {
    filteredDepartment = filteredDepartment.filter(
      (el) => el.status === convertedFilter
    );
  }

  if (!filteredDepartment.length) return <Empty resourceName="departments" />;

  // Calculate total pages
  const totalPages = Math.ceil(filteredDepartment.length / itemsPerPage);

  // Get data for the current page
  const paginatedData = filteredDepartment.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Menus>
      <Table columns="3fr 2fr 2fr 2fr 2fr 1.5fr">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>Banner Image</div>
          <div>Status</div>
          <div>Created</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={paginatedData}
          render={(department) => (
            <DepartmentRow key={department._id} department={department} />
          )}
        />

        <Table.Footer>
          {/* Pagination Controls */}
          <Stack direction="row" justifyContent="center" marginTop={4}>
            <Pagination
              count={totalPages} // Total number of pages
              page={page}
              onChange={(event, value) => setPage(value)} // Update page number
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

export default DepartmentTable;
