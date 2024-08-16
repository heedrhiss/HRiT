import Footer from "../Sections/Footer"
import Nav from "../Sections/Nav"

function PageNotFound() {
    return (
        <div className="flex flex-col h-screen">
            <Nav/>
            <div className="flex flex-1 items-center justify-center text-2xl text-center h-fit bg-slate-100">
                <p className="text-center text-stone-600">Page was not Found 😢</p>
            </div>
            <Footer/>
        </div>
    )
}

export default PageNotFound
