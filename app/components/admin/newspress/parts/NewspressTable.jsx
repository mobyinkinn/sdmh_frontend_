import NewspressRow from "./NewspressRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import { useNewspress } from "../useNewspress";
// import Pagination from "../../../ui/Pagination";

function NewspressTable() {
  const { data, isLoading, error } = useNewspress();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Newspress: {error.message}</div>;
  let filteredNewspress = data;

  if (!filteredNewspress.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 1fr 1fr 2fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Title</div>
          <div>Tag</div>
          <div>Link</div>
          <div>Description</div>
          <div>Image</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredNewspress}
          render={(newspress) => (
            <NewspressRow key={newspress.id} newspress={newspress} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={enquiryData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default NewspressTable;
