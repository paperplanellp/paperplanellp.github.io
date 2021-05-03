import React from 'react'

import Img from '../../assets/Illustration.png'

import {Link} from 'react-scroll'

const How = () => {
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/6">
                </div>
                <div className="p-4 lg:w-4/6">
                    <div className="h-full bg-white shadow-lg bg-opacity-75 px-8 pt-4 pb-4 rounded-lg overflow-hidden text-center">
                        <section className="text-gray-600 body-font">
                            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
                                <div className=" w-2/5 mb-10 md:mb-0">
                                    <img className="object-cover object-center rounded" alt="hero" src={Img} />
                                </div>
                                <div className="w-3/5 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-700 makebold text-center">Let's get you setup
                                </h1>
                                <p className="mb-8 leading-relaxed text-center px-8">Our Team will schedule a call with you to get you all setup.</p>
                                    <div className="flex justify-center">
                                        <div >
                                            <div className="mx-20">
                                                <Link className="inline-flex text-white bg-blue-700 border-0 py-3 px-8 focus:outline-none hover:bg-blue-500 rounded-full text-lg" to="contact" smooth={true} duration={1000}>
                                                    Let's Go &nbsp;
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </Link>        
                                            </div>
                                        </div>
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="p-4 lg:w-1/6">
                </div>
                </div>
            </div>
        </section>

    )
}

export default How