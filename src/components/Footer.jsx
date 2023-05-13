import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
export function Footer(){
    return(
        <div className="footer">
              <div className="footer-first">
                    <div className="logo">
                                <img className="logoImg" src="./Miam.png" alt="logo" />
                        </div>

              <div className="contact">
                    <h1>Follow <span>Us</span></h1>
                       <div className="social">
                            <a href="https://www.facebook.com">
                                    <FontAwesomeIcon icon={faFacebook}/>
                            </a>
                            <a href="https://www.instagram.com">
                                    <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                    
                       </div>
              </div>
               

                      
                </div>

                <p>
                            @copyright @Miam 2023
                    </p>
                    
                
        </div>
    )
}