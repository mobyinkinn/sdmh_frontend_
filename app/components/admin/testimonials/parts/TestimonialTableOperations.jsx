import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useTestimonialContext } from "./TestimonialContext";
import CreateTestimonialForm from "@/app/components/features/Testimonial/createTestimonialForm";
import Button from "@/app/components/ui/Button";
import Modal from "@/app/components/ui/Modal";

function TestimonialTableOperations() {
  const { filter, setFilter } = useTestimonialContext();
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
        <Modal.Open opens="testimonial-form">
          <Button>Add Testimonial</Button>
        </Modal.Open>
        <Modal.Window name="testimonial-form">
          <CreateTestimonialForm resourceName={"Testimonial"} />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default TestimonialTableOperations;
