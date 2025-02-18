import TeachingRow from "./TeachingRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import { useTeachingContext } from "./TeachingContext";
import { useTeachings } from "../useTeachings";

// const teachingData = [
//   {
//     id: 0,
//     name: "IEC Research Protocol",
//     image: departmentImg,
//     status: "active",
//     created: "02/24/2022",
//   },
//   {
//     id: 1,
//     name: "IEC Research Protocol",
//     image: departmentImg,
//     status: "active",
//     created: "02/24/2022",
//   },
//   {
//     id: 2,
//     name: "IEC Research Protocol",
//     image: departmentImg,
//     status: "inactive",
//     created: "02/24/2022",
//   },
// ];

function TeachingTable() {
  const { data, isLoading, error } = useTeachings();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading testimonials: {error.message}</div>;
  const { filter } = useTeachingContext();
  let filteredTeaching = data;
  if (filter !== "All") {
    filteredTeaching = data.filter((el) => {
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
      <Table columns="2fr 2fr 3fr 4fr 3fr 2fr 1.7fr">
        <Table.Header>
          <div>Name</div>
          <div>Year</div>
          <div>Department</div>
          <div>Id</div>
          <div>File</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredTeaching}
          render={(teaching) => (
            <TeachingRow key={teaching.id} teaching={teaching} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={noticeData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default TeachingTable;
