import Camera from '../assets/images/camera.svg'
const Header=()=>{

    return(
        <div class="header-container">
            <div class="header-icon">
                <img src={Camera} class="header-icon-icon" alt="header-icon"></img>
            </div>
            <div class="header-comunication">
                <div class="header-comunication-container">
                    freeComunication
                </div>
            </div>
        </div>
    )
}
export default Header;