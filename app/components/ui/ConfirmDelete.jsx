// /* eslint-disable no-unused-vars */

// import styled from "styled-components";
// import Button from "./Button";
// import Heading from "./Heading";

// const StyledConfirmDelete = styled.div`
//   width: 30rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;

//   & p {
//     color: var(--color-grey-500);
//     margin-bottom: 1rem;
//   }

//   & div {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1rem;
//   }
// `;

// function ConfirmDelete({ onCloseModal, resourceName, onConfirm, disabled }) {
//   return (
//     <StyledConfirmDelete>
//       <Heading as="h3">Delete {resourceName}</Heading>
//       <p>
//         Are you sure you want to delete this {resourceName} permanently? This
//         action cannot be undone.
//       </p>

//       <div>
//         <Button
//           variation="secondary"
//           onClick={onCloseModal}
//           disabled={disabled}
//         >
//           Cancel
//         </Button>
//         <Button variation="danger" onClick={onConfirm} disabled={disabled}>
//           Delete
//         </Button>
//       </div>
//     </StyledConfirmDelete>
//   );
// }

// export default ConfirmDelete;
import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

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

function ConfirmDelete({ onCloseModal, resourceName, onConfirm, disabled }) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleDelete = () => {
    // Perform the delete action
    onConfirm();

    // Close the modal after delete
    setIsModalOpen(false);
    onCloseModal(); // This will close the modal as well
  };

  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete this {resourceName} permanently? This
        action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          onClick={() => {
            onCloseModal();
            setIsModalOpen(false); // Close modal on cancel
          }}
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button variation="danger" onClick={handleDelete} disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
