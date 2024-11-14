import styles from "./title.module.scss";

function Title({title, highlight}: {
    title: string;
    highlight?: string;
}) {
  return (
    <h1 className={styles.title}><span>{highlight}</span> {title}</h1>
  )
}

export default Title