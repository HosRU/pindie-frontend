import Link from "next/link";
import Styles from "./CardsList.module.css"
import Card from "../Card/Card";

export default function CardsList(props) {

  return (
      <ul className={Styles.list}>
        {props.data.map((item) => {
          return (
            <li className={Styles.item} key={item.id}>
              <Link href={`/games/${item.id}`} className={Styles.link}>
                <Card {...item} />
              </Link>
            </li>
          );
        })}
      </ul>
  );
}
