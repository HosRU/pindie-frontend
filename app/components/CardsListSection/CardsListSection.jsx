"use client"

import CardsList from "./CardsList";
import Styles from "./CardsListSection.module.css";
import { CardsSlider } from "./CardsSlider";


export default function CardsListSection(props) {
  return (
    <section className={Styles.listSection}>
      <h2 className={Styles.titleSection} id={props.id}>
        {props.title}
      </h2>

      {props.type === "slider" ? (
        <CardsSlider data={props.data} />
      ) : (
        <CardsList data={props.data} />
      )}
    </section>
  );
};