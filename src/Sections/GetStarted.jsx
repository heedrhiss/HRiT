import image from "../Assets/card.jpg";

function GetStarted() {
    return (
        <div className="max-w-6xl px-10 flex mx-auto justify-between items-center">

            <div className="flex flex-col justify-center w-1/2">
            <span className="text-6xl font-bold">Your Job Search <span className="text-red-600 pr-3">Starts</span>Here</span>
            <p className="text-2xl my-3">Get help with resumes, cover letters, LinkedIn profiles, and more.</p>

            <div className="mt-8 space-x-5">
            <button className="bg-red-600 text-white hover:scale-90 font-bold w-32 p-2 text-md rounded-xl">Get Started</button>
            <button className="text-red-600 bg-white hover:scale-110 font-bold w-32 p-2 text-md rounded-xl shadow-[1px_10px_10px_5px_rgba(0,0,0,0.3)]">Learn More</button>
            </div>
            </div>


            <div className="w-1/2 ml-7 ">
                <img src={image} alt="job-search-picture" className="w-fit rounded-2xl h-96" />
            </div>
        </div>
    )
}

export default GetStarted
