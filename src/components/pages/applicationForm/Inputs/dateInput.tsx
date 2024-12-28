// Inputs/DateInputField.tsx
import React from "react";
import ReactDatePicker from "react-datepicker";
import { Calendar } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

interface DateInputFieldProps {
  label: string;
  selected: Date | null;
  onChange: (date: Date | null) => void;
  disabled?: boolean;
  max?: boolean;
  error?: boolean;
}

const DateInputField: React.FC<DateInputFieldProps> = ({
  label,
  selected,
  onChange,
  disabled = false,
  max,
  error = false,
}) => {
  return (
    <div className="raleway text-xs flex w-full flex-1 flex-col gap-1 font-medium">
      <div className="flex gap-1 items-center">
        <label>{label}</label>
        {error && <p className="text-xs text-red-500"> is required</p>}
      </div>
      <div
        className={`border  ${
          error ? "border-red-500 border-2" : ""
        } flex items-center gap-3 rounded-md p-2 outline-[0.5px] outline-secondary w-full ${
          disabled ? "opacity-50" : ""
        }`}
      >
        <Calendar size={15} />
        <div className="w-full">
          <ReactDatePicker
            selected={selected}
            onChange={onChange}
            maxDate={max ? new Date() : undefined}
            dateFormat="dd/MM/yyyy"
            disabled={disabled}
            className="w-full outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default DateInputField;
