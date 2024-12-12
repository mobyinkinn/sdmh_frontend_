import DoctorsRow from "./DoctorsRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useDoctorsContext } from "./DoctorsContext";

const doctorsData = [
  {
    id: 0,
    department: "Shoulder Surgery",
    name: "Dr. Deen Dayal Nagar",
    image: departmentImg,
    availableOn: [
      { day: "Mon", at: "OT" },
      { day: "Tue", at: "OT" },
      { day: "Wed", at: "OT" },
      { day: "Fri", at: "OT" },
    ],
    floor: "2",
    room: "205",
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 1,
    department: "Hip Surgery",
    name: "Dr. Rehanuddin",
    image: departmentImg,
    floor: "2",
    availableOn: [
      { day: "Mon", at: "OT" },
      { day: "Tue", at: "OT" },
      { day: "Wed", at: "OT" },
      { day: "Fri", at: "OT" },
    ],
    room: "205",
    status: "inactive",
    created: "02/24/2022",
  },
  {
    id: 2,
    department: "Cardiology",
    name: "Dr. Vipul Malpani",
    image: departmentImg,
    floor: "2",
    room: "205",
    availableOn: [
      { day: "Mon", at: "OT" },
      { day: "Tue", at: "OT" },
      { day: "Wed", at: "OT" },
      { day: "Fri", at: "OT" },
    ],
    status: "active",
    created: "02/24/2022",
  },
];

function DoctorsTable() {
  const { filter } = useDoctorsContext();
  let filteredDoctors = doctorsData;
  if (filter !== "All") {
    filteredDoctors = doctorsData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!doctorsData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="2fr 1fr 1fr 1fr 1fr 3fr 1fr 1fr 1rem">
        <Table.Header>
          <div>Name</div>
          <div>Department</div>
          <div>Image</div>
          <div>floor</div>
          <div>Room</div>
          <div>Available On</div>
          <div>Status</div>
          <div>created</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredDoctors}
          render={(doctor) => (
            <DoctorsRow key={doctor.id} department={doctor} />
          )}
        />

        <Table.Footer>
          {/* <Pagination count={doctorsData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default DoctorsTable;
