import Footer from "../Sections/Footer"
import GetStartedServices from "../Sections/GetStartedServices"
import Nav from "../Sections/Nav"
import ServiceServices from "../Sections/ServiceServices"

function Services() {
    return (
        <div className="flex flex-col h-screen">
            <Nav/>
            <GetStartedServices/>
            <ServiceServices/>
            <Footer/>
        </div>
    )
}

export default Services
