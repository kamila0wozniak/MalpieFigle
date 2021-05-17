import React from 'react'
import styles from './Contact.module.css'


export default class Contact extends React.Component {
    render(){
        return(
            <div className={styles.contact} id="contact">
                <div className={styles.box}>
                    <div className={styles.info}>
                        <h1 className={styles.header}>kontakt</h1><br/>
                        <p className={styles.paragraph}>dane kontaktowe</p>
                        <p className={styles.paragraph}>dane kontaktowe</p>
                        <p className={styles.paragraph}>dane kontaktowe</p>
                    </div>
                    <div className={styles.boxImg}>
                        <img alt={'Contact'} className={styles.img} src={`img/contact.jpg`}/>

                    </div>
                </div>



            </div>
        )
    }
}
