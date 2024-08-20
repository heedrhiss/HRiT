import resume from '../Assets/Resume-Preparation.png'
import cover from '../Assets/Cover-Letter-Icon.png'
import interview from '../Assets/Interview-Preparation-icon.png'
import job from '../Assets/job-discovery-icon.png'

function ServiceServices() {
    return (
        <div className="max-w-6xl mx-auto my-20 flex flex-col items-center justify-between">
            <div className='flex justify-between items-center space-x-32 my-12'>
                <div className="flex justify-center items-center w-full max-w-[400px] h-[130px] p-5 space-x-5 shadow-[10px_10px_10px_1px_rgba(0,0,0,0.3)]">
                    <div className='w-44 -ml-20 rounded-full shadow-[1px_10px_15px_1px_rgba(0,181,204,1)]'>
                        <img src={resume} alt="Service picture" className='w-full' />
                    </div>
                    <div className='text-[22px] font-bold text-left px-7'>
                        Resume Preparation
                        <div className='text-[15px] font-normal text-stone-500'>
                        Create a resume that stands out.
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full max-w-[400px] h-[130px] p-5 space-x-5 shadow-[10px_10px_10px_1px_rgba(0,0,0,0.3)]">
                    <div className='w-44 -ml-20 rounded-full shadow-[1px_10px_15px_1px_rgba(0,181,204,1)]'>
                        <img src={job} alt="Service picture" className='w-full' />
                    </div>
                    <div className='text-[22px] font-bold text-left px-7'>
                        Job Listing Scope
                        <div className='text-[15px] font-normal text-stone-500'>
                            Find the right career path with our guidance.
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center space-x-32'>
                <div className="flex justify-center items-center w-full max-w-[400px] h-[130px] p-5 space-x-5 shadow-[10px_10px_10px_1px_rgba(0,0,0,0.3)]">
                    <div className='w-44 -ml-20 rounded-full shadow-[1px_10px_15px_1px_rgba(0,181,204,1)]'>
                        <img src={cover} alt="Service picture" className='w-full' />
                    </div>
                    <div className='text-[22px] font-bold text-left px-7'>
                        Cover Letter Preparation
                        <div className='text-[15px] font-normal text-stone-500'>
                        Write cover letters that get noticed.
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full max-w-[400px] h-[130px] p-5 space-x-5 shadow-[10px_10px_10px_1px_rgba(0,0,0,0.3)]">
                    <div className='w-44 -ml-20 rounded-full shadow-[1px_10px_15px_1px_rgba(0,181,204,1)]'>
                        <img src={interview} alt="Service picture" className='w-full' />
                    </div>
                    <div className='text-[22px] font-bold text-left px-7'>
                        Job Interview Preparation
                        <div className='text-[15px] font-normal text-stone-500'>
                        Prepare for interviews with our tips.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceServices;
