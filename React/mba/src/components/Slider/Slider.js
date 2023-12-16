import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import One from "../../assests/1.avif";
import Two from "../../assests/2.avif";
import Three from "../../assests/3.avif";
import Four from "../../assests/4.avif";


function Slider(){

    return <div className="shadow-lg">

                    <CCarousel controls>
            <CCarouselItem>
                <CImage className="d-block w-100" src={One} alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={Two} alt="slide 2" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src={Three} alt="slide 3" />
            </CCarouselItem>
               <CCarouselItem>
                <CImage className="d-block w-100" src={Four} alt="slide 4" />
            </CCarouselItem>
            </CCarousel>

    </div>

}


export default Slider;