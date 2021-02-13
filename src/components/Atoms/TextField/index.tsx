import React, { useState, ChangeEvent, InputHTMLAttributes } from "react";
import { Spacer } from "../Spacer";

import * as S from "./styles";

type TextFieldProps = {
  id: string;
  name: string;
  label?: string;
  disabled?: boolean;
  initialValue?: string;
  onInputChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextField({
  id,
  name,
  label,
  initialValue,
  onInputChange,
  disabled = false,
  ...props
}: TextFieldProps) {
  const [inputValue, setInputValue] = useState(initialValue);

  function changeInputValue(event: ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;

    setInputValue(value);

    !!onInputChange && onInputChange(value);
  }

  return (
    <div>
      {label && <S.Label htmlFor={name}>{label}</S.Label>}

      <Spacer size={8} />
      
      <S.Input
        id={id}
        name={name}
        type="text"
        value={inputValue}
        disabled={disabled}
        onChange={changeInputValue}
        {...props}
      />
    </div>
  );
}
