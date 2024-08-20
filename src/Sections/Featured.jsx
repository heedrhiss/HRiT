function Featured() {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-5xl font-bold text-center">Featured <span className="text-red-600">Resources</span></div>
            <div className="flex justify-between item-center my-10 mx-3 w-full space-x-3">
                <div className="flex items-center shadow-[1px_10px_10px_5px_rgba(0,0,0,0.3)] w-64 py-10 px-7">
                <div className="text-[1.55rem] font-bold text-center  justify-center hover:text-red-600">Thumbnail images or icons</div>
                </div>
                <div className="flex items-center shadow-[1px_10px_10px_5px_rgba(0,0,0,0.3)] w-64 py-10 px-7">
                <div className="text-[1.55rem] font-bold text-center  justify-center hover:text-red-600">Titles of the resources</div>
                </div>
                <div className="flex items-center shadow-[1px_10px_10px_5px_rgba(0,0,0,0.3)] w-64 py-10 px-7">
                <div className="text-[1.55rem] font-bold text-center  justify-center hover:text-red-600">Brief Description</div>
                </div>
                <div className="flex items-center shadow-[1px_10px_10px_5px_rgba(0,0,0,0.3)] w-64 py-10 px-7">
                <div className="text-[1.55rem] font-bold text-center  justify-center hover:text-red-600">Links to detailed resource pages</div>
                </div>
                

            </div>
        </div>
    )
}

export default Featured
