import { E164Number } from "libphonenumber-js/core";
import PhoneInput from "react-phone-input-2";

interface PhoneInputFieldProps {
  label: string;
  value: E164Number | undefined;
  onChange: (phone: string) => void;
}

const PhoneInputField: React.FC<PhoneInputFieldProps> = ({
  label,
  value,
  onChange,
}) => (
  <div className="raleway text-xs flex   flex-col w-full gap-2  font-medium">
    <label>{label}</label>
    <PhoneInput
      country="us"
      placeholder="(000) - 123 - 4567"
      value={value as E164Number | undefined}
      onChange={onChange}
      buttonStyle={{ borderColor: "#e2e8f0" }}
      dropdownStyle={{ fontSize: 13 }}
      inputStyle={{
        height: "2.2rem",
        fontFamily: "raleway",
        borderColor: "#e2e8f0",
        borderRadius: "6px",
        width: "100%",
      }}
    />
  </div>
);

export default PhoneInputField;
