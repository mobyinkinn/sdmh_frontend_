import BannerRow from "./BannerRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useBannerContext } from "./BannerContext";
import { useBanner } from "./useBanner";

const tpaData = [
  {
    id: 0,
    name: "Chiranjeevi",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 1,
    name: "RGHS",
    image: departmentImg,
    status: "active",
    created: "02/24/2022",
  },
  {
    id: 2,
    name: "SIDBI",
    image: departmentImg,
    status: "inactive",
    created: "02/24/2022",
  },
];

function BannerTable() {
  const { data, isLoading, error } = useBanner();

  const { filter } = useBannerContext();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Tpa's: {error.message}</div>;
  let filteredBanner = data;
  if (filter !== "All") {
    filteredBanner = data.filter((el) => {
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
  if (!filteredBanner.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="2fr 3fr 2fr 1.5fr 1fr">
        <Table.Header>
          <div>Page</div>
          <div>id</div>
          <div>Banner</div>
          <div>Status</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredBanner}
          render={(notice) => <BannerRow key={notice.id} academic={notice} />}
        />
        <Table.Footer>
          {/* <Pagination count={noticeData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BannerTable;
