import VideoRow from "./VideoRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import { useVideoContext } from "./VideoContext";

const videoData = [
  {
    id: 0,
    title: "Cancer awareness",
    status: "active",
    url: "https://www.youtube.com/watch?v=lMiz7sSNqP8",
  },
  {
    id: 1,
    title: "Cancer awareness",
    status: "active",
    url: "https://www.youtube.com/watch?v=lMiz7sSNqP8",
  },
  {
    id: 2,
    title: "Cancer awareness",
    status: "active",
    url: "https://www.youtube.com/watch?v=lMiz7sSNqP8",
  },
];

//<iframe width="560" height="315" src="https://www.youtube.com/embed/lMiz7sSNqP8?si=5c8619xBfzGuVk2g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

function VideoTable() {
  const { filter } = useVideoContext();
  let filteredVideo = videoData;
  if (filter !== "All") {
    filteredVideo = videoData.filter(
      (el, i) => el.status.toLowerCase() === filter.toLowerCase()
    );
  }

  //   const { bookings, isLoading, count } = useUsers();
  //   if (isLoading) return <Spinner />;
  if (!videoData.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="2fr 4fr 2fr 3.2rem">
        <Table.Header>
          <div>Title</div>
          <div>Url</div>
          <div>Status</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={filteredVideo}
          render={(notice) => <VideoRow key={notice.id} academic={notice} />}
        />
        <Table.Footer>
          {/* <Pagination count={videoData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default VideoTable;
