import resume from '../Assets/Resume-Preparation.png'
import cover from '../Assets/Cover-Letter-Icon.png'
import interview from '../Assets/Interview-Preparation-icon.png'
import job from '../Assets/job-discovery-icon.png'

function ResourceService() {

        return (
            <div className="max-w-6xl mx-auto my-20 flex flex-col items-center justify-between">
                <div className='flex justify-between space-x-16 items-center'>
                    <div className="flex justify-center items-center w-[480px] h-[130px] p-5 space-x-5 shadow-[10px_10px_10px_1px_rgba(0,0,0,0.3)]">
                    <div className='w-40 -ml-20 rounded-full shadow-[1px_10px_15px_1px_rgba(0,181,204,1)]'>
                    <img src={resume} alt="Service picture" className='w-full' />
                    </div>
                    <div className='text-[28px] font-bold text-left px-7 hover:text-red-600'>
                    Sample Resume
                    </div>
                    </div>
                    <div className="flex justify-center items-center w-[480px] h-[130px] p-5 space-x-5 shadow-[10px_10px_10px_1px_rgba(0,0,0,0.3)]">
                    <div className='w-40 -ml-20 rounded-full shadow-[1px_10px_15px_1px_rgba(0,181,204,1)]'>
                    <img src={job} alt="Service picture" className='w-full' />
                    </div>
                    <div className='text-[28px] font-bold text-left px-7 hover:text-red-600'>
                    Weekly Job Lists
                    </div>
                    </div>
                </div>

                <div className='flex justify-between space-x-16 items-center my-12'>
                    <div className="flex justify-center items-center w-[480px] h-[130px] p-5 space-x-5 shadow-[10px_10px_10px_1px_rgba(0,0,0,0.3)]">
                    <div className='w-40 -ml-20 rounded-full shadow-[1px_10px_15px_1px_rgba(0,181,204,1)]'>
                    <img src={cover} alt="Service picture" className='w-full' />
                    </div>
                    <div className='text-[28px] font-bold text-center px-7 hover:text-red-600'>
                    Sample Cover Letter
                    </div>
                    </div>
                    <div className="flex justify-center items-center w-[480px] h-[130px] p-5 space-x-5 shadow-[10px_10px_10px_1px_rgba(0,0,0,0.3)]">
                    <div className='w-40 -ml-20 rounded-full shadow-[1px_10px_15px_1px_rgba(0,181,204,1)]'>
                    <img src={interview} alt="Service picture" className='w-full' />
                    </div>
                    <div className='text-[28px] font-bold text-center px-7 hover:text-red-600'>
                    Other Resources
                    </div>
                    </div>
                </div>
                <button className="shadow-[1px_10px_10px_1px_rgba(0,0,0,0.3)] hover:bg-red-600 text-red-600 hover:text-white hover:scale-95 font-semibold w-32 p-5 mt-10 text-md rounded-lg">View More</button>
            </div>
        )
    
}

export default ResourceService
