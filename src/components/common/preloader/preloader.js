import React from "react";
import PreloaderImg from '../../../images/preloader-image.svg'
import './preloader.css';

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={PreloaderImg}  alt="preloader-circle"/>
        </div>
    )
}

export default Preloader;