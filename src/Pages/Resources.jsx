import Featured from "../Sections/Featured"
import Footer from "../Sections/Footer"
import Nav from "../Sections/Nav"
import Resource from "../Sections/Resource"
import ResourceService from "../Sections/ResourceService"

function Resources() {
    return (
        <div className="flex flex-col">
            <Nav/>
            <Resource/>
            <ResourceService/>
            <Featured/>
            <Footer/>
        </div>
    )
}

export default Resources
