import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  AppleLoginButton,
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import BlobBackground from "../../components/auth/BlobBackground";
import { auth } from "../../firebase";
import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/authFunctions";
import styles from "../../styles/PageStyles/Auth/Login.module.scss";

interface LoginInput {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>();

  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data);
    const { email, password } = data;
    logInWithEmailAndPassword(email, password);
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
          <h2 className={styles.title}>{"Log In"}</h2>
          <div className={styles.auth}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              id="UserPass Form"
              className={styles.userpass}
            >
              <div className={styles.input_container}>
                <span>{"Email"}</span>
                <input
                  type={"email"}
                  className={styles.input}
                  {...register("email", {
                    required: true,
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
                value="Login"
                className={styles.submit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
