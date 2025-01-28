import UserRow from "./UserRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import { useAdmin } from "./useUser";
import { useUserContext } from "./UserContext";

const userDetails = [
  { id: 0, name: "Yogesh", username: "yogesh", status: "active" },
  { id: 1, name: "Test", username: "test1", status: "active" },
  { id: 2, name: "Test2", username: "test2", status: "inactive" },
  { id: 3, name: "Test3", username: "test3", status: "active" },
];

function UserTable() {
  const { data, isLoading, error } = useAdmin();
  const { filter } = useUserContext();

  if (isLoading) return <Spinner />;

  let filteredUsers = data;
  if (filter !== "All") {
    filteredUsers = data.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (isLoading) return <Spinner />;
  if (!filteredUsers.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 1fr 2fr 1fr 0.6fr">
        <Table.Header>
          <div>Name</div>
          <div>Username</div>
          <div>Permisions</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredUsers}
          render={(user) => <UserRow key={user._id} user={user} />}
        />
        <Table.Footer>
          {/* <Pagination count={userDetails.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UserTable;
