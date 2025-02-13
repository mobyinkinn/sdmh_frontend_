import AcademicRow from "./AcademicRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useAcademicContext } from "./AcademicContext";
import { useNotices } from "../useNotices";

const noticeData = [
  {
    id: 0,
    name: "IEC Research Protocol",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 1,
    name: "IEC Research Protocol",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 2,
    name: "IEC Research Protocol",
    image: departmentImg,
    status: "inactive",
    created: "02/24/2022",
  },
];

function AcademicTable() {
  const { data, isLoading, error } = useNotices();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading testimonials: {error.message}</div>;
  const { filter } = useAcademicContext();
  let filteredAcademic = data;
  if (filter !== "All") {
    filteredAcademic = data.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true; // Show active testimonials
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false; // Show inactive testimonials
      }
      return false;
    });
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!data.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="2fr 2fr 3fr 4fr 3fr 2fr 1.7fr 2.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Year</div>
          <div>Department</div>
          <div>Id</div>
          <div>File</div>
          <div>Status</div>
          <div>Actions</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredAcademic}
          render={(notice) => <AcademicRow key={notice.id} academic={notice} />}
        />
        <Table.Footer>
          {/* <Pagination count={noticeData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default AcademicTable;
