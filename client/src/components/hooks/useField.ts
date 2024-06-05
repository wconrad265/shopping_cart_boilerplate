import { useState, ChangeEvent } from "react";

const useField = (type: string, id: string, initialValue: string | number) => {
  const [value, setValue] = useState(initialValue);
  const name = id;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const reset = () => {
    if (typeof initialValue === "string" && initialValue === "") {
      setValue("");
    } else if (typeof initialValue === "number" && initialValue === 0) {
      setValue(0);
    }
  };

  return { type, id, name, value, onChange, reset };
};

export default useField;
