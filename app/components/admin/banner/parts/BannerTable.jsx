import BannerRow from "./BannerRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import departmentImg from "./assets/untitled.jpg";
import { useBannerContext } from "./BannerContext";

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
  const { filter } = useBannerContext();
  let filteredBanner = tpaData;
  if (filter !== "All") {
    filteredBanner = tpaData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!tpaData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="3fr 2fr 2fr 2fr 2fr 3.2rem">
        <Table.Header>
          <div>Name</div>
          <div>Image</div>
          <div>Status</div>
          <div>created</div>
          <div></div>
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
