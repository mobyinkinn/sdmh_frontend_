import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useOpeningContext } from "./OpeningContext";
import Modal from "@/app/components/ui/Modal";
import CreateNoticeForm from "@/app/components/features/academicNotices/CreateNoticeForm";
import CreateOpeningForm from "@/app/components/features/Openings/CreateOpeningForm";
import Button from "@/app/components/ui/Button";

function OpeningTableOperations() {
  const { filter, setFilter } = useOpeningContext();
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
        <Modal.Open opens="notice-form">
          <Button>Add Openings</Button>
        </Modal.Open>
        <Modal.Window name="notice-form">
          <CreateOpeningForm resourceName={"Openings"}/>
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default OpeningTableOperations;
