import Footer from "../Sections/Footer"
import Nav from "../Sections/Nav"
import SignUpForm from "../Sections/SignUpForm"

function Connect() {
    return (
        <div className="flex flex-col h-screen">
            <Nav/>
            <div className="flex-1 items-center justify-center text-2xl text-center">
                <p></p>
            </div>
            <SignUpForm/>
            <Footer/>
        </div>
    )
}

export default Connect
