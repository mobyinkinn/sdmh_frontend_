import TpaRow from "./TpaRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useTpaContext } from "./TpaContext";
import { useTpa } from "../useTpa";

const tpaData = [
  {
    id: 0,
    name: "Chiranjeevi",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 1,
    name: "RGHS",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 2,
    name: "SIDBI",
    image: departmentImg,
    status: "inactive",
    created: "02/24/2022",
  },
];

function TpaTable() {
  const { data, isLoading, error } = useTpa();

 const { filter } = useTpaContext();
 if (isLoading) return <Spinner />;
 if (error) return <div>Error loading Tpa's: {error.message}</div>;
 let filteredTpa = data;
 if (filter !== "All") {
   filteredTpa = data.filter((el) => {
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
  if (!tpaData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="2fr 3fr 2fr 2fr 5.8fr 2fr 2.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>Tag</div>
          <div>Status</div>
          <div>id</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredTpa}
          render={(notice) => <TpaRow key={notice.id} academic={notice} />}
        />
        <Table.Footer>
          {/* <Pagination count={noticeData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default TpaTable;
