import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useBlogContext } from "./BlogContext";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CreateBlogForm from "@/app/components/features/Blog/CreateBlogForm";

function BlogTableOperations() {
  const { filter, setFilter } = useBlogContext();
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
        <Modal.Open opens="blog-form">
          <Button>Add Blog</Button>
        </Modal.Open>
        <Modal.Window name="blog-form">
          <CreateBlogForm resourceName="Blog" />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default BlogTableOperations;
