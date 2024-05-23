import Styles from "./Card.module.css";

export default function Card({...props}) {
  return (
    <article className={Styles.card}>
      <img
        src={props.image}
        alt=""
        className={Styles.image}
      />
      <div className={Styles.content}>
        <h3 className={Styles.title}>{props.title}</h3>
        <p className={Styles.description}>
          {props.description}
        </p>
        <div className={Styles.info}>
          <p className={Styles.author}>
            Автор: <span className={Styles.accent}>{props.developer}</span>
          </p>
          <p className={Styles.votes}>
            Голосов на сайте: <span className={Styles.accent}>{props.users.length}</span>
          </p>
        </div>
      </div>
    </article>
  );
}
