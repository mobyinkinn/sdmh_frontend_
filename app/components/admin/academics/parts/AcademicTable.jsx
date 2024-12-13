import AcademicRow from "./AcademicRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import { useAcademicContext } from "./AcademicContext";

const academicData = [
  {
    id: 0,
    name: "Academics Notices",
    status: "active",
    Created: "02/24/2022",
  },
  {
    id: 1,
    name: "Visiting Faculty",
    status: "active",
    Created: "02/24/2022",
  },
  {
    id: 2,
    name: "FNB Courses",
    status: "inactive",
    Created: "02/24/2022",
  },
];

function AcademicTable() {
  const { filter } = useAcademicContext();
  let filteredAcademic = academicData;
  if (filter !== "All") {
    filteredAcademic = academicData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!academicData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="3fr 2fr 2fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Status</div>
          <div>created</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredAcademic}
          render={(department) => (
            <AcademicRow key={department.id} department={department} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={academicData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default AcademicTable;
