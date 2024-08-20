import Featured from "../Sections/Featured"
import Footer from "../Sections/Footer"
import MoreResources from "../Sections/MoreResources"
import Nav from "../Sections/Nav"
import Resource from "../Sections/Resource"
import ResourceService from "../Sections/ResourceService"
import SignUpForm from "../Sections/SignUpForm"
import Weekly from "../Sections/Weekly"

function Resources() {
    return (
        <>
            <Nav/>
            <Resource/>
            <ResourceService/>
            <Featured/>
            <Weekly/>
            <MoreResources/>
            <SignUpForm/>
            <Footer/>
        </>
    )
}

export default Resources
