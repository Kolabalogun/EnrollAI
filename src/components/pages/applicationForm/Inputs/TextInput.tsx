import { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  error?: boolean;
}

const TextInputField = ({
  label,
  name,
  value,
  onChange,
  type,
  error,
}: InputFieldProps) => {
  // console.log(error);

  return (
    <div className="raleway text-xs flex   flex-col w-full gap-2   font-medium">
      <div className="flex gap-1 items-center">
        <label htmlFor={name}>{label}</label>
        {error && <p className="text-xs text-red-500"> is required</p>}
      </div>
      <input
        id={name}
        name={name}
        type={type ?? "text"}
        placeholder={label}
        value={value}
        onChange={onChange || (() => {})}
        className={`border rounded-md p-2 outline-[0.5px] outline-secondary flex-1 ${
          error ? "border-red-500 border-2" : ""
        }`}
      />
    </div>
  );
};
export default TextInputField;
