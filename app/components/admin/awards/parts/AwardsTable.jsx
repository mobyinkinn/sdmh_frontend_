import AwardsRow from "./AwardsRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useAwardsContext } from "./AwardsContext";
import { useAwards } from "../useAwards";

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
  const { data, isLoading, error } = useAwards();

  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Awards: {error.message}</div>;

  let filteredAwards = data;

  if (filter !== "All") {
    filteredAwards = data.filter((el) => {
      if (filter.toLowerCase() === "active") {
        return el.status === true; // Show active testimonials
      } else if (filter.toLowerCase() === "inactive") {
        return el.status === false; // Show inactive testimonials
      }
      return false;
    });
  }

  //   const { bookings, isLoading, count } = useUsers();

  if (!data.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 1fr 3fr 1fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Name</div>
          <div>Year</div>
          <div>About</div>
          <div>Image</div>
          <div>Status</div>
          <div>created</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredAwards}
          render={(notice) => <AwardsRow key={notice.id} award={notice} />}
        />
        <Table.Footer>
          {/* <Pagination count={awardsData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default AwardsTable;
