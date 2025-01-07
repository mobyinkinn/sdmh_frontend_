import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { usePlanContext } from "./PlanContext";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CreateHealthCheckupForm from "@/app/components/features/Checkup/CreateHealthCheckupForm";

function PlanTableOperations() {
  const { filter, setFilter } = usePlanContext();
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
        <Modal.Open opens="checkup-form">
          <Button>Add Health Checkup</Button>
        </Modal.Open>
        <Modal.Window name="checkup-form">
          <CreateHealthCheckupForm resourceName="Checkup" />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default PlanTableOperations;
