import TecnhologiesBox from '../assets/Tecnologies (1).svg'
import './CarrouselOfTecnho.css'

export default function Carrusel() {

    return (
        <div className="container-technologies">
            <h4 className="h4">Tecnologias adquiridas:</h4>

            <div className="container-slider">
                <div id="slider">
                </div>
                <div className="box-tecnhologies-img">
                    <img className='slider-img' src={TecnhologiesBox} alt="" />
                </div>

            </div>
        </div>
    )
}