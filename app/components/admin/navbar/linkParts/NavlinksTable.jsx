import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import { useNavbarById } from "../useNavbar";
import NavlinksRow from "./NavlinksRow";
import { useParams } from "next/navigation";
// import Pagination from "../../../ui/Pagination";

function NavlinksTable() {
  const { id } = useParams();
  const { data, isLoading, error } = useNavbarById(id);
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Navbar links: {error.message}</div>;
  let fileteredNavlinks = data.items;

  if (!fileteredNavlinks.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 0.2fr">
        <Table.Header>
          <div>Item Order Id</div>
          <div>Item Name</div>
          <div>Item Link</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={fileteredNavlinks}
          render={(navlink) => (
            <NavlinksRow
              key={navlink.id}
              navlink={navlink}
              menu={fileteredNavlinks}
            />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={enquiryData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default NavlinksTable;
