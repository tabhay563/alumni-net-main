import React, { useState } from "react";
import styles from "../../../../styles/PageStyles/Auth/CollegeReg.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import BlobBackground from "../../../../components/auth/BlobBackground";

interface FormSchema {
  college_name: string;
  year_of_establishment: number;
  college_type: string;
  college_address: string;
  branches: string;
  college_website: string;
}
const CompleteProfile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>();

  const onSubmit: SubmitHandler<FormSchema> = (formData) => {
    console.log(formData);
  };

  // Function to Display the next step

  return (
    <>
      <BlobBackground />

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_head}>
            {/* HEADER */}
            <h1 className={styles.card_head__title}>Complete Your Profile</h1>
          </div>
          <div className={styles.card__content}>
            <h2 className={styles.content__title}>Your College</h2>
            <h1 className={styles.content__subtitle}>
              Add Info of Your Respective College
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              {/* FORM INPUT DIVS */}
              <div className={styles.form__input}>
                <span>{"College Name*"}</span>
                <input
                  placeholder="Enter College Name"
                  type={"text"}
                  className={styles.input}
                  {...register("college_name", {
                    required: true,
                  })}
                />
                {errors?.college_name?.type === "required" && (
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
              <div className={styles.form__input}>
                <span>{"Year of Establishment*"}</span>
                <input
                  placeholder="Enter Year of Establishment"
                  type={"number"}
                  className={styles.input}
                  {...register("year_of_establishment", {
                    required: true,
                  })}
                />
                {errors?.year_of_establishment?.type === "required" && (
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
              <div className={styles.form__input}>
                <span>{"College Type*"}</span>
                <input
                  placeholder="Govt or Private"
                  type={"text"}
                  className={styles.input}
                  {...register("college_type", {
                    required: true,
                  })}
                />
                {errors?.college_type?.type === "required" && (
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
              <div className={styles.form__input}>
                <span>{"College Address*"}</span>
                <input
                  placeholder="Address..."
                  type={"text"}
                  className={styles.input}
                  {...register("college_address", {
                    required: true,
                  })}
                />
                {errors?.college_address?.type === "required" && (
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
              <div className={styles.form__input}>
                <span>{"College Website*"}</span>
                <input
                  placeholder="www.example.com"
                  type={"text"}
                  className={styles.input}
                  {...register("college_website", {
                    required: true,
                  })}
                />
                {errors?.college_website?.type === "required" && (
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
              <div className={styles.form__input}>
                <span>{"Branches*"}</span>
                <input
                  placeholder="Enter Branches"
                  type={"text"}
                  className={styles.input}
                  {...register("branches", {
                    required: true,
                  })}
                />
                {errors?.branches?.type === "required" && (
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

              <div className={styles.btn__container}>
                <button className={styles.submit__btn} type="submit">
                  {"Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile;
