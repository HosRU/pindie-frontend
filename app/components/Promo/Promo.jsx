"use client";
import { useState, useEffect } from "react";
import Styles from "./Promo.module.css";

export default function Promo() {
  const [codeIsVisible, setCodeIsVisible] = useState(false);

  useEffect(() => {
    let timeout;
    if (codeIsVisible) {
        timeout = setTimeout(() => {
            setCodeIsVisible(false);
        }, 5000);
      }

    return () => {
      clearTimeout(timeout);
    };
  }, [codeIsVisible]);

  function handleButtonClick() {
    setCodeIsVisible(!codeIsVisible);
  }

  return (
    <section className={Styles.promo}>
      <div className={Styles.block}>
        <h2 className={Styles.title}>Твой промо-код</h2>
        <p className={Styles.description}>
          Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
        </p>
        <button
          className={`button ${Styles.button}`}
          onClick={handleButtonClick}
        >
          {codeIsVisible && (
            <span className={Styles["promo-code"]}>WEBTEENS10</span>
          )}
          {!codeIsVisible && "Получить код"}
        </button>
      </div>
      <img
        src="./images/promo-illustration.svg"
        alt="Собака"
        className={Styles.image}
      />
    </section>
  );
}
