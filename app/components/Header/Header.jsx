"use client"

import Styles from "./Header.module.css";
import { Overlay } from "../Overlay/Overlay";
import { Popup } from "../Popup/Popup";
import { AuthForm } from "../AuthForm/AuthForm";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useStore } from "@/app/store/app-store";

export default function Header() {
  const pathname = usePathname();
  const authContext = useStore();

  const handleLogout = () => {
    authContext.logout(); // Метод logout из контекста
  };

  return (
    <header className={Styles.header}>
      <Link href="/" className={Styles.logo}>
        <img
          className={Styles.image}
          src="./images/logo.svg"
          alt="Логотип Pindie"
        />
      </Link>
      <nav className={Styles.menu}>
        <ul className={Styles.list}>
          <li className={Styles.item}>
            <Link
              href="/new"
              className={`${Styles.link} ${
                pathname === "/new" ? Styles["menu__link_active"] : ""
              }`}
            >
              Новинки
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/popular"
              className={`${Styles.link} ${
                pathname === "/popular" ? Styles["menu__link_active"] : ""
              }`}
            >
              Популярные
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/shooters"
              className={`${Styles.link} ${
                pathname === "/shooters" ? Styles["menu__link_active"] : ""
              }`}
            >
              Шутеры
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/runners"
              className={`${Styles.link} ${
                pathname === "/runners" ? Styles["menu__link_active"] : ""
              }`}
            >
              Ранеры
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/pixel-games"
              className={`${Styles.link} ${
                pathname === "/pixel-games" ? Styles["menu__link_active"] : ""
              }`}
            >
              Пиксельные
            </Link>
          </li>
          <li className={Styles.item}>
            <Link
              href="/tds"
              className={`${Styles.link} ${
                pathname === "/tds" ? Styles["menu__link_active"] : ""
              }`}
            >
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles.auth}>
          {
            authContext.isAuth ? (
              <button className={Styles.button} onClick={handleLogout}>
                Выйти
              </button>
            ) : (
              <button className={Styles.button} onClick={authContext.openPopup}>
                Войти
              </button>
            )}  
        </div>
      </nav>

      <Overlay isOpened={authContext.popupIsOpened} closePopup={authContext.closePopup} />
      <Popup isOpened={authContext.popupIsOpened} closePopup={authContext.closePopup}>
        <AuthForm closePopup={authContext.closePopup} />
      </Popup>
    </header>
  );
}
