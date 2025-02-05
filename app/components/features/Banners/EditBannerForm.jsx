import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import { useUpdateBanner } from "../../admin/banner/parts/useBanner";
import { Stack } from "@mui/material";
import SpinnerMini from "../../ui/SpinnerMini";
import { ImagePreviewContainer } from "../../ui/ImagePreviewContainer";
import { FaEdit } from "react-icons/fa";

function EditBannerForm({ onCloseModal, pageName, id, editData, setEditData }) {
  const { isUpdating, updateBanners } = useUpdateBanner();
  if (isUpdating) return <SpinnerMini />;

  const handleBannerChange = (e) => {
    const file = e.target.files[0];

    const formDataBanner = new FormData();
    formDataBanner.append("banner", file);

    updateBanners(
      {
        pageName,
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
      setEditData({ ...editData, banner: file });
    }
  };
  const handleMobileBannerChange = (e) => {
    const file = e.target.files[0];

    const formDataMobileBanner = new FormData();
    formDataMobileBanner.append("mobileBanner", file);

    updateBanners(
      {
        pageName,
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
      setEditData({ ...editData, mobileBanner: file });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = (e) => {
    onCloseModal();
    const formDataLink = {
      link: editData.link,
    };
    updateBanners({ pageName, formdata: formDataLink });
  };

  return (
    <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="Link">
        <Input
          type="text"
          id="link"
          name="link"
          value={editData.link || ""}
          onChange={handleInputChange}
        />
      </FormRow>

      <Stack>
        <label>
          Banner:
          <ImagePreviewContainer>
            {editData.banner && (
              <>
                <img
                  src={
                    typeof editData.banner === "string"
                      ? editData.banner
                      : URL.createObjectURL(editData.banner)
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
                    onChange={handleBannerChange}
                  />
                </div>
              </>
            )}
          </ImagePreviewContainer>
        </label>
      </Stack>

      <Stack>
        <label>
          Mobile Banner:
          <ImagePreviewContainer>
            {editData.mobileBanner && (
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
                  <label htmlFor="mobile-image-upload">
                    <FaEdit size={16} />
                  </label>
                  <input
                    id="mobile-image-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleMobileBannerChange}
                  />
                </div>
              </>
            )}
          </ImagePreviewContainer>
        </label>
      </Stack>

      <Stack
        direction="row"
        sx={{
          justifyContent: "end",
          gap: "20px",
        }}
      >
        <Button>{"Update Banner"}</Button>
      </Stack>
    </Form>
  );
}

export default EditBannerForm;
