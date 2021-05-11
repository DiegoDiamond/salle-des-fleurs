import React, { useState } from 'react'
import cls from 'classnames'
import styles from './Slider.module.scss'

const Slider = ({ bgSets }) => {
    //TODO: не сбрасывает при новом вызыве по другому продукту
    //TODO: сделать загрузку скелета

    const [inputIndex, setInputIndex] = React.useState(0)

    const changeInput = (idx) => {
        setInputIndex(idx)
    }
    return (
        <div className={styles.item__slider}>
            {[...Array(bgSets.length).keys()].map((idx) => {
                const targetIndex = inputIndex === idx
                return (
                    <>
                        <input
                            type="radio"
                            className={styles.slider}
                            onClick={() => changeInput(idx)}
                            checked={targetIndex}
                            readOnly
                        />
                        <div
                            className={styles.slide}
                            style={{ backgroundImage: `url(${bgSets[idx]})`, opacity: `${+targetIndex}` }}
                        ></div>
                    </>
                )
            })}
        </div>
    )
}

export default Slider
