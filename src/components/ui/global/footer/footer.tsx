import { GrLocationPin, GrMailOption, GrPhone } from 'react-icons/gr';
import styles from './footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.main}>
            <div className={`${styles.content} ${styles.partone}`}>
                <h1 className={styles.logo}>Logo</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, reprehenderit velit consequuntur non quas modi quam veritatis quae dolorum nemo, facere earum rerum quis maiores inventore libero. Eius, obcaecati blanditiis?</p>
            </div>
            <div className={`${styles.content} ${styles.partTwo}`}>
                <h2>Quick links</h2>
                <ul>
                    <li>About us</li>
                    <li>Projects</li>
                    <li>Agents</li>
                    <li>Open plots</li>
                    <li>Listing</li>
                </ul>
            </div>
            <div className={`${styles.content} ${styles.partThree}`}>
                <h2>Contact info</h2>
                <ul>
                    <li><GrLocationPin /> 1470 S Washington St, North Attleboro MA 2760</li>
                    <li><GrPhone /> +91 9086XX5XX2</li>
                    <li><GrMailOption /> adarshpanditdev@gmail.com</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer