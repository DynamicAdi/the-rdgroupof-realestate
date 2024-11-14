import styles from "./card.module.scss";
import { IoIosArrowRoundForward, IoIosStar } from "react-icons/io";

function Card() {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
            <img src={`https://picsum.photos/600`} alt="site picture" />
        </div>
        <div className={styles.content}>
            <h1 className={styles.title}>Title of the property</h1>
            {/* 75 characters */}
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, deleniti...</p>
        
        <div className={styles.ratings}>
            <IoIosStar color="gold" size={20} />
            <span>4.5</span>
        </div>
        {/* <Link to={"/"}> */}
            <button>Enquiry <IoIosArrowRoundForward size={30} /></button>
        {/* </Link> */}
        
        </div>
    </div>
  )
}

export default Card