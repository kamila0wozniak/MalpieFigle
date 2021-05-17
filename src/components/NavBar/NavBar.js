import React from 'react'
import styles from './NavBar.module.css'


export default class NavBar extends React.Component {
    render(){
        return(
            <div className={styles.navBar}>
                <div className={styles.navBarBox}>
                    <a href="#about" className={styles.link}>o mnie</a>
                    <a href="#activities" className={styles.link}>moje zajęcia</a>
                    <a href="#contact" className={styles.link}>kontakt</a>
                </div>
            </div>
        )
    }
}
