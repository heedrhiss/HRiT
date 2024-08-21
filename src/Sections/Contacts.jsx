import image from '../Assets/call.jpg'
import fb from '../Assets/facebook.png'
import ig from '../Assets/Instagram-Image.png'
import linkedin from '../Assets/LinkedIn-Image.png';

function Contacts() {
    return (
        <div className="max-w-6xl flex flex-col items-center justify-center mx-auto">
            <div className="text-5xl font-bold text-center my-10">
                Contact <span className="text-red-600">Us</span>
            </div>

            <div className="w-full mx-auto flex items-center justify-around my-10 text-center">
               <a href="https://www.facebook.com/HRiTNiG">
                <div className="flex flex-col items-center hover:text-red-600">
                <img src={fb} alt="call icon" className='w-24 h-24 rounded-full' />
                <div className='text-2xl font-bold'>Facebook</div>
                </div>
                </a>
                <a href="https://www.instagram.com/hritng/">
                <div className="flex flex-col items-center hover:text-red-600">
                <img src={ig} alt="call icon" className='w-24 h-24' />
                <div className='text-2xl font-bold'>Instagram</div>
                </div>
                </a>
                <a href="https://www.linkedin.com/company/hrit-digital-agency/">
                <div className="flex flex-col items-center hover:text-red-600">
                <img src={linkedin} alt="call icon" className='w-24 h-24' />
                <div className='text-2xl font-bold'>Linked-In</div>
                </div>
                </a>
            </div>
            <div className="max-w-xl mx-auto flex flex-col items-center justify-center my-10 text-center">
                <div className="flex items-center space-x-3">
                <img src={image} alt="call icon" className='w-12 h-12' />
                <div className='text-xl font-semibold py-4'>+234 8113848625 | +234 8113848629</div>
                </div>
            </div>
        </div>
    )
}

export default Contacts
