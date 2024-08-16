import image from "../Assets/card.jpg";

function GetStartedServices() {
  
        return (
            <div className="max-w-6xl px-10 flex mx-auto justify-between items-center">
    
                <div className="flex flex-col justify-center w-1/2">
                <span className="text-6xl font-bold">Discover Our Job <span className="text-red-600 pr-3">Search</span>Services</span>
                <p className="text-2xl my-3">Find the support you need at every stage of your job search.</p>
    
                <div className="mt-8 space-x-5">
                <button className="bg-red-600 text-white hover:scale-90 font-bold w-48 p-2 text-md rounded-xl">Schedule Session</button>
                </div>
                </div>
    
    
                <div className="w-1/2 ml-7 ">
                    <img src={image} alt="job-search-picture" className="w-fit rounded-2xl h-80" />
                </div>
            </div>
        )
    
}

export default GetStartedServices
