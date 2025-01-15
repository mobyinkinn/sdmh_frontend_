import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useAwardsContext } from "./AwardsContext";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/Modal";
import CreateAwardForm from "@/app/components/features/Awards/CreateAwardForm";

function AwardsTableOperations() {
  const { filter, setFilter } = useAwardsContext();
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
        <Modal.Open opens="award-form">
          <Button>Add Award</Button>
        </Modal.Open>
        <Modal.Window name="award-form">
          <CreateAwardForm resourceName="Award" />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default AwardsTableOperations;
