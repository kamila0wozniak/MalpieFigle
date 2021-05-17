import React from 'react'
import styles from './MyActivities.module.css'


export default class MyActivities extends React.Component {
    render(){
        return(
            <div className={styles.myactivities} id="activities">
                <div className={styles.box}>
                    <h1 className={styles.header}>moje zajęcia</h1>
                    <p className={styles.paragraph}>paragraf z tekstem</p>
                </div>

            </div>
        )
    }
}
