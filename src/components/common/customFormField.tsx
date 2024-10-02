/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Control } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { E164Number } from "libphonenumber-js/core";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
  SELECT = "select",
  PHONE_INPUT = "phoneInput",
}

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  placeholder?: string;
  label?: string;
  iconSrc?: string;
  iconAlt?: string;
  disabled?: boolean;

  children?: React.ReactNode;
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex items-center rounded-md relative">
          <FormControl>
            <Input
              placeholder={props.placeholder}
              type={
                (props.name === "password" ||
                  props.name === "confirmPassword") &&
                !showPassword
                  ? "password"
                  : "text"
              }
              {...field}
              className="py-6 text-[13px]   rounded-lg plus-jakarta placeholder:text-[13px] border border-[#d9d9d9]"
            />
          </FormControl>
          {(props.name === "password" || props.name === "confirmPassword") && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOffIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <EyeIcon className="w-5 h-5 text-gray-500" />
              )}
            </button>
          )}
        </div>
      );
      return (
        <div className="flex rounded-md  ">
          {/* {props.iconSrc && (
            <img
              src={props.iconSrc}
              height={props.iconSrc === "/assets/img/key.svg" ? 16 : 24}
              width={props.iconSrc === "/assets/img/key.svg" ? 16 : 24}
              alt={props.iconAlt || "icon"}
              className="ml-2"
            />
          )} */}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              type={
                props.name === "password" || props.name === "confirmPassword"
                  ? "password"
                  : "text"
              }
              {...field}
              className="py-6 text-[13px] rounded-lg plus-jakarta placeholder:text-[13px] border border-[#d9d9d9] "
            />
          </FormControl>
        </div>
      );
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            country="us"
            placeholder={props.placeholder}
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            buttonStyle={{
              backgroundColor: "#fff",
              borderColor: "#d9d9d9",
            }}
            dropdownStyle={{
              backgroundColor: "#fff",
              fontSize: 13,
            }}
            inputStyle={{
              height: "2.75rem",
              backgroundColor: "#fff",
              borderColor: "#d9d9d9",
              borderRadius: "6px",
              width: "100%",
            }}
          />
        </FormControl>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            rows={8}
            className="shad-textArea placeholder:text-[13px] "
            disabled={props.disabled}
          />
        </FormControl>
      );

    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className="flex items-center gap-2">
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
              className="border-fade"
            />
            <label
              style={{ color: "black" }}
              htmlFor={props.name}
              className="checkbox-label text-[#344054] font-medium plus-jakarta text-[13px]  "
            >
              {props.label}{" "}
              {props.name === "termsAndConditions" && (
                <a href="#" className="underline text-fade">
                  Terms of Service and Privacy Policy
                </a>
              )}
            </label>
          </div>
        </FormControl>
      );

    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className="shad-select-trigger text-fade">
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className="shad-select-content">
              <SelectGroup>{props.children}</SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
      );

    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}

          <RenderField field={field} props={props} />
          <FormMessage className="shad-error text-red-500 font-medium text-xs" />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
