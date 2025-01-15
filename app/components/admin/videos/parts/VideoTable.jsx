import VideoRow from "./VideoRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import { useVideoContext } from "./VideoContext";
import { useVideos } from "../useVideos";

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
  const { data, isLoading, error } = useVideos();
  if (isLoading) return <Spinner />;
  if (error) return <div>Error loading Videos: {error.message}</div>;
  const { filter } = useVideoContext();
  let filteredVideo = data;

  // if (filter !== "All") {
  //   filteredVideo = data.filter((el) => {
  //     if (filter.toLowerCase() === "active") {
  //       return el.status === true; // Show active testimonials
  //     } else if (filter.toLowerCase() === "inactive") {
  //       return el.status === false; // Show inactive testimonials
  //     }
  //     return false;
  //   });
  // }

  //   const { bookings, isLoading, count } = useUsers();

  if (!data.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="2fr 4fr 0fr">
        <Table.Header>
          <div>Title</div>
          <div>Url</div>
          <div>Actions</div>
        </Table.Header>

        <Table.Body
          data={filteredVideo}
          render={(notice) => <VideoRow key={notice.id} videos={notice} />}
        />
        <Table.Footer>
          {/* <Pagination count={videoData.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default VideoTable;
