import React from 'react'
import cls from 'classnames'

import styles from './Modal.module.scss'

type ModalProps = {
    active: boolean
    setActive: (active: boolean) => void
    children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ active, setActive, children }) => {
    return (
        <div className={cls(styles.modal, { [styles.active]: active })} onClick={() => setActive(false)}>
            <div className={cls(styles.modal__content, { active })} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
export default Modal
