import React from 'react'
import styles from './About.module.css'


export default class About extends React.Component {
    render(){
        return(
            <div className={styles.about} id="about">
                <div className={styles.box}>
                    <h1 className={styles.header}>o mnie</h1>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget laoreet ex, sit amet aliquam nisl. Proin elit mi, tempor sed eleifend sed, ultrices a lectus. Phasellus tristique purus enim, ac commodo turpis venenatis sed. In volutpat massa in malesuada dignissim. Vestibulum eleifend, leo sed ullamcorper vestibulum, magna massa blandit orci, non mollis erat justo non felis. Integer ut ligula lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dictum orci eget quam volutpat, at ultricies ipsum lacinia. In semper a ipsum non molestie. Donec sed semper enim. Pellentesque rutrum ut mi sit amet posuere. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus varius, purus et egestas fringilla, ligula dolor ullamcorper enim, vitae tempus felis lacus a felis. Proin tristique, ex id bibendum tempus, orci nibh placerat turpis, nec cursus orci nisi et sapien. Mauris et nibh sed mi auctor ultrices nec ut nisi. Sed hendrerit feugiat dictum.</p>
                    <p className={styles.paragraph}>Phasellus enim augue, porta ut elit at, commodo vehicula ligula</p>
                </div>

            </div>
        )
    }
}
