import React, { useState } from "react";
import styles from "../../../../styles/PageStyles/Auth/CompleteProfile.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import BlobBackground from "../../../../components/auth/BlobBackground";
import FirstStep from "../../../../components/auth/Steps/FirstStep";
import SecondStep from "../../../../components/auth/Steps/SecondStep";
import ThirdStep from "../../../../components/auth/Steps/ThirdStep";
import Progress from "../../../../components/auth/Progress/Progress";

interface FormSchema {
  fname: string;
  email: string;
  phone: number;
  url: string;
  bio: string;
  clgname: string;
  branch: string;
  year_of_passing: number;
  company_name: string;
  designation: string;
  year_of_experience: number;
}
export default function CompleteProfile() {
  const [step, setStep] = useState(0);

  const FormTitle = ["Step 1", "Step 2", "Step 3"];
  const FormSubTitle = [
    "Your Profile",
    "College Information",
    "Current Working Info",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>();

  const onSubmit: SubmitHandler<FormSchema> = (formData) => {
    console.log(formData);
  };

  // Function to Display the next step
  const DisplayStep = () => {
    if (step === 0) {
      return (
        <FirstStep
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      );
    } else if (step === 1) {
      return (
        <SecondStep
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      );
    } else {
      return (
        <ThirdStep
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      );
    }
  };
  return (
    <>
      <BlobBackground />

      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.card_head}>
            <Progress steps={FormTitle} />
          </div>
          <div className={styles.card__content}>
            <h2 className={styles.content__title}>{FormTitle[step]}</h2>
            <h1 className={styles.content__subtitle}>{FormSubTitle[step]}</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              {DisplayStep()}
              <div className={styles.btn__container}>
                <button
                  style={
                    step === 0 ? { display: "none" } : { display: "block" }
                  }
                  disabled={step === 0}
                  onClick={() => setStep((currStep) => currStep - 1)}
                  className={styles.btn__next}
                >
                  Back{" "}
                </button>
                <button
                  onClick={() => {
                    if (step === FormTitle.length - 1) {
                      handleSubmit(onSubmit);
                    } else {
                      setStep((currStep: number) => currStep + 1);
                    }
                  }}
                  className={styles.btn__next}
                >
                  {step === FormTitle.length - 1 ? "Submit" : "Next"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
