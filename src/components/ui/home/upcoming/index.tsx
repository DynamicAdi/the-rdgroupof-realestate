import Card from "../../global/cards/Card"
import Title from "../../global/Title"
import styles from "./styles.module.scss"

function Upcoming() {
  return (
    <div className={styles.upcoming}>
        <div className={styles.child}>
            <Title highlight="Upcoming" title="Projects"/>
            <div className={styles.cards}>
                <Card />
            </div>
        </div>
    </div>
  )
}

export default Upcoming