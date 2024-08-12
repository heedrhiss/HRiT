import logo from '../Assets/icon.png';

function Nav() {
    return (
        <nav className="max-w-6xl mx-auto pt-8 flex w-full justify-between items-center p-5">
            <div className="">
            <a href='#' className='flex space-x-4 items-center'> <img alt="HRiT Logo" src={logo} className='h-10 w-14' />
               <div className="text-4xl font-bold text-cyan-500">HR<span className='text-red-500'>i</span>T</div> </a>
            </div>
            <div>
            <div className='flex items-start space-x-9 text-lg font-semibold justify-start text-stone-600'>
                <a href='#' className='hover:text-cyan-300'> <div> Services</div> </a>
                <a href='#' className='hover:text-cyan-300'> <div>Testimonials</div></a>
                <a href='#' className='hover:text-cyan-300'> <div>Resources</div></a>
                <a href='#' className='hover:text-cyan-300'> <div>Connect</div></a>

            </div>
            </div>
        </nav>
    )
}

export default Nav
