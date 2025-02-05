import NavbarRow from "./NavbarRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import { useNavbar } from "../useNavbar";
// import Pagination from "../../../ui/Pagination";

function NavbarTable() {
  const { data, isLoading, error } = useNavbar();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Navbar: {error.message}</div>;
  let filteredNavbar = data;

  if (!filteredNavbar.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 3fr 0.5fr 0.5fr">
        <Table.Header>
          <div>Order Id</div>
          <div>Name</div>
          <div>Link</div>
          <div>Items</div>
          <div>Items Actions</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredNavbar}
          render={(navbar) => <NavbarRow key={navbar.id} navbar={navbar} />}
        />
        <Table.Footer>
          {/* <Pagination count={enquiryData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default NavbarTable;
