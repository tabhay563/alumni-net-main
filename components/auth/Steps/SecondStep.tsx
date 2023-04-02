import React from "react";
import styles from "./Steps.module.scss";

interface SecondStep {
  clgname: string;
  branch: string;
  year_of_passing: number;
}

const SecondStep = ({register, handleSubmit ,errors}: any) => {

  return (
    <>
      <div className={styles.form__contaienr}>
        <div className={styles.form__center}>
          <div className={styles.input__div}>
            <span>{"College Name*"}</span>
            <input
              type={"text"}
              placeholder={"College Name"}
              className={styles.input}
              {...register("clgname", {
                required: true,
              })}
            />
            {errors?.clgname?.type === "required" && (
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
            <span>{"Branch*"}</span>
            <input
              type={"text"}
              placeholder={"Branch"}
              className={styles.input}
              {...register("branch", {
                required: true,
              })}
            />
            {errors?.branch?.type === "required" && (
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
            <span>{"Year of Passing*"}</span>
            <input
              type={"number"}
              placeholder={"Year of Passing"}
              className={styles.input}
              {...register("year_of_passing", {
                required: true,
              })}
            />
            {errors?.year_of_passing?.type === "required" && (
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

export default SecondStep;
