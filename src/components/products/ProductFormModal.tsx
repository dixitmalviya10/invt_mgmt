import { Dialog } from "primereact/dialog";
import React, { useEffect, useState } from "react";
import { ProductDialogProps, ProductForm } from "../../types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import {
  AutoComplete,
  AutoCompleteCompleteEvent,
} from "primereact/autocomplete";
import { InputNumber } from "primereact/inputnumber";
import { ALL_CATEGORIES } from "../../constants/options";
import { useAppDispatch } from "../../store/store";
import { addProduct, updateProduct } from "../../store/slices/productSlice";
import { toast } from "sonner";
import { CheckCheck, X } from "lucide-react";

const ProductFormModal: React.FC<ProductDialogProps> = ({
  visible,
  setVisible,
  productData,
  dialogType,
}) => {
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const searchCategories = (event: AutoCompleteCompleteEvent) => {
    const query = event.query.toLowerCase();
    const _filteredCategories = ALL_CATEGORIES.filter((category) => {
      return category.toLowerCase().includes(query); // Or .startsWith(query)
    });
    setFilteredCategories(_filteredCategories);
  };
  const { control, handleSubmit, setValue, reset } = useForm<ProductForm>({
    defaultValues: {
      name: "",
      sku: "",
      category: "",
      costPrice: 0,
      sellingPrice: 0,
      currentQty: 0,
    },
  });

  const onSubmit: SubmitHandler<ProductForm> = (data) => {
    if (dialogType === "EDIT") {
      dispatch(updateProduct({ id: productData.id, ...data }));
      toast.success("Product updated successfully");
    } else if (dialogType === "ADD") {
      dispatch(addProduct({ id: Math.random(), ...data }));
      toast.success("Product added successfully");
    }
    reset();
    setVisible(false);
  };

  // console.log("productData==", productData, dialogType);
  useEffect(() => {
    if (dialogType !== "ADD" && typeof productData === "object") {
      for (const [key, value] of Object.entries(productData)) {
        if (key !== "id") {
          setValue(key as keyof ProductForm & { id: number | null }, value);
        }
      }
    }
  }, [dialogType, productData, setValue]);
  return (
    <Dialog
      className="mx-3"
      headerClassName="py-3"
      contentClassName="pt-1 pb-3"
      resizable={false}
      draggable={false}
      header="Add"
      visible={visible}
      style={{ maxWidth: "30rem" }}
      onHide={() => {
        if (!visible) return;
        reset();
        setVisible(false);
      }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-nogutter gap-3 mb-3">
          <div className="col-12 lg:col">
            <label htmlFor="name">
              Name <span className="p-error">*</span>
            </label>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <InputText
                  {...field}
                  invalid={fieldState.invalid}
                  id={field.name}
                  className="block w-full"
                />
              )}
            />
          </div>
          <div className="col-12 lg:col">
            <label htmlFor="sku">
              SKU <span className="p-error">*</span>
            </label>
            <Controller
              name="sku"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState }) => (
                <InputText
                  {...field}
                  invalid={fieldState.invalid}
                  id={field.name}
                  className="block w-full"
                />
              )}
            />
          </div>
        </div>
        <div className="grid grid-nogutter gap-3 mb-3">
          <div className="col-12 lg:col">
            <label htmlFor="category">Select Category</label>
            <Controller
              name="category"
              control={control}
              render={({ field, fieldState }) => (
                <AutoComplete
                  {...field}
                  inputId={field.name}
                  invalid={fieldState.invalid}
                  suggestions={filteredCategories}
                  completeMethod={searchCategories}
                  forceSelection
                  placeholder="Select a category"
                  inputClassName="w-full block"
                  // className="w-full"
                />
              )}
            />
          </div>
          <div className="col-12 lg:col">
            <label htmlFor="costPrice">Cost Price</label>
            <Controller
              name="costPrice"
              control={control}
              render={({ field }) => (
                <InputNumber
                  inputId={field.name}
                  className="w-full"
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                  value={field.value}
                  onValueChange={(e) => field.onChange(e.value)}
                />
              )}
            />
          </div>
        </div>
        <div>
          <div className="grid grid-nogutter gap-3 mb-3">
            <div className="col-12 lg:col">
              <label htmlFor="sellingPrice">Selling Price</label>
              <Controller
                name="sellingPrice"
                control={control}
                render={({ field }) => (
                  <InputNumber
                    mode="currency"
                    currency="USD"
                    locale="en-US"
                    inputId={field.name}
                    className="w-full"
                    value={field.value}
                    onValueChange={(e) => field.onChange(e.value)}
                  />
                )}
              />
            </div>
            <div className="col-12 lg:col">
              <label htmlFor="currentQty">Quantity</label>
              <Controller
                name="currentQty"
                control={control}
                render={({ field }) => (
                  <InputNumber
                    inputId={field.name}
                    className="w-full"
                    value={field.value}
                    onValueChange={(e) => field.onChange(e.value)}
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-content-end">
          <Button
            icon={<X size={20} className="mr-1" />}
            severity="secondary"
            size="small"
            label="Cancel"
            type="button"
            outlined
            onClick={() => {
              reset();
              setVisible(false);
            }}
          />
          <Button
            icon={<CheckCheck size={20} className="mr-1" />}
            size="small"
            label="Submit"
            type="submit"
          />
        </div>
      </form>
    </Dialog>
  );
};

export default ProductFormModal;
