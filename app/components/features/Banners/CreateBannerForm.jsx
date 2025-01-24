import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useCreateBanner } from "../../admin/banner/parts/useBanner";
import { usePages } from "../../admin/banner/parts/usePages";
import AnotherSelect from "../../ui/AnotherSelect";
import { Stack } from "@mui/material";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";

function CreateBannerForm({ cabinToEdit = {}, onCloseModal }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createBanners } = useCreateBanner();
  const { data, isLoading, error } = usePages();
  console.log("Data", data);
  const isWorking = isCreating;

  // State to store the selected image
  const [imagePreview, setImagePreview] = useState(null);

  // Function to handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };
  const StyledSelect = styled.select`
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    border: 1px solid
      ${(props) =>
        props.type === "white"
          ? "var(--color-grey-100)"
          : "var(--color-grey-300)"};
    border-radius: var(--border-radius-sm);
    background-color: var(--color-grey-0);
    font-weight: 500;
    box-shadow: var(--shadow-sm);
  `;

  function onSubmit(data) {
    const file = typeof data.file === "string" ? data.file : data.file[0];

    const formdata = new FormData();
    formdata.append("banner", file);
    formdata.append("page", data.page);
    formdata.append("status", true);
    console.log("formdata", formdata);
    console.log("Submitted data:", data);

    createBanners(formdata, {
      onSuccess: (data) => {
        reset();
        setImagePreview(null); // Reset image preview
        onCloseModal?.();
      },
    });
  }

  function onError(errors) {
    console.log(errors);
  }

  if (isCreating) return <SpinnerMini />;

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Page Name" error={errors?.page?.message}>
        <StyledSelect
          disabled={isWorking}
          id="page"
          {...register("page", {
            required: "This field is required",
          })}
        >
          <option value="">Select a page</option>
          {data?.map((page, index) => (
            <option key={index} value={page.name}>
              {page.name}
            </option>
          ))}
        </StyledSelect>
      </FormRow>

      <FormRow label={"File"}>
        <FileInput
          id="file"
          accept="image/*"
          type="file"
          {...register("file", {
            required: "This field is required",
          })}
          onChange={(e) => {
            handleImageChange(e); // Update preview on file change
            register("file").onChange(e);
          }}
        />
        <Stack>
          {imagePreview && (
            <div style={{ marginTop: "0.5rem" }}>
              <strong>Preview:</strong>
              <img
                src={imagePreview}
                alt="Preview"
                width={100}
                style={{ borderRadius: "8px", marginTop: "0.5rem" }}
              />
            </div>
          )}
        </Stack>
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
          onClick={() => {
            reset();
            setImagePreview(null); // Clear preview on reset
            onCloseModal?.();
          }}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>{"Create new banner"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateBannerForm;
