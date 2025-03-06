import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import {
  useUpdateImage,
  useBannerImage,
} from "../../admin/departments/parts/useDepartment";
import Jodit from "../Openings/Jodit";
import SpinnerMini from "../../ui/SpinnerMini";
import { Stack } from "@mui/material";
import { ImagePreviewContainer } from "../../ui/ImagePreviewContainer";
import { FaEdit } from "react-icons/fa";
import FileInput from "../../ui/FileInput";

function EditDepartmentForm({
  onCloseModal,
  id,
  editData,
  setEditData,
  aboutContent,
  setAboutContent,
  onConfirm,
  isUpdating,
}) {
  const { formState } = useForm({
    defaultValues: {},
  });
  const { updateImage, isUpdatingImage } = useUpdateImage();
  const { updateBanner, isUpdatingBanner } = useBannerImage();
  const { errors } = formState;
  if (isUpdating || isUpdatingImage || isUpdatingBanner) return <SpinnerMini />;

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal?.();
    onConfirm();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    const formDataImage = new FormData();
    formDataImage.append("image", file);

    updateImage(
      {
        id,
        formdata: formDataImage,
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
      setEditData({ ...editData, [fieldName]: file });
    }
  };

  const handleBannerChange = (e, fieldName) => {
    const file = e.target.files[0];
    const formDataBanner = new FormData();
    formDataBanner.append("banner", file);
    setEditData({ ...editData, [fieldName]: file });

    updateBanner(
      {
        id,
        formdata: formDataBanner,
      },
      {
        onSuccess: () => {
          toast.success("Banner updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Banner:", error);
          toast.error("Failed to update Banner. Please try again.");
        },
      }
    );

    if (file) {
      setEditData({ ...editData, [fieldName]: file });
    }
  };

  function onError(errors) {}
  return (
    <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="Name">
        <Input
          name="name"
          type="text"
          id="name"
          value={editData.name}
          onChange={handleInputChange}
        />
      </FormRow>

      <FormRow label="Content"></FormRow>
      <Jodit content={aboutContent} setContent={setAboutContent} />

      <FormRow label="Image">
        <ImagePreviewContainer>
          {editData.image ? (
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
                  onChange={(e) => handleImageChange(e, "image")}
                />
              </div>
            </>
          ) : (
            <FileInput
              id="image"
              accept="image/*"
              type="file"
              onChange={(e) => handleImageChange(e, "image")}
            />
          )}
        </ImagePreviewContainer>
      </FormRow>
      <FormRow label="Banner">
        <ImagePreviewContainer>
          {editData.bannerImage ? (
            <>
              <img
                src={
                  typeof editData.bannerImage === "string"
                    ? editData.bannerImage
                    : URL.createObjectURL(editData.bannerImage)
                }
                alt="Preview"
                width={200}
                height={110}
              />
              <div className="edit-icon">
                <label htmlFor="banner-upload">
                  <FaEdit size={16} />
                </label>
                <input
                  id="banner-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleBannerChange(e, "bannerImage")}
                />
              </div>
            </>
          ) : (
            <FileInput
              id="banner"
              accept="image/*"
              type="file"
              onChange={(e) => handleBannerChange(e, "bannerImage")}
            />
          )}
        </ImagePreviewContainer>
      </FormRow>

      <FormRow marginLeft={2}>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button>{"Update Department"}</Button>
      </FormRow>
    </Form>
  );
}

export default EditDepartmentForm;
