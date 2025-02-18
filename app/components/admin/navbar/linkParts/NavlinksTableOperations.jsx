import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useNavlinksContext } from "./NavlinksContext";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CreateNavlinksForm from "@/app/components/features/Navlinks/CreateNavlinksForm";
import styled from "styled-components";
import { useState } from "react";

const DragDropContainer = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #f9f9f9;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const FileName = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;
function NavlinksTableOperations() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
      toast.success(`File ${uploadedFile.name} selected!`);
    } else {
      toast.error("Please upload a valid .csv file.");
    }
  };
  const handleUpload = async () => {
    if (!file) {
      toast.error("No file selected for upload.");
      return;
    }

    try {
      setIsUploading(true);
      await importCustomerData(file);
      toast.success("File uploaded successfully!");
      setFile(null);
      await fetchAllCustomers(); // Refresh table data
    } catch (error) {
      console.error("File upload failed:", error);
      toast.error("Failed to upload file.");
    } finally {
      setIsUploading(false);
    }
  };
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
        <Modal.Open opens="import-form">
          <Button variation="primary" size="medium">
            Import Navlinks
          </Button>
        </Modal.Open>
        <Modal.Window name="import-form">
          <>
            <>
              <DragDropContainer
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <p>Drag and drop your CSV file here</p>
                <p>or</p>
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ marginTop: "10px" }}
                />
              </DragDropContainer>
              {file && <FileName>Selected file: {file.name}</FileName>}
            </>
            <Button
              variation="primary"
              size="medium"
              onClick={handleUpload}
              disabled={isUploading}
              style={{ marginTop: "15px" }}
            >
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </>
        </Modal.Window>
      </Modal>
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
