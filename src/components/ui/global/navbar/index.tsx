// import React from 'react'
import styles from "./navbar.module.scss";
import left from "/navbar.svg";
import right from "/SmallNavbar.svg";
function Navbar() {
  const tabs = [
    {
      name: "About us",
      link: "/",
    },
    {
      name: "Projects",
      link: "/",
    },
    {
      name: "Agents",
      link: "/",
    },
    {
      name: "Open plots",
      link: "/",
    },
    {
      name: "Listing",
      link: "/",
    }
  ]
  return (
    <div className={styles.navbar}>
      <div className={styles.side}>
        <img src={left} alt={"left side"} />
        <nav>
          <h1 className={styles.logo}>Logo</h1>
          <ul>
            {
              tabs.map((tab, index) => {
                return (
                  <li key={index}>
                    <a href={tab.link} className={styles.tab}>
                      {tab.name}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </nav>
      </div>
      <div className={styles.right}>
      <img src={right} alt={"right side"} />
      <h1>Get started</h1>
      </div>
    </div>
  )
}

export default Navbar;