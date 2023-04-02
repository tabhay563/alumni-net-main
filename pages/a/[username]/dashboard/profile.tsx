import React from "react";
import styles from "../../../../styles/Dashboard/Profile.module.scss";

import { useForm, SubmitHandler } from "react-hook-form";
import AlumniDashboardLayout from "../../../../layout/AlumniDashboardLayout";


interface InputSchema {
  username: string;
  website: string;
  bio: string;
  job_title: string;
  profile_pic?: File;
}

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputSchema>();

  const onSubmit: SubmitHandler<InputSchema> = (formData) => {
    console.log(formData);
  };

  return (
    <>
      <div className={styles.upper__content}>
        <div className={styles.profile__img_container}>
          <div className={styles.profile__img}>
            <img
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              alt="profile"
            />
          </div>
          <div className={styles.Upper__text}>
            <h1 className={styles.heading}>Profile</h1>
            <p className={styles.subtitles}>
              Update your photos and personal info
            </p>
          </div>
        </div>
      </div>

      <div className={styles.main__content}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.left__div}>
            <div className={styles.input__container}>
              <label className={styles.label}>username</label>
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: true, minLength: 5 })}
              />
            </div>
            <div className={styles.input__container}>
              <label className={styles.label}>Website</label>
              <input
                type="text"
                placeholder="www.xyz.com"
                {...register("website", { required: true, minLength: 5 })}
              />
            </div>
            <div className={styles.input__container}>
              <label className={styles.label}>Your Bio</label>
              <textarea
                placeholder="A short Bio..."
                {...register("bio", { required: true, minLength: 5 })}
              />
            </div>
            <div className={styles.input__container}>
              <label className={styles.label}>Job Title</label>
              <input
                type="text"
                placeholder="software Enginner..."
                {...register("job_title", { required: true, minLength: 5 })}
              />
            </div>
          </div>
          <div className={styles.right__div}>
            <div className={styles.img__input__container}>
              <div className={styles.img__left}>
                <h1 className={styles.img__heading}>Profile Picture</h1>
                <p className={styles.img__subtitle}>
                  This will be displayed on your profile
                </p>
              </div>
              <div className={styles.img__right}>
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=67"
                  alt="profile"
                  className={styles.profile__pic}
                />
                <div className={styles.btn__container}>
                  <button className={`${styles.btn}`}>Update</button>
                  <button className={`${styles.btn}`}>Delete</button>
                </div>
              </div>
            </div>

            <div className={styles.btn__container}>
              <button className={`${styles.btn__cancel} ${styles.btn}`}>
                Cancel
              </button>
              <button
                type="submit"
                onSubmit={handleSubmit(onSubmit)}
                className={`${styles.btn__save} ${styles.btn}`}
              >
                Save
              </button>
            </div>
            <hr style={{ width: "90%" }} />
          </div>
        </form>
      </div>
    </>
  );
};
Profile.PageLayout =AlumniDashboardLayout ;


export default Profile;
