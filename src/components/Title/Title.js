import React from 'react'
import styles from './Title.module.css'


export default class Title extends React.Component {
    render(){
        return(
            <div className={styles.title}>
                <div  className={styles.box}>
                    <h1 className={styles.header}>małpie figle wytrenuje także ciebie</h1>
                    <h2 className={styles.paragraph}>trener sportowy także dla ciebie</h2>
                </div>

            </div>
        )
    }
}
