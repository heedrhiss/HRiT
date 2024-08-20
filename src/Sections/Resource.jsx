import bg from '../Assets/resourcebg.jpg';

function Resource() {
    return (
        <div className="bgresource w-[100vw] h-[460px] flex items-center justify-center text-black">
        <div className="max-w-6xl mx-auto text-center my-10">
        <div className="text-6xl font-extrabold text-center mt-28">Explore Our Comprehensive <span className="text-red-600">Job <br/>Search Resources</span></div>
        <div className="text-2xl text-black mt-6 font-bold">Find sample resumes, cover letters, job listings, and more.</div>
        <div className="text-2xl text-black">We provide comprehensive job search support to help you achieve your career goals.</div>
        <button className="bg-red-600 text-white hover:scale-90 font-bold w-44 p-4 my-10 text-md rounded-lg">Browse Resources</button>
        </div>
        </div>
    )
}

export default Resource
