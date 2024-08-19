import resume from "../Assets/Resume-image.png";
import job from '../Assets/Job-scope-image.png';
import cover from '../Assets/Cover-image.png';
import interview from '../Assets/interview-image.png';


function MoreServices() {
    return (
    <div className="max-w-6xl mx-auto">
        <div className="flex items-center space-x-32 my-10">
                <div className="flex flex-col justify-center w-[28rem] px-20">
                <div className="text-3xl font-bold border-b-2 border-red-500">Resume Preparation</div>
                <p className="text-lg text-stone-500 my-3">Create a resume that stands out.</p>
    
                <div className="mt-8 space-x-5">
                <button className="bg-red-600 text-white hover:scale-90 font-bold w-32 p-2 text-md rounded-xl">Get Started</button>
                <button className="text-red-600 bg-white hover:scale-110 font-bold w-32 p-2 text-md rounded-xl shadow-[1px_10px_10px_5px_rgba(0,0,0,0.3)]">Learn More</button>
                </div>
                </div>
    
    
                <div className="w-[30rem] ">
                    <img src={resume} alt="job-search-picture" className="w-fit h-72" />
                </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-between my-10">
                <div className="flex flex-col justify-center w-[26rem] px-20">
                <div className="text-3xl font-bold border-b-2 border-red-500">Job Listing Scope</div>
                <p className="text-lg text-stone-500 my-3">Find the right career path with our guidance.</p>
    
                <div className="mt-8 space-x-5">
                <button className="bg-red-600 text-white hover:scale-90 font-bold w-28 p-2 text-md rounded-xl">Get Started</button>
                <button className="text-red-600 bg-white hover:scale-110 font-bold w-28 p-2 text-md rounded-xl shadow-[1px_10px_10px_5px_rgba(0,0,0,0.3)]">Learn More</button>
                </div>
                </div>
    
    
                <div className="w-[30rem]">
                    <img src={job} alt="job-search-picture" className="w-fit h-72" />
                </div>
        </div>

        <div className="flex items-center space-x-32 my-10">
                <div className="flex flex-col justify-center w-[28rem] px-12">
                <div className="text-3xl font-bold border-b-2 border-red-500">Cover Letter Preparation</div>
                <p className="text-lg text-stone-500 my-3">Write cover letters that get noticed.</p>
    
                <div className="mt-8 space-x-5">
                <button className="bg-red-600 text-white hover:scale-90 font-bold w-32 p-2 text-md rounded-xl">Get Started</button>
                <button className="text-red-600 bg-white hover:scale-110 font-bold w-32 p-2 text-md rounded-xl shadow-[1px_10px_10px_5px_rgba(0,0,0,0.3)]">Learn More</button>
                </div>
                </div>
    
    
                <div className="w-[30rem] ">
                    <img src={cover} alt="job-search-picture" className="w-fit h-72" />
                </div>
        </div>

        <div className="flex flex-row-reverse items-center justify-between my-10">
                <div className="flex flex-col justify-center w-[28rem] px-10">
                <div className="text-3xl font-bold border-b-2 border-red-500">Job Interview Preparation</div>
                <p className="text-lg text-stone-500 my-3">Prepare for interviews with our tips.</p>
    
                <div className="mt-8 space-x-5">
                <button className="bg-red-600 text-white hover:scale-90 font-bold w-32 p-2 text-md rounded-xl">Get Started</button>
                <button className="text-red-600 bg-white hover:scale-110 font-bold w-32 p-2 text-md rounded-xl shadow-[1px_10px_10px_5px_rgba(0,0,0,0.3)]">Learn More</button>
                </div>
                </div>
    
    
                <div className="w-[30rem]">
                    <img src={interview} alt="job-search-picture" className="w-fit h-72" />
                </div>
        </div>
    </div>
    )
}

export default MoreServices
