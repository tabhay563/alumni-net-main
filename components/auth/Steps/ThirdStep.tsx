import React from "react";
import styles from "./Steps.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";

interface ThirdStep {
  company_name: string;
  designation: string;
  year_of_experience: number;
}

const ThirdStep = ({ register, handleSubmit, errors }: any) => {
  return (
    <>
      <div className={styles.form__contaienr}>
        <div className={styles.form__center}>
          <div className={styles.input__div}>
            <span>{"Company Name*"}</span>
            <input
              type={"text"}
              placeholder={"Company Name"}
              className={styles.input}
              {...register("company_name", {
                required: true,
              })}
            />
            {errors?.company_name?.type === "required" && (
              <p
                style={{
                  color: "var(--notification-red)",
                  fontSize: "0.825rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                {"This field is required"}
              </p>
            )}
          </div>
          <div className={styles.input__div}>
            <span>{"Designation*"}</span>
            <input
              type={"text"}
              placeholder={"Designation"}
              className={styles.input}
              {...register("designation", {
                required: true,
              })}
            />
            {errors?.designation?.type === "required" && (
              <p
                style={{
                  color: "var(--notification-red)",
                  fontSize: "0.825rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                {"This field is required"}
              </p>
            )}
          </div>

          <div className={styles.input__div}>
            <span>{"Year of Experience*"}</span>
            <input
              type={"number"}
              placeholder={"Year of Experience"}
              className={styles.input}
              {...register("year_of_experience", {
                required: true,
              })}
            />
            {errors?.year_of_experience?.type === "required" && (
              <p
                style={{
                  color: "var(--notification-red)",
                  fontSize: "0.825rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                {"This field is required"}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
