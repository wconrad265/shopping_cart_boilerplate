import { useState, ChangeEvent } from "react";

const useField = (type: string, id: string, initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  const name = id;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return { type, id, name, value, onChange };
};

export default useField;
