import React from "react"
import mockup from "../assets/images/mockup.jpg"
import mockup2 from "../assets/images/mockup2.jpg"
import artwork from "../assets/images/artwork.jpg"

const Container5=()=>{
    return(
        <div class="container5">
            <div class="container5_title">
                <h2>My Work</h2>
            </div>
            <div class="container5_imagenes">
                <div class="container5_imagen1">
                    <figure>
                        <img src={mockup} class="container5_mockup" alt="container5_mockup"></img>
                    </figure>
                </div>
                <div class="container5_imagen2">
                    <figure>
                        <img src={mockup2} class="container5_mockup2" alt="container5_mockup2"></img>
                    </figure>
                </div>
                <div class="container5_imagen3">
                    <figure>
                        <img src={artwork} class="container5_artwork" alt="container5_artwork"></img>
                    </figure>
                </div>
            </div>
            
        </div>
    )
}
export default Container5;