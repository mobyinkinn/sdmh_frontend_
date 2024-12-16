import AwardsRow from "./AwardsRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useAwardsContext } from "./AwardsContext";

const awardsData = [
  {
    id: 0,
    title: "World’s Best Hospitals 2024 by Newsweek",
    year: "2024",
    description:
      "A HALF-CENTURY OF TRUST, NOW CELEBRATED GLOBALLY. We are excited to share that Santokba Durlabhji Memorial Hospital (SDMH) has been honored as one of the 'World’s Best Hospitals 2024' by Newsweek.",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 1,
    title: "World’s Best Hospitals 2024 by Newsweek",
    year: "2024",
    description:
      "A HALF-CENTURY OF TRUST, NOW CELEBRATED GLOBALLY. We are excited to share that Santokba Durlabhji Memorial Hospital (SDMH) has been honored as one of the 'World’s Best Hospitals 2024' by Newsweek.",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 2,
    title: "World’s Best Hospitals 2024 by Newsweek",
    year: "2024",
    description:
      "A HALF-CENTURY OF TRUST, NOW CELEBRATED GLOBALLY. We are excited to share that Santokba Durlabhji Memorial Hospital (SDMH) has been honored as one of the 'World’s Best Hospitals 2024' by Newsweek.",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
];

function AwardsTable() {
  const { filter } = useAwardsContext();
  let filteredAwards = awardsData;
  if (filter !== "All") {
    filteredAwards = awardsData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!awardsData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="2fr 1fr 4fr 1fr 1fr 1fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Designation</div>
          <div>Description</div>
          <div>Image</div>
          <div>Status</div>
          <div>created</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredAwards}
          render={(notice) => <AwardsRow key={notice.id} academic={notice} />}
        />
        <Table.Footer>
          {/* <Pagination count={awardsData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default AwardsTable;
