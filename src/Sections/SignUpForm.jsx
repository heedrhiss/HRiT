function SignUpForm() {
    return (
        <>
        <div className="text-5xl font-bold text-center mt-20">Stay <span className="text-red-600">Updated</span></div>
        <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="p-16 text-3xl font-bold w-1/2">
        Sign up for our newsletter to receive updates on new resources
        </div>
        <form action="" className="w-1/2 p-16 flex flex-col space-y-8">
            <p className="font-bold">Name <span className="text-red-600">*</span></p>
            <div className="flex items-center justify-between">
            <input type="text" placeholder="First" className="p-2 border border-stone-300 focus:outline-red-500"/>
            <input type="text" placeholder="Last" className="p-2 border border-stone-300 focus:outline-red-500"/>
            </div>
            <p className="font-bold">Email <span className="text-red-600">*</span></p>
            <div className="flex">
            <input type="text" placeholder="Email" className="p-2 border border-stone-300 w-full focus:outline-red-500"/>
            </div>
            <button className="bg-red-600 text-white hover:scale-95 font-semibold w-20 p-2 text-sm rounded-sm" name="submit">Submit</button>
        </form>
        </div>
        </>
    )
}

export default SignUpForm
