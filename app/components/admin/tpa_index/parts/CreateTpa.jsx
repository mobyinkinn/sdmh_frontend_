/* eslint-disable no-unused-vars */

import styled from "styled-components";
import Button from "@/app/components/ui/Button";
import Heading from "@/app/components/ui/Heading";

const StyledConfirmDelete = styled.div`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

function CreateTpa({ onCloseModal, resourceName, onConfirm, disabled }) {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const form = e.target; 
    const formData = new FormData(form); 
    formData.append("status", true); 
    onConfirm(formData); 
  };
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Create {resourceName}</Heading>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label htmlFor="logo">Logo</label>
          <input type="file" id="logo" name="logo" required />
        </div>

        <div>
          <Button
            variation="secondary"
            onClick={onCloseModal}
            disabled={disabled}
          >
            Cancel
          </Button>
          <Button variation="danger" onClick={onConfirm} disabled={disabled}>
            Create
          </Button>
        </div>
      </form>
    </StyledConfirmDelete>
  );
}

export default CreateTpa;
