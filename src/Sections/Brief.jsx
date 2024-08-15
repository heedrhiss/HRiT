function Brief() {
    return (
        <div className="max-w-6xl mx-auto my-10 p-5">
        <div className="text-[38px] font-bold text-center mb-16">Brief descriptions with dates and <br/> <span className="text-red-600">links to register.</span></div>
        
        <div className="flex justify-between items-center w-full shadow-[3px_10px_10px_7px_rgba(0,0,0,0.3)] p-12 rounded-xl mb-7">
        <div >
        <div className="text-2xl font-bold">Resume Writing Workshop</div>
        <div className="text-xl font-bold mt-2">August 5th, 2024 - 8am to 10am (EST)</div>
        </div>
        <button className="border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white hover:scale-95 font-bold w-32 p-2 text-md rounded-xl">Register Now</button>
        </div>

        <div className="flex justify-between items-center w-full shadow-[3px_10px_10px_7px_rgba(0,0,0,0.3)] p-12 rounded-xl">
        <div >
        <div className="text-2xl font-bold">Networking Event</div>
        <div className="text-xl font-bold mt-2">August 5th, 2024 - 8am to 10am (EST)</div>
        </div>
        <button className="border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white hover:scale-95 font-bold w-32 p-2 text-md rounded-xl">Register Now</button>
        </div>
        
        </div>
    )
}

export default Brief
