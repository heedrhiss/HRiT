import resume from '../Assets/Resume-Preparation.png'
import cover from '../Assets/Cover-Letter-Icon.png'
import interview from '../Assets/Interview-Preparation-icon.png'
import job from '../Assets/job-discovery-icon.png'

function Services() {
    return (
        <div className="max-w-6xl mx-auto my-10 p-5">
        <div className="text-5xl font-bold text-center">What we <span className="text-red-600">Provide</span></div>
        <div className="flex justify-between items-center mt-16">
        
        <div className="flex flex-col justify-center items-center w-[265px] h-[330px] p-5 space-y-3 shadow-[1px_10px_10px_3px_rgba(0,0,0,0.3)]">
        <img src={resume} alt="Service picture" className='w-20' />
        <div className='text-[22px] font-bold text-center'>Resume Preparation</div>
        <div className='text-[19.5px] text-center text-stone-500'>Create a resume that stands out.</div>
        <button className="bg-red-600 text-white hover:scale-90 font-bold w-32 p-2 text-md rounded-xl">Learn More</button>
        </div>
        <div className="flex flex-col justify-center items-center w-[265px] h-[330px] p-5 space-y-3 shadow-[1px_10px_10px_3px_rgba(0,0,0,0.3)]">
        <img src={job} alt="Service picture" className='w-20' />
        <div className='text-[22px] font-bold text-center'>Job Listing Scope</div>
        <div className='text-[19.5px] text-center text-stone-500'>Find the right career path with our guidance.</div>
        <button className="bg-red-600 text-white hover:scale-90 font-bold w-32 p-2 text-md rounded-xl">Learn More</button>
        </div>
        <div className="flex flex-col justify-center items-center w-[265px] h-[330px] p-5 space-y-3 shadow-[1px_10px_10px_3px_rgba(0,0,0,0.3)]">
        <img src={cover} alt="Service picture" className='w-20' />
        <div className='text-[22px] font-bold text-center'>Cover Letter Preparation</div>
        <div className='text-[19.5px] text-center text-stone-500'>Write cover letters that
get noticed.</div>
        <button className="bg-red-600 text-white hover:scale-90 font-bold w-32 p-2 text-md rounded-xl">Learn More</button>
        </div>
        <div className="flex flex-col justify-center items-center w-[265px] h-[330px] p-5 space-y-3 shadow-[1px_10px_10px_3px_rgba(0,0,0,0.3)]">
        <img src={interview} alt="Service picture" className='w-20' />
        <div className='text-[22px] font-bold text-center'>Job Interview Preparayion</div>
        <div className='text-[19.5px] text-center text-stone-500'>Prepare for interviews with our tips.</div>
        <button className="bg-red-600 text-white hover:scale-90 font-bold w-32 p-2 text-md rounded-xl">Learn More</button>
        </div>
        </div>
        
        
        </div>
    )
}

export default Services
