import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useNavlinksContext } from "./NavlinksContext";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CreateNavlinksForm from "@/app/components/features/Navlinks/CreateNavlinksForm";

function NavlinksTableOperations() {
  // const { filter, setFilter } = useNavlinksContext();
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
        <Modal.Open opens="navlinks-form">
          <Button>Add Navbar Links</Button>
        </Modal.Open>
        <Modal.Window name="navlinks-form">
          <CreateNavlinksForm resourceName="Navbar Links" />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default NavlinksTableOperations;
