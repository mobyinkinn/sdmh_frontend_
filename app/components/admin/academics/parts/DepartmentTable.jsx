import DepartmentRow from "./DepartmentRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useDepartmentContext } from "./DepartmentContext";

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
  const { filter } = useDepartmentContext();
  let filteredDepartment = departmentData;
  if (filter !== "All") {
    filteredDepartment = departmentData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!departmentData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="3fr 2fr 2fr 2fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>Status</div>
          <div>created</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredDepartment}
          render={(department) => (
            <DepartmentRow key={department.id} department={department} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={departmentData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default DepartmentTable;
