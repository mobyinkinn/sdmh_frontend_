import EnquiryRow from "./EnquiryRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useEnquiryContext } from "./EnquiryContext";
import { useEnquiry } from "./useEnquiry";

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
  const { data, isLoading, error } = useEnquiry();
  const { filter } = useEnquiryContext();
   if (isLoading) return <Spinner />;
   if (error) return <div>Error loading Careers: {error.message}</div>;
   let filteredEnquiry = data;
   if (filter !== "All") {
     filteredEnquiry = data.filter((el) => {
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
  if (!filteredEnquiry.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 2fr 1fr 3fr 1fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Email</div>
          <div>Phone No</div>
          <div>Message</div>
          <div>created</div>
          <div>Action</div>
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
