import React from 'react'
import styles from './Footer.module.css'


export default class Footer extends React.Component {
    render(){
        return(
            <div className={styles.footer}>
                <div>
                    <p className={styles.paragraph}>Znajdź nas na</p>
                    <div className={styles.box}>
                        <a className={styles.iconBox} href={'https://www.facebook.com/'}>
                            <img alt={'Facebook Icon'} className={styles.icon} src={'https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Facebook_2_glyph_svg-512.png'}/>
                        </a>
                        <a className={styles.iconBox} href={'https://twitter.com/?lang=pl'}>
                            <img alt={'Twitter Icon'} className={styles.icon} src={'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-twitter-512.png'}/>
                        </a>
                        <a className={styles.iconBox} href={'https://www.linkedin.com/home/?originalSubdomain=pl'}>
                            <img alt={'LinkedIn Icon'} className={styles.icon} src={'https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png'}/>
                        </a>
                    </div>
                    <p className={styles.paragraph}>@Copywright Sitename. All Rights Reserved.<br/>Powered by Malpie Figle</p>
                </div>
            </div>
        )
    }
}
