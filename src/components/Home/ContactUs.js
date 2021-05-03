import React from 'react'

const ContactUs = () => {
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <div className="text-center mb-8">
                    
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/4">

                    </div>
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center border-r-2 border-gray-200 py-16 mr-10">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-700 text-blue-500 mb-5 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        </div>
                        <div>
                            <p className="text-gray-600 pt-8 pb-4 text-lg">
                                Get in touch with us at 
                            </p>
                        </div>
                        <div className="flex-grow">
                        <h2 className="text-gray-900 text-2xl title-font font-medium mb-3 makebold">dev.paperplane@gmail.com</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 flex flex-col text-center items-center py-16">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-blue-700 text-blue-500 mb-5 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-gray-600 pt-8 pb-4 text-lg">
                                Drop us a call/message at  
                            </p>
                        </div>
                        <div className="flex-grow">
                        <h2 className="text-gray-900 text-2xl title-font font-medium mb-3 makebold">+91 7016400304</h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4">

                    </div>
                
                </div>
            </div>
        </section>

    )
}

export default ContactUs