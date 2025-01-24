import Button from "./Button";
import Heading from "./Heading";
import { Stack } from "@mui/material";
import Input, { DateInput } from "./Input";
import FormRow from "./FormRow";
import { FaEdit } from "react-icons/fa";
import { useUpdateSingleImageFromBlog } from "../admin/blog/useBlogs";
import { ImagePreviewContainer } from "./ImagePreviewContainer";
import Jodit from "../features/Openings/Jodit";
import Spinner from "./Spinner";
import SpinnerMini from "./SpinnerMini";

function ConfirmEdit({
  id,
  onCloseModal,
  resourceName,
  onConfirm,
  editData,
  setEditData,
  descContent,
  setDescContent,
  isUpdating,
}) {
  const { mutate: updateSingleImageFromBlog, isPending: isImageUpdating } =
    useUpdateSingleImageFromBlog();

  if (isImageUpdating) return <SpinnerMini />;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const formDataImage = new FormData();
    formDataImage.append("image", file);

    updateSingleImageFromBlog(
      {
        id,
        data: formDataImage,
      },
      {
        onSuccess: () => {
          toast.success("Image updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Image:", error);
          toast.error("Failed to update Image. Please try again.");
        },
      }
    );
    if (file) {
      setEditData({ ...editData, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onCloseModal?.();
    onConfirm(); // Call the onConfirm function to handle the submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h3">Edit {resourceName}</Heading>
      <Stack pt={2}>
        <Stack direction={"row"} columnGap={7}>
          <FormRow label="Title">
            <Input
              type="text"
              id="title"
              value={editData.title}
              onChange={handleInputChange}
              name="title"
            />
          </FormRow>
          <FormRow label="Date">
            <DateInput
              type="date"
              id="date"
              value={editData.date}
              onChange={handleInputChange}
              name="date"
            />
          </FormRow>
        </Stack>
        <FormRow label="Short Description" p={"0px 10px"}>
          <Input
            type="text"
            id="smallDescription"
            value={editData.smallDescription}
            onChange={handleInputChange}
            name="smallDescription"
          />
        </FormRow>

        <FormRow label="Description"></FormRow>
        <Jodit content={descContent} setContent={setDescContent} />

        <Stack>
          <label>
            Image:
            <ImagePreviewContainer>
              {editData.image && (
                <>
                  <img
                    src={
                      typeof editData.image === "string"
                        ? editData.image
                        : URL.createObjectURL(editData.image)
                    }
                    alt="Preview"
                    width={200}
                    height={110}
                  />
                  <div className="edit-icon">
                    <label htmlFor="image-upload">
                      <FaEdit size={16} />
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  </div>
                </>
              )}
            </ImagePreviewContainer>
          </label>
        </Stack>
        <FormRow>
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button>{"Update Blog"}</Button>
        </FormRow>
      </Stack>
    </form>
  );
}

export default ConfirmEdit;
