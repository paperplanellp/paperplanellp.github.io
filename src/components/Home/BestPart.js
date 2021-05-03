import React from "react";

import {Link} from 'react-scroll'

const BestPart = () =>{
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-24 mx-auto flex flex-wrap">
                <div className="md:w-full">
                    <h2 className="sm:text-3xl text-4xl text-gray-900 font-medium title-font mb-2 text-center makebold">Best part?</h2>
                    <p className="leading-relaxed text-2xl text-center px-48">No additional app is required, your good old Whatsapp will do wonders!</p>
                </div>
                <div className="container px-5 pt-8 pb-32 mx-auto flex flex-wrap">
                    <div className="md:w-1/3">

                    </div>
                    <div className="md:w-1/3">
                        <div className="flex md:mt-4 mt-6 flex-auto justify-items-center items-center text-center place-items-center my-auto pl-36">
                            <Link className="inline-flex text-white bg-blue-700 border-0 py-3 px-8 focus:outline-none hover:bg-blue-500 rounded-lg text-lg" to="contact" smooth={true} duration={1000}>Get my first Bot</Link>
                        
                        </div>
                    </div>
                    <div className="md:w-1/3">

                    </div>
                </div>
                <div className="md:w-full md:pl-6">

                </div>
            </div>
        </section>

    )
}

export default BestPart