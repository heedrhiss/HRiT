import { Link, NavLink } from 'react-router-dom'
import logo from '../Assets/Logo-HRiT-Official-Transparent.png'

function Nav() {
    return (
        <nav className="max-w-6xl mx-auto pt-2 flex w-full justify-between items-center px-5">
            <div className="">
                <NavLink to='/'>
                <img alt="HRiT Logo" src={logo} className='h-30 w-52' />
                </NavLink>
   
            </div>
            <div>
            <div className='flex items-start space-x-10 text-lg font-semibold justify-start text-slate-600'>
                <NavLink to='/Services' className='hover:text-red-500'>Services</NavLink>
                <NavLink to='/Testimonials' className='hover:text-red-500'>Testimonials</NavLink>
                <NavLink to='/Resources' className='hover:text-red-500'>Resources</NavLink>
                <NavLink to='/Connect' className='hover:text-red-500'>Connect</NavLink>
            </div>
            </div>
        </nav>
    )
}

export default Nav
