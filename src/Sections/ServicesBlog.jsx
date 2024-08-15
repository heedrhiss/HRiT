import blog1 from '../Assets/Blog-post-1.png';
import blog2 from '../Assets/Blog-post-2.png';
import blog3 from '../Assets/Blog-post-3.png';

function ServicesBlog() {
    return (
        <div className="max-w-6xl flex mx-auto my-20 px-7 justify-between items-center">
        <div className="flex flex-col text-left w-[350px] h-[480px] rounded-b-2xl space-y-5 shadow-[1px_10px_10px_2px_rgba(0,0,0,0.3)]">
        <img src={blog1} alt="resume blog pics" className='w-fit' />
        <div className='text-[21px] px-5 pt-3 font-bold'>Top 10 Resume Tips</div>
        <div className='px-5 text-[17px] text-stone-500'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <a href="#" className='font-bold pl-5 hover:text-red-500'>Read More</a>
        </div>
        <div className="flex flex-col text-left w-[350px] h-[480px] rounded-b-2xl space-y-5 shadow-[1px_10px_10px_2px_rgba(0,0,0,0.3)]">
        <img src={blog2} alt="resume blog pics" className='w-fit' />
        <div className='text-[21px] px-5 pt-3 font-bold'>How to Prepare for Your Job Interview</div>
        <div className='px-5 text-[17px] text-stone-500'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <a href="#" className='font-bold pl-5 hover:text-red-500'>Read More</a>
        </div>
        <div className="flex flex-col text-left w-[350px] h-[480px] rounded-b-2xl space-y-5 shadow-[1px_10px_10px_2px_rgba(0,0,0,0.3)]">
        <img src={blog3} alt="resume blog pics" className='w-fit' />
        <div className='text-[21px] px-5 pt-3 font-bold'>Top 10 Resume Tips with</div>
        <div className='px-5 text-[17px] text-stone-500'>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <a href="#" className='font-bold pl-5 hover:text-red-500'>Read More</a>
        </div>
            
        </div>
    )
}

export default ServicesBlog
