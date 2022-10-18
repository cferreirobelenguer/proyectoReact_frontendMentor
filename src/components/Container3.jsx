import React from "react"
import Imagen from '../assets/images/imagen_body.jpg'

const Container3=()=>{
    return(
        <div class="container3">
            <div class="container3_image">
                <figure>
                    <img src={Imagen} class="container3_photo" alt="container3_image"></img>
                </figure>
            </div>
            <div class="container3_text">
                <div class="container3_text_title">
                    <h1>I'm Amy, and I'd love to work on your next project</h1>
                </div>
                <div class="container3_text_subtitle">
                    <p>I love working with others to create beautiful designs solutions. I've designed everything from brand illustrations to complete mobile apps. I'm also handy with a camera</p>
                </div>
                <div class="container3_text_button">
                    <button class="container3-button">
                        freeComunication
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Container3;