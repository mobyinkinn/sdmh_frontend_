import PagesRow from "./PagesRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import { usePagesContext } from "./PagesContext";
import { usePages } from "../usePages";
import Pagination from "../../../ui/Pagination";

function PagesTable() {
  const { data, isLoading, error } = usePages();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading pages: {error.message}</div>;
  const { filter } = usePagesContext();
  let filteredPage = data;
  if (filter !== "All") {
    filteredPage = data.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true;
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false;
      }
      return false;
    });
  }

  if (!data.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="2fr 3fr 2fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>Id</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredPage}
          render={(page) => <PagesRow key={page.id} page={page} />}
        />
        <Table.Footer>{/* <Pagination count={data.length} /> */}</Table.Footer>
      </Table>
    </Menus>
  );
}

export default PagesTable;
