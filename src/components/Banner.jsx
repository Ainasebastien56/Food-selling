import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
export function Banner(){

    return (
        <div className="banner">

                <div className="banner-text">
                        <p>
                            welcome to our cuisine restaurant
                        </p>
                        
                            <button><a href="#service">Discover Now <span><FontAwesomeIcon icon="arrow-right"/> </span></a> </button>
                       
                </div>

                <div className="bannerImg">
                   <img src="./burgerBanner.png" alt="bannerImg" />
                </div>
        </div>

    )

}