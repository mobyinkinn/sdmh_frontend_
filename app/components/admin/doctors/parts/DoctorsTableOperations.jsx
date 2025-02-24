import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useDoctorsContext } from "./DoctorsContext";
import Modal from "@/app/components/ui/Modal";
import CreateDoctorForm from "@/app/components/features/Doctor/CreateDoctorForm";
import Button from "@/app/components/ui/Button";
import ReorderDoctorForm from "@/app/components/features/Doctor/ReorderDoctorForm";

function DoctorsTableOperations() {
  const { filter, setFilter } = useDoctorsContext();
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
        <Modal.Open opens="department-form">
          <Button>Add Doctor</Button>
        </Modal.Open>
        <Modal.Window name="department-form">
          <CreateDoctorForm />
        </Modal.Window>
        <Modal.Open opens="reorder-form">
          <Button>Reorder Doctor</Button>
        </Modal.Open>
        <Modal.Window name="reorder-form">
          <ReorderDoctorForm />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default DoctorsTableOperations;
