import icon from '../Assets/goal.png'

function RightGoal() {
    return (
        <div className="max-w-6xl mx-auto my-10 p-5">
            <div className="text-4xl font-bold text-center">We help you find the <span className="text-red-600">right job.</span> <br/>
            Our services cover every step of the job search process.</div>

            <div className="flex items-center justify-between p-10 shadow-[1px_10px_10px_10px_rgba(0,0,0,0.3)] my-12 rounded-xl">
            <div className="w-1/2">
                <img src={icon} alt="Target picture"/>
                <p className='text-lg'>Our goal is to provide you with the tools and guidance to succeed in your job search.</p>
            </div>

            <div className='w-1/2 flex flex-col items-center justify-center space-y-4'>
            <div className='w-52 h-14 p-4 text-lg font-bold shadow-[1px_10px_10px_1px_rgba(0,0,0,0.3)] hover:shadow-[1px_10px_10px_1px_rgba(255,76,48,1)]'>Job Scope Discovery</div>
            
            <div className='flex space-x-4'>
            <div className='w-52 py-4 text-center text-lg font-bold shadow-[1px_10px_10px_1px_rgba(0,0,0,0.3)] hover:shadow-[1px_10px_10px_1px_rgba(255,76,48,1)]'>Resume Preparation</div>
            <div className='w-52 py-4 text-center text-lg font-bold shadow-[1px_10px_10px_1px_rgba(0,0,0,0.3)] hover:shadow-[1px_10px_10px_1px_rgba(255,76,48,1)]'>LinkedIn Optimization</div>
            </div>
            <div className='flex space-x-4'>
            <div className='w-52 h-20 p-4 text-center text-lg font-bold shadow-[1px_10px_10px_1px_rgba(0,0,0,0.3)] hover:shadow-[1px_10px_10px_1px_rgba(255,76,48,1)]'>Cover Letter Preparation</div>
            <div className='w-52 h-20 py-7 text-center text-lg font-bold shadow-[1px_10px_10px_1px_rgba(0,0,0,0.3)] hover:shadow-[1px_10px_10px_1px_rgba(255,76,48,1)]'>Interview Coaching</div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default RightGoal
