import { useState } from "react";

export const useForm = (initialInput) => {
  const [formState, setFormState] = useState(initialInput);
  // lưu ý là name của input tag không được bắt đầu bằng chữ in hoa
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
