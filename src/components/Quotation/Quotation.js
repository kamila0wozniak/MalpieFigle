import React from 'react'
import styles from './Quotation.module.css'

export default class Quotation extends React.Component {
    render(){
        return(
            <div className={styles.quotation}>
                <div className={styles.box}>
                    <h1 className={styles.header}>"Spraw, aby każdy dzień miał szansę stać się najpiękniejszym dniem twojego życia."</h1>
                    <p className={styles.paragraph}>Mark Twain</p>
                </div>

            </div>
        )
    }
}
