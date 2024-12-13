import AcademicRow from "./AcademicRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useAcademicContext } from "./AcademicContext";

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
  const { filter } = useAcademicContext();
  let filteredAcademic = noticeData;
  if (filter !== "All") {
    filteredAcademic = noticeData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!noticeData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="3fr 2fr 2fr 2fr 2fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>Status</div>
          <div>created</div>
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
