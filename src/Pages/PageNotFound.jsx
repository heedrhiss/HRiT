import Footer from "../Sections/Footer"
import Nav from "../Sections/Nav"

function PageNotFound() {
    return (
        <div className="flex flex-col h-screen">
            <Nav/>
            <div className="flex-1 items-center justify-center text-2xl text-center h-fit">
                <p>Page was not Found 😢</p>
            </div>
            <Footer/>
        </div>
    )
}

export default PageNotFound
