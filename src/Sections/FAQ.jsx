import { useState } from "react"

function FAQ() {
    const [faq, setFaq] = useState(false);
    const [faq2, setFaq2] = useState(false);
    const [faq3, setFaq3] = useState(false);
    return (
        <div className="max-w-6xl mx-auto my-10">
        <div className="text-[38px] font-bold text-center mb-16">FA<span className="text-red-600">Q's</span></div>
        
        <div className="flex flex-col max-w-fit justify-between items-center shadow-[3px_10px_10px_7px_rgba(0,0,0,0.3)] p-12 mb-10">
        <div className="flex justify-between items-center space-x-72">
        <div className="text-2xl font-bold">What services do you offer?</div>
        <button className="border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white hover:scale-95 font-bold w-12 p-2 text-md rounded-xl" onClick={()=> setFaq(!faq)}>{faq ? '-' : '+'}</button>
        </div>
        {faq && <div className="max-w-xl mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at deleniti facere corporis praesentium sapiente.</div>}
        </div>
        
        <div className="flex flex-col max-w-fit justify-between items-center shadow-[3px_10px_10px_7px_rgba(0,0,0,0.3)] p-12 mb-10">
        <div className="flex justify-between items-center space-x-72">
        <div className="text-2xl font-bold">What services do you offer?</div>
        <button className="border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white hover:scale-95 font-bold w-12 p-2 text-md rounded-xl" onClick={()=> setFaq2(!faq2)}>{faq2 ? '-' : '+'}</button>
        </div>
        {faq2 && <div className="max-w-xl mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at deleniti facere corporis praesentium sapiente.</div>}
        </div>
        <div className="flex flex-col max-w-fit justify-between items-center shadow-[3px_10px_10px_7px_rgba(0,0,0,0.3)] p-12 mb-10">
        <div className="flex justify-between items-center space-x-72">
        <div className="text-2xl font-bold">What services do you offer?</div>
        <button className="border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white hover:scale-95 font-bold w-12 p-2 text-md rounded-xl" onClick={()=> setFaq3(!faq3)}>{faq3 ? '-' : '+'}</button>
        </div>
        {faq3 && <div className="max-w-xl mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at deleniti facere corporis praesentium sapiente.</div>}
        </div>

        </div>
    )
}

export default FAQ
