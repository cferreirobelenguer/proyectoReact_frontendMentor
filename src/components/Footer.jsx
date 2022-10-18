import React from "react"
import Camera from '../assets/images/camera.svg'

const Footer=()=>{


    return(
        <div class="footer-container">
            <div class="footer-icon">
                <img src={Camera} class="header-icon-icon" alt="header-icon"></img>
            </div>
            <div class="footer-comunication">
                <button class="footer-comunication-container">
                    freeComunication
                </button>
            </div>
        </div>
    )
}
export default Footer;