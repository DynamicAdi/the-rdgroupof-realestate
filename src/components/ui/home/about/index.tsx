import styles from "./styles.module.scss";
import Svg from "/about.svg";
import { IoIosArrowRoundForward } from "react-icons/io";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>About us</h1>
        <div className={styles.svg}>
          <div className={styles.learn}>
            <svg viewBox="0 0 200 200" className={styles.curve}>
              <path
                id="textPath"
                d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                fill="none"
              />

              <text dy="20">
                <textPath href="#textPath" startOffset="30%">
                  Learn more
                </textPath>
              </text>
            </svg>
            <IoIosArrowRoundForward className={styles.icon} size={150} />
          </div>
          <img src={Svg} alt="svg" />
        </div>
      </div>

      <div className={styles.right}>
        <h1>Our <span>Mission</span> and <span className={styles.gold}>Values</span>.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          hic iusto provident optio quas eum repellat nisi sunt laboriosam ex
          aperiam odit, saepe non earum illo? Vel nulla quasi, porro
          necessitatibus nihil, cum maxime reiciendis cupiditate tenetur eos,
          rerum sed omnis quibusdam vitae. Ab eligendi illum qui quaerat
          molestias vitae fugit odit rerum repellat libero et aperiam, iusto
          maxime, similique provident nesciunt nihil voluptas aspernatur in
          numquam quo! Nobis excepturi quod deleniti adipisci asperiores eius
          voluptas, molestias animi.
        </p>
      </div>
    </div>
  );
}

export default About;
