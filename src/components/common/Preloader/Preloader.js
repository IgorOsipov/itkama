import React from 'react'
import preloader from '../../../assets/img/preloader.svg'
import cls from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={cls.preloader}>
            <img src={preloader}/> 
        </div>
    )
}

export default Preloader