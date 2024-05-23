"use client"

import { authorize, isResponseOk } from "@/app/api/api-utils";
import Styles from "./AuthForm.module.css";
import { useEffect, useState } from "react";
import { endpoints } from "@/app/api/config";
import { useStore } from "@/app/store/app-store";

export const AuthForm = (props) => {
  const store = useStore()
  const [authData, setAuthData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState({ status: null, text: null });

  const handleInput = (e) => {
    setAuthData({ ...authData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await authorize(endpoints.auth, authData);

    if (isResponseOk(userData)) {
      store.login({...userData, id: userData._id}, userData.jwt); // login из контекста

      setMessage({ status: "success", text: "Вы авторизовались!" });
    } else {
      setMessage({ status: "error", text: "Неверные почта или пароль" });
    }
  };

  useEffect(() => {
    let timer; 
    if(store.user) { // Данные о user из контекста
      timer = setTimeout(() => {
        setMessage({ status: null, text: null});
        props.closePopup();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [store.user]);

  return (
    <form className={Styles["form"]} onSubmit={handleSubmit}>
      <h2 className={Styles["form__title"]}>Авторизация</h2>
      <div className={Styles["form__fields"]}>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Email</span>
          <input
            className={Styles["form__field-input"]}
            type="email"
            placeholder="hello@world.com"
            name="email"
            onInput={handleInput}
          />
        </label>
        <label className={Styles["form__field"]}>
          <span className={Styles["form__field-title"]}>Пароль</span>
          <input
            className={Styles["form__field-input"]}
            type="password"
            placeholder="***********"
            name="password"
            onInput={handleInput}
          />
        </label>
      </div>
      <p className={Styles["form__message"]}>
        {message.status && message.text}
      </p>
      <div className={Styles["form__actions"]}>
        <button className={Styles["form__reset"]} type="reset">
          Очистить
        </button>
        <button className={Styles["form__submit"]} type="submit">
          Войти
        </button>
      </div>
    </form>
  );
};
