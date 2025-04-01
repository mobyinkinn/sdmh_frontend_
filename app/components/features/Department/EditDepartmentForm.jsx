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
  useDeleteBanner,
  useDeleteImage,
  useDeleteMobileBannerImage,
  useDeleteHomeImage,
} from "../../admin/departments/parts/useDepartment";
import Jodit from "../Openings/Jodit";
import SpinnerMini from "../../ui/SpinnerMini";
import { ImagePreviewContainer } from "../../ui/ImagePreviewContainer";
import { FaEdit, FaTrash } from "react-icons/fa";
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
  const { deleteBanner, isDeleting: isDeletingBanner } = useDeleteBanner();
  const { updateMobileBanner, isUpdatingMobileBanner } = useMobileBannerImage();
  const { deleteImage, isDeleting: isDeletingImage } = useDeleteImage();
  const { deleteMobileBanner, isDeleting: isDeletingMobileBanner } =
    useDeleteMobileBannerImage();
  const { deleteHomeImage, isDeleting: isDeletingHomeImage } =
    useDeleteHomeImage();
  const { errors } = formState;

  if (
    isUpdating ||
    isUpdatingImage ||
    isUpdatingBanner ||
    isUpdatingMobileBanner ||
    isUpdatingHomeImage ||
    isDeletingBanner ||
    isDeletingImage ||
    isDeletingMobileBanner ||
    isDeletingHomeImage
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
      { id, formdata: formDataImage },
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
      { id, formdata: formDataHomeImage },
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

    updateBanner(
      { id, formdata: formDataBanner },
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

    updateMobileBanner(
      { id, formdata: formDataMobileBanner },
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

  const handleDeleteBanner = () => {
    const originalBannerImage = editData.bannerImage;
    setEditData({ ...editData, bannerImage: null });

    deleteBanner(id, {
      onSuccess: () => {
        toast.success("Banner deleted successfully!");
        onCloseModal?.();
      },
      onError: (error) => {
        console.error("Failed to delete banner:", error);
        toast.error("Failed to delete banner. Please try again.");
        setEditData({ ...editData, bannerImage: originalBannerImage });
      },
    });
  };

  const handleDeleteImage = () => {
    const originalImage = editData.image;
    setEditData({ ...editData, image: null });

    deleteImage(id, {
      onSuccess: () => {
        toast.success("Image deleted successfully!");
        onCloseModal?.();
      },
      onError: (error) => {
        console.error("Failed to delete image:", error);
        toast.error("Failed to delete image. Please try again.");
        setEditData({ ...editData, image: originalImage });
      },
    });
  };

  const handleDeleteMobileBanner = () => {
    const originalMobileBanner = editData.mobileBanner;
    setEditData({ ...editData, mobileBanner: null });

    deleteMobileBanner(id, {
      onSuccess: () => {
        toast.success("Mobile Banner deleted successfully!");
        onCloseModal?.();
      },
      onError: (error) => {
        console.error("Failed to delete mobile banner:", error);
        toast.error("Failed to delete mobile banner. Please try again.");
        setEditData({ ...editData, mobileBanner: originalMobileBanner });
      },
    });
  };

  const handleDeleteHomeImage = () => {
    const originalHomeImage = editData.homeImage;
    setEditData({ ...editData, homeImage: null });

    deleteHomeImage(id, {
      onSuccess: () => {
        toast.success("Home Image deleted successfully!");
        onCloseModal?.();
      },
      onError: (error) => {
        console.error("Failed to delete home image:", error);
        toast.error("Failed to delete home image. Please try again.");
        setEditData({ ...editData, homeImage: originalHomeImage });
      },
    });
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
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  display: "flex",
                  gap: "8px",
                  backgroundColor: "white",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              >
                <label
                  htmlFor="image-upload"
                  style={{ cursor: "pointer", color: "black" }}
                >
                  <FaEdit size={16} />
                </label>
                <div
                  type="button"
                  onClick={handleDeleteImage}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#ff4d4f",
                    display: "flex",
                    alignItems: "center",
                    padding: 0,
                  }}
                >
                  <FaTrash size={16} />
                </div>
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
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  display: "flex",
                  gap: "8px",
                  backgroundColor: "white",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              >
                <label
                  htmlFor="banner-upload"
                  style={{ cursor: "pointer", color: "black" }}
                >
                  <FaEdit size={16} />
                </label>
                <div
                  type="button"
                  onClick={handleDeleteBanner}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#ff4d4f",
                    display: "flex",
                    alignItems: "center",
                    padding: 0,
                  }}
                >
                  <FaTrash size={16} />
                </div>
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
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  display: "flex",
                  gap: "8px",
                  backgroundColor: "white",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              >
                <label
                  htmlFor="mobile-banner-upload"
                  style={{ cursor: "pointer", color: "black" }}
                >
                  <FaEdit size={16} />
                </label>
                <div
                  type="button"
                  onClick={handleDeleteMobileBanner}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#ff4d4f",
                    display: "flex",
                    alignItems: "center",
                    padding: 0,
                  }}
                >
                  <FaTrash size={16} />
                </div>
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
              <div
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  display: "flex",
                  gap: "8px",
                  backgroundColor: "white",
                  padding: "4px",
                  borderRadius: "4px",
                }}
              >
                <label
                  htmlFor="home-upload"
                  style={{ cursor: "pointer", color: "black" }}
                >
                  <FaEdit size={16} />
                </label>
                <div
                  type="button"
                  onClick={handleDeleteHomeImage}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#ff4d4f",
                    display: "flex",
                    alignItems: "center",
                    padding: 0,
                  }}
                >
                  <FaTrash size={16} />
                </div>
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
