import Footer from "../Sections/Footer"
import GetStartedServices from "../Sections/GetStartedServices"
import MoreServices from "../Sections/MoreServices"
import Nav from "../Sections/Nav"
import ServiceServices from "../Sections/ServiceServices"
import Ribbon from "../Sections/Ribbon";
import Ready from "../Sections/Ready"
import FAQ from "../Sections/FAQ"

function Services() {
    return (
        <div className="flex flex-col h-screen">
            <Nav/>
            <GetStartedServices/>
            <ServiceServices/>
            <MoreServices/>
            <Ribbon/>
            <Ready/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default Services
