import Heading from "../../ui/Heading";
import { IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDeleteMultiImageFromBlog } from "../../admin/blog/useBlogs";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";
import FileInput from "../../ui/FileInput";
import Button from "../../ui/Button";
const AddImagesFormBlog = ({
  id,
  onConfirm,
  disabled,
  editData,
  setEditData,
  onCloseModal,
}) => {
  const { mutate: removeMultiImageFromBlog } = useDeleteMultiImageFromBlog();

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal?.();
    onConfirm();
  };

  console.log("edit data b", editData);

  console.log("id", id);

  const handleDeleteImage = (index) => {
    const payload = { index: { index } };

    removeMultiImageFromBlog(
      { id, data: payload },
      {
        onSuccess: () => {
          toast.success("Multi Image deleted successfully!");
        },
        onError: (error) => {
          console.error("Failed to delete multi Image:", error);
          toast.error("Failed to delete multi Image. Please try again.");
        },
      }
    );
    const updatedImages = editData.images.filter((_, i) => i !== index);
    setEditData({ ...editData, images: updatedImages });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Heading as="h3">Update Images</Heading>

      <Stack
        direction="row"
        pt={5}
        pb={2}
        spacing={2}
        sx={{ flexWrap: "wrap", gap: 3 }}
      >
        {editData?.images?.map((image, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={image}
              alt={`Preview ${index}`}
              style={{ width: "100px", height: "100px", objectFit: "inherit" }}
            />
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteImage(index)}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                color: "red",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
              }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </Stack>

      <Stack pb={2}>
        <FormRow label="Add New Images">
          <FileInput
            type="file"
            id="images"
            accept="image/*"
            onChange={(e) => {
              const files = Array.from(e.target.files);
              const newImages = files.map((file) => URL.createObjectURL(file));
              setEditData({
                ...editData,
                images: [...editData.images, ...newImages],
              });
            }}
            multiple
          />
        </FormRow>
      </Stack>

      <FormRow>
        <Button
          variation="secondary"
          type="button"
          onClick={() => onCloseModal?.()}
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={disabled}>
          Save Changes
        </Button>
      </FormRow>
    </form>
  );
};

export default AddImagesFormBlog;
