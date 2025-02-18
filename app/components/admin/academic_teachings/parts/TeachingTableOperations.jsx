import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useTeachingContext } from "./TeachingContext";
import CreateTeachingForm from "@/app/components/features/academicTeachings/CreateTeachingForm";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";

function TeachingTableOperations() {
  const { filter, setFilter } = useTeachingContext();
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
        <Modal.Open opens="teaching-form">
          <Button>Add Teaching</Button>
        </Modal.Open>
        <Modal.Window name="teaching-form">
          <CreateTeachingForm />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default TeachingTableOperations;
