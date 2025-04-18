import OpinionRow from "./OpinionRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
import Spinner from "../../../ui/Spinner";
import { useOpinion } from "../useOpinions";
// import Pagination from "../../../ui/Pagination";

function OpinionTable() {
  const { data, isLoading, error } = useOpinion();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Careers: {error.message}</div>;
  let filteredOpinion = data;

  if (!filteredOpinion.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 2fr 1fr 1fr 1fr 1fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Email</div>
          <div>Phone No</div>
          <div>speciality</div>
          <div>file</div>
          <div>Date</div>
          <div>Action</div>
        </Table.Header>

        <Table.Body
          data={filteredOpinion}
          render={(opinion) => (
            <OpinionRow key={opinion.id} opinion={opinion} />
          )}
        />
        <Table.Footer>
          {/* <Pagination count={enquiryData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default OpinionTable;
