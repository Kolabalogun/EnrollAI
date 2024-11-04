import { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextInputField = ({ label, name, value, onChange }: InputFieldProps) => (
  <div className="raleway text-xs flex   flex-col w-full gap-2   font-medium">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type="text"
      placeholder={label}
      value={value}
      onChange={onChange || (() => {})}
      className="border rounded-md p-2 outline-[0.5px] outline-secondary flex-1"
    />
  </div>
);
export default TextInputField;
