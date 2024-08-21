import image from '../Assets/Logo-HRiT-Official.jpg'

function Contact() {
    return (
        <div className="bgcontact w-[100vw] h-[400px] flex items-center justify-center text-white font-bold text-lg text-center">
        <div className="max-w-md flex flex-col items-center justify-center mx-auto text-center my-10 space-y-3">
        <img src={image} alt="HRiT Logo" className='w-24 h-24 rounded-full' />
        <p>Trusted by job seekers globally for expert guidance, personalized services and proven results</p>
        </div>
        </div>
    )
}

export default Contact
