import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "../../../styles/PageStyles/Auth/CompleteProfile.module.scss";

interface FirstStep {
  fname: string;
  email: string;
  phone: number;
  url: string;
  bio: string;
}

const FirstStep = ({ register, handleSubmit, errors }: any) => {
  const emailVerifyRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return (
    <>
      <div className={styles.form__contaienr}>
        <div className={styles.form__left}>
          <div className={styles.input__div}>
            <span>{"Full Name*"}</span>
            <input
              type={"text"}
              placeholder={"Full Name"}
              className={styles.input}
              {...register("fname", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
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
            <span>{"Email*"}</span>
            <input
              type={"email"}
              className={styles.input}
              {...register("email", {
                required: true,
                pattern: emailVerifyRegex,
              })}
            />
            {errors?.email?.type === "required" && (
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
            {errors?.email?.type === "pattern" && (
              <p
                style={{
                  color: "var(--notification-red)",
                  fontSize: "0.825rem",
                  margin: 0,
                  padding: 0,
                }}
              >
                {"Email only"}
              </p>
            )}
          </div>
          <div className={styles.input__div}>
            <span>{"Phone*"}</span>
            <input
              type={"number"}
              className={styles.input}
              {...register("phone", {
                required: true,
              })}
            />
            {errors?.email?.type === "required" && (
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

        <div className={styles.form__right}>
          <div className={styles.input__div}>
            <span>{"Add Your Website URL (if any)"}</span>
            <input
              type={"text"}
              className={styles.input}
              {...register("url")}
            />
          </div>
          <div className={styles.input__div}>
            <span>{"About Yourself"}</span>
            <textarea
              placeholder={"Short Description about yourself!!!!"}
              className={styles.input}
              {...register("bio")}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
