import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  AppleLoginButton,
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import BlobBackground from "../../../components/auth/BlobBackground";
import { auth } from "../../../firebase";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../../firebase/authFunctions";
import styles from "../../../styles/PageStyles/Auth/Login.module.scss";

interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

const emailVerifyRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function Login() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterInput>();

  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log(data);
    const { name, email, password } = data;
    registerWithEmailAndPassword(name, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) router.replace("/a/");
    if (error) console.log(error);
  }, [loading, user, error, router]);

  return (
    <>
      <BlobBackground />
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>{"Sign Up"}</h2>
          <div className={styles.auth}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="UserPass Form"
              className={styles.userpass}
            >
              <div className={styles.input_container}>
                <span>{"Full Name"}</span>
                <input
                  type={"text"}
                  className={styles.input}
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors?.name?.type === "required" && (
                  <p>{"This field is required"}</p>
                )}
              </div>
              <div className={styles.input_container}>
                <span>{"Email"}</span>
                <input
                  type={"email"}
                  className={styles.input}
                  {...register("email", {
                    required: true,
                    pattern: emailVerifyRegex,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p>{"This field is required"}</p>
                )}
                {errors?.email?.type === "pattern" && <p>{"Email only"}</p>}
              </div>
              <div className={styles.input_container}>
                <span>{"Password"}</span>
                <input
                  type={"password"}
                  className={styles.input}
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors?.password?.type === "required" && (
                  <p>{"This field is required"}</p>
                )}
                {errors?.password?.type === "minLength" && (
                  <p>{"Password Should be Over 8 Characters"}</p>
                )}
              </div>
            </form>
            <div className={styles.seperator} />
            <div className={styles.socialauth}>
              <GoogleLoginButton onClick={signInWithGoogle} />
              <FacebookLoginButton />
              <AppleLoginButton />
            </div>
          </div>
          <div className={styles.nextstep}>
            <div>
              <input
                type="submit"
                form="UserPass Form"
                value="Next Step"
                className={styles.submit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
