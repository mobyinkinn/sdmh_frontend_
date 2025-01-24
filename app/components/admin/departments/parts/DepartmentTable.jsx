import DepartmentRow from "./DepartmentRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useDepartmentContext } from "./DepartmentContext";
import { useDepartment } from "./useDepartment";

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
  const { data, isLoading, error } = useDepartment();

  const { filter } = useDepartmentContext();
  if (isLoading) return <Spinner />;

  let filteredDepartment = data;
  let convertedFilter;

  if (filter.toLowerCase() === "inactive") {
    convertedFilter = false;
  } else {
    convertedFilter = true;
  }

  if (filter !== "All") {
    filteredDepartment = data.filter((el, i) => el.status === convertedFilter);
  }

  if (!filteredDepartment.length) return <Empty resourceName="departments" />;
  return (
    <Menus>
      <Table columns="3fr 2fr 2fr 2fr 2fr 1.5fr">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>Banner Image</div>
          <div>Status</div>
          <div>created</div>
          <div>Actions</div>
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
