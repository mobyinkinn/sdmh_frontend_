"use client";

import departmentImg from "./parts/assets/untitled.jpg";
import AppLayout from "../navbarAdmin/AppLayout";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import TpaTableOperations from "./parts/TpaTableOperations";
import { TpaProvider } from "./parts/TpaContext";
import TpaTable from "./parts/TpaTable";
import { useCreateTpa } from "./useTpa";
import toast from "react-hot-toast";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateTpa from "./parts/CreateTpa";

export default function TpaIndex({ onCloseModal }) {
  const { mutate: createTpa, isLoading: isCreating } = useCreateTpa();

  const handleCreateTpa = (formData) => {
    createTpa(
      {
        data: formData,
      },
      {
        onSuccess: () => {
          toast.success("TPA created successfully!");
          onCloseModal();
        },
        onError: () => {
          toast.error("Failed to create TPA. Please try again.");
        },
      }
    );
  };
  return (
    <TpaProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Tpa Index</Heading>
          <TpaTableOperations />
          <Modal>
            <Modal.Open opens="edit">
              <Button>Create TPA</Button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateTpa
                onCloseModal={onCloseModal}
                resourceName={"Tpa"}
                disabled={isCreating}
                onConfirm={handleCreateTpa}
              />
            </Modal.Window>
          </Modal>
        </Row>
        <TpaTable />
      </AppLayout>
    </TpaProvider>
  );
}
