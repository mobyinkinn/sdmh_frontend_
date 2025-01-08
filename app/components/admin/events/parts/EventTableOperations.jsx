import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import { useEventContext } from "./EventContext";
import CreateEventsForm from "@/app/components/features/Events/CreateEventsForm";

function EventTableOperations() {
  const { filter, setFilter } = useEventContext();
  return (
    <TableOperations>
      <Filter
        filterField="status"
        filter={filter}
        setFilter={setFilter}
        options={[
          { value: "All", label: "All" },
          { value: "Active", label: "Active" },
          { value: "Inactive", label: "Inactive" },
        ]}
      />

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          { value: "name-dsc", label: "Sort by name (Z - A)" },
          { value: "name-asc", label: "Sort by name (A - Z)" },
        ]}
      />

      <Modal>
        <Modal.Open opens="event-form">
          <Button>Add Events</Button>
        </Modal.Open>
        <Modal.Window name="event-form">
          <CreateEventsForm resourceName="Event" />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default EventTableOperations;
