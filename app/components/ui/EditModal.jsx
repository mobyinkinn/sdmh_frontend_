// /* eslint-disable no-unused-vars */

// import styled from "styled-components";
// import Button from "./Button";
// import Heading from "./Heading";
// import { Stack } from "@mui/material";

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

// function ConfirmEdit({ onCloseModal, resourceName, onConfirm, disabled }) {
//   return (
//     <StyledConfirmDelete>
//       <Heading as="h3">Edit {resourceName}</Heading>
//       <Stack>

//       </Stack>
//       {/* <div>
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
//       </div> */}
//     </StyledConfirmDelete>
//   );
// }

// export default ConfirmEdit;


import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { Stack } from "@mui/material";

const StyledConfirmEdit = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & label {
    font-size: 1rem;
    color: var(--color-grey-700);
  }

  & input,
  & textarea {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-sm);
    margin-top: 0.3rem;
  }

  & textarea {
    resize: vertical;
    min-height: 8rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

function ConfirmEdit({
  onCloseModal,
  resourceName,
  onConfirm,
  disabled,
  editData,
  setEditData,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditData({ ...editData, image: file });
    }
  };

  return (
    <StyledConfirmEdit>
      <Heading as="h3">Edit {resourceName}</Heading>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleInputChange}
          />
        </label>
        <Stack direction={"row"}>
          <label>
            Small Description:
            <textarea
              name="smallDescription"
              value={editData.smallDescription}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={editData.description}
              onChange={handleInputChange}
            />
          </label>
        </Stack>
        <Stack direction={"row"}>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={editData.date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Featured Image:
            <input type="file" name="image" onChange={handleImageChange} />
            {editData.image && (
              <div style={{ marginTop: "0.5rem" }}>
                <strong>Preview:</strong>
                <img
                  src={
                    typeof editData.image === "string"
                      ? editData.image
                      : URL.createObjectURL(editData.image)
                  }
                  alt="Preview"
                  width={100}
                  style={{ borderRadius: "8px", marginTop: "0.5rem" }}
                />
              </div>
            )}
          </label>
        </Stack>
        <div>
          <Button
            variation="secondary"
            onClick={onCloseModal}
            disabled={disabled}
          >
            Cancel
          </Button>
          <Button variation="primary" onClick={onConfirm} disabled={disabled}>
            Save Changes
          </Button>
        </div>
      </form>
    </StyledConfirmEdit>
  );
}

export default ConfirmEdit;
