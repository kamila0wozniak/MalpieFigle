import React from 'react'
import styles from './HeaderSlider.module.css'

export default class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      currentPhoto: 0,
      photosList: ['slide1.jpg', 'slide2.jpg']
    }
  }

  nextPhoto = () => {
    let newIndex = this.state.currentPhoto + 1
    if (this.state.currentPhoto === (this.state.photosList.length - 1)) {
      newIndex = 0
    }
    this.setState({ currentPhoto: newIndex })

  }
  previousPhoto = () => {
    let newIndex = this.state.currentPhoto - 1
    if (this.state.currentPhoto === 0) {
      newIndex = this.state.photosList.length -1
    }
    this.setState({ currentPhoto: newIndex })
  }

  render() {
    return (
      <div className={styles.slider}>
        <div className={styles.viewPort} style={{ transform: `translateX(${this.state.currentPhoto * -100}%)` }}>
          {this.state.photosList.map(photo => {
            return <img alt="" className={styles.photo} src={`img/${photo}`}/>
          })}


        </div>

        <button className={styles.prevBtn} onClick={this.previousPhoto}>prev</button>
        <button className={styles.nextBtn} onClick={this.nextPhoto}>next</button>
      </div>
    )
  }
}
