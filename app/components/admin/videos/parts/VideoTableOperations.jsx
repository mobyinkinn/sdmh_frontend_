import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useVideoContext } from "./VideoContext";
import CreateVideoForm from "@/app/components/features/Videos/CreateVideoForm";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";

function VideoTableOperations() {
  const { filter, setFilter } = useVideoContext();
  return (
    <TableOperations>
      {/* <Filter
        filterField="status"
        filter={filter}
        setFilter={setFilter}
        options={[
          { value: "All", label: "All" },
          { value: "Active", label: "Active" },
          { value: "Inactive", label: "Inactive" },
        ]}
      /> */}

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          { value: "name-dsc", label: "Sort by name (Z - A)" },
          { value: "name-asc", label: "Sort by name (A - Z)" },
        ]}
      />
      <Modal>
        <Modal.Open opens="video-form">
          <Button>Add Video</Button>
        </Modal.Open>
        <Modal.Window name="video-form">
          <CreateVideoForm resourceName="Video" />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default VideoTableOperations;
