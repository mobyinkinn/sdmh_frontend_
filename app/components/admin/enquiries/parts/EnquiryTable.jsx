import EnquiryRow from "./EnquiryRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useEnquiryContext } from "./EnquiryContext";

const enquiryData = [
  {
    id: 0,
    name: "Yogesh",
    email: "yogesh@mobyink.com",
    phone: "1234567890",
    message:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolores assumenda, aperiam fuga eligendi in omnis praesentium, blanditiis quisquam rerum voluptas eum reprehenderit, tempora illum doloremque! Atque vel cumque eum.",
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 1,
    name: "Yogesh",
    email: "yogesh@mobyink.com",
    phone: "1234567890",
    message: "This is a message.",
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 2,
    name: "Yogesh",
    email: "yogesh@mobyink.com",
    phone: "1234567890",
    message: "This is a message.",
    status: "active",
    created: "02/24/2022",
  },
];

function EnquiryTable() {
  const { filter } = useEnquiryContext();
  let filteredEnquiry = enquiryData;
  if (filter !== "All") {
    filteredEnquiry = enquiryData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!enquiryData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 2fr 1fr 3fr 1fr 1fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Email</div>
          <div>Phone No</div>
          <div>Message</div>
          <div>Status</div>
          <div>created</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredEnquiry}
          render={(notice) => <EnquiryRow key={notice.id} academic={notice} />}
        />
        <Table.Footer>
          {/* <Pagination count={enquiryData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default EnquiryTable;
