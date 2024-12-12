import UserRow from "./UserRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";

const userDetails = [
  { id: 0, name: "Yogesh", username: "yogesh", status: "active" },
  { id: 1, name: "Test", username: "test1", status: "active" },
  { id: 2, name: "Test2", username: "test2", status: "inactive" },
  { id: 3, name: "Test3", username: "test3", status: "active" },
];

function UserTable() {
  //   const { bookings, isLoading, count } = useUsers();

  //   if (isLoading) return <Spinner />;
  if (!userDetails.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1.3fr 2fr 2.4fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Username</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={userDetails}
          render={(user) => <UserRow key={user.id} user={user} />}
        />
        <Table.Footer>
          {/* <Pagination count={userDetails.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UserTable;
