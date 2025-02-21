import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useNewspressContext } from "./NewspressContext";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CreateNewspressForm from "@/app/components/features/Newspress/CreateNewspressForm";

function NewspressTableOperations() {
  const { filter, setFilter } = useNewspressContext();
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
        <Modal.Open opens="newspress-form">
          <Button>Add Newspress</Button>
        </Modal.Open>
        <Modal.Window name="newspress-form">
          <CreateNewspressForm resourceName="Newspress" />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default NewspressTableOperations;
