import { useState } from "react";

export const useForm = (initialInput) => {
  const [formState, setFormState] = useState(initialInput);

  return [
    formState,
    (e) => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
