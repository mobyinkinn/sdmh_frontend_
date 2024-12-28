import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useBannerContext } from "./BannerContext";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CreateBannerForm from "@/app/components/features/Banners/CreateBannerForm";

function BannerTableOperations() {
  const { filter, setFilter } = useBannerContext();
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
        <Modal.Open opens="banner-form">
          <Button>Add Banner</Button>
        </Modal.Open>
        <Modal.Window name="banner-form">
          <CreateBannerForm/>
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default BannerTableOperations;
