import React from 'react'
import styles from './Mosaic.module.css'

export default class Mosaic extends React.Component {
    render(){
        return(
            <div className={styles.background}>
                <div className={styles.item}>
                    <img alt={'Mosaic'} className={styles.photo} src={`img/m1.jpg`}/>
                </div>
                <div className={styles.item}>
                    <div className={styles.textBox}>
                        <h1 className={styles.header}>intensywne sesje</h1>
                        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget laoreet ex, sit amet aliquam nisl. Proin elit mi, tempor sed eleifend sed, ultrices a lectus. Phasellus tristique purus enim, ac commodo turpis venenatis sed. In volutpat massa in malesuada dignissim..</p>
                    </div>

                </div>
                <div className={styles.item}>
                    <img alt={'Mosaic'} className={styles.photo} src={`img/m2.jpg`}/>
                </div>
                <div className={styles.item}>
                    <div className={styles.textBox}>
                        <h1 className={styles.header}>intensywne sesje</h1>
                        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget laoreet ex, sit amet aliquam nisl. Proin elit mi, tempor sed eleifend sed, ultrices a lectus. Phasellus tristique purus enim, ac commodo turpis venenatis sed. In volutpat massa in malesuada dignissim.</p>
                    </div>

                </div>
                <div className={styles.item}>
                    <img alt={'Mosaic'} className={styles.photo} src={`img/m3.jpg`}/>
                </div>
                <div className={styles.item}>
                    <div className={styles.textBox}>
                        <h1 className={styles.header}>intensywne sesje</h1>
                        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget laoreet ex, sit amet aliquam nisl. Proin elit mi, tempor sed eleifend sed, ultrices a lectus. Phasellus tristique purus enim, ac commodo turpis venenatis sed. In volutpat massa in malesuada dignissim.</p>
                    </div>

                </div>
            </div>
        )
    }
}
