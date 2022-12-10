import { useForm } from "react-hook-form";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {
  const schema = yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    email: yup
      .string()
      .email()
      .required("Email is required and should be a valid email address"),
    age: yup
      .number()
      .positive()
      .integer()
      .min(18, "Age should be greater than 18")
      .required("Age is required"),
    password: yup
      .string()
      .min(4)
      .max(25)
      .required(
        "Password is required and it should atleast contain a minimum of 4 characters"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password's doesn't match")
      .required(
        "Confirm password is required and Password and confirm password should be same"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full name" {...register("fullName")} />
        <p>{errors.fullName?.message}</p>
        <input type="text" placeholder="Email" {...register("email")} />
        <p>{errors.email?.message}</p>

        <input type="number" placeholder="Age" {...register("age")} />
        <p>{errors.age?.message}</p>

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
}

export default Form;
