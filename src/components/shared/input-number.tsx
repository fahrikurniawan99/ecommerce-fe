import { ChangeEvent } from "react";
import { Input, InputProps } from "../ui/input";

type InputNumberProps = {} & InputProps;

export const InputNumber = ({ onChange, ...props }: InputNumberProps) => {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    const notDigit = /\D/;

    if (notDigit.test(value) === true) {
      event.target.value = value.replace(/\D/g, "");
    }

    onChange && onChange(event);
  };

  return (
    <Input
      type="text"
      inputMode="numeric"
      onChange={handleInputChange}
      {...props}
    />
  );
};
