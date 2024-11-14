// import main from "/main.svg";
import rightSvg from '/heroRight.svg';
import leftSvg from '/heroLeftB.svg';
import leftBSvg from '/heroLeftS.svg';
import styles from "./styles.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";

function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <div className={styles.left}>
            <div className={styles.slit}>
                <img src={leftSvg} alt="main svg" />
                <h1 className={styles.logo}>Find a home on your style.</h1>
                <button className={styles.btn}><p>Get started</p> <IoIosArrowRoundForward size={30} /></button>
            </div>

            <div className={styles.lower}>
            <img src={leftBSvg} alt="main svg" />
            </div>
        </div>
        <div className={styles.right}>
        <div className={styles.arrow}>
            <img src='/arrow.svg' alt='arrow'/>
        </div>
        <img src={rightSvg} alt="main svg" className={styles.rightSvg} />
        <div className={styles.desc}>
            <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad alias ipsa magni exercitationem non nostrum dolore modi quo laboriosam suscipit.
            </p>
        </div>
        <div className={`${styles.pills} ${styles.pill_1}`}><p><span>•</span> Modern</p></div>
        <div className={`${styles.pills} ${styles.pill_2}`}><p><span>•</span> Elegant design</p></div>
        <div className={`${styles.pills} ${styles.pill_3}`}><p><span>•</span> Eco Friendly</p></div>

        </div>
      </div>
    </div>
  );
}

export default Hero;
