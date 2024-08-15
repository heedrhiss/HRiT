import logo from '../Assets/Logo-HRiT-Official-Transparent.png'

function Nav() {
    return (
        <nav className="max-w-6xl mx-auto pt-2 flex w-full justify-between items-center px-5">
            <div className="">
            <a href='#' className=''>
                <img alt="HRiT Logo" src={logo} className='h-30 w-52' />
               {/* <div className="text-4xl font-bold text-slate-600">HR<span className='text-red-500'>i</span>T</div> */}
               </a>
            </div>
            <div>
            <div className='flex items-start space-x-10 text-lg font-semibold justify-start text-slate-600'>
                <a href='#' className='hover:text-red-500'> <div> Services</div> </a>
                <a href='#' className='hover:text-red-500'> <div>Testimonials</div></a>
                <a href='#' className='hover:text-red-500'> <div>Resources</div></a>
                <a href='#' className='hover:text-red-500'> <div>Connect</div></a>

            </div>
            </div>
        </nav>
    )
}

export default Nav
