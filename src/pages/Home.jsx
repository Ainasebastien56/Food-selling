import { About } from "../components/About";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Order } from "../components/Order";
import { Slide } from "../components/Slide";

export function Home(){
    return (
        <div className="home">
                <Nav/>
                <Banner/>
                <About/>
                <Order/>
                <Slide/>
                <Footer/>

        </div>
    )
}