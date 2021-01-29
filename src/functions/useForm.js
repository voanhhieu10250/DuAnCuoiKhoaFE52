import { useState } from "react";

export const useForm = (initialInput) => {
  const [formState, setFormState] = useState(initialInput);
  // lưu ý là name của input tag không được bắt đầu bằng chữ in hoa. Tên tham số truyền vào phải
  //trùng với name của input
  return [
    formState,
    (e) => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    },
    (field) => {
      setFormState({
        ...formState,
        [field]: "",
      });
    },
    () => {
      setFormState(initialInput);
    },
  ];
};

export const validateEmail = (email) => {
  const res = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(email);
};

export const validateVnPhoneNum = (phoneNums) => {
  const res = /(09|01[2689])+([0-9]{8})\b/g;
  return res.test(phoneNums);
};
