import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import {
  useUpdateImage,
  useBannerImage,
  useMobileBannerImage,
  useUpdateHomeImage,
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
  const { updateHomeImage, isUpdatingHomeImage } = useUpdateHomeImage();
  const { updateBanner, isUpdatingBanner } = useBannerImage();
  const { updateMobileBanner, isUpdatingMobileBanner } = useMobileBannerImage();
  const { errors } = formState;
  if (
    isUpdating ||
    isUpdatingImage ||
    isUpdatingBanner ||
    isUpdatingMobileBanner ||
    isUpdatingHomeImage
  )
    return <SpinnerMini />;

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

  const handleHomeImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    const formDataHomeImage = new FormData();
    formDataHomeImage.append("homeImage", file);

    updateHomeImage(
      {
        id,
        formdata: formDataHomeImage,
      },
      {
        onSuccess: () => {
          toast.success("Home Image updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Home Image:", error);
          toast.error("Failed to update Home Image. Please try again.");
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

  const handleMobileBannerChange = (e, fieldName) => {
    const file = e.target.files[0];
    const formDataMobileBanner = new FormData();
    formDataMobileBanner.append("mobileBanner", file);
    setEditData({ ...editData, [fieldName]: file });

    updateMobileBanner(
      {
        id,
        formdata: formDataMobileBanner,
      },
      {
        onSuccess: () => {
          toast.success("Mobile Banner updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Mobile Banner:", error);
          toast.error("Failed to update Mobile Banner. Please try again.");
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

      <FormRow label="Mobile Banner">
        <ImagePreviewContainer>
          {editData.mobileBanner ? (
            <>
              <img
                src={
                  typeof editData.mobileBanner === "string"
                    ? editData.mobileBanner
                    : URL.createObjectURL(editData.mobileBanner)
                }
                alt="Preview"
                width={200}
                height={110}
              />
              <div className="edit-icon">
                <label htmlFor="mobile-banner-upload">
                  <FaEdit size={16} />
                </label>
                <input
                  id="mobile-banner-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleMobileBannerChange(e, "mobileBanner")}
                />
              </div>
            </>
          ) : (
            <FileInput
              id="mobile-banner"
              accept="image/*"
              type="file"
              onChange={(e) => handleMobileBannerChange(e, "mobileBanner")}
            />
          )}
        </ImagePreviewContainer>
      </FormRow>

      <FormRow label="Home Image">
        <ImagePreviewContainer>
          {editData.homeImage ? (
            <>
              <img
                src={
                  typeof editData.homeImage === "string"
                    ? editData.homeImage
                    : URL.createObjectURL(editData.homeImage)
                }
                alt="Preview"
                width={200}
                height={110}
              />
              <div className="edit-icon">
                <label htmlFor="home-upload">
                  <FaEdit size={16} />
                </label>
                <input
                  id="home-upload"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleHomeImageChange(e, "homeImage")}
                />
              </div>
            </>
          ) : (
            <FileInput
              id="home-upload"
              accept="image/*"
              type="file"
              onChange={(e) => handleHomeImageChange(e, "homeImage")}
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
