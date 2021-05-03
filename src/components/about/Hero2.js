import React from 'react'

import HeroImg from '../../assets/Hero2.svg'

const Hero2 = () =>{
    return(
        <section className="text-gray-600 body-font mt-24">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-5xl text-5xl mb-6 font-medium text-blue-700 makebold">About Us 
                </h1>
                <br />
                <p className="mb-8 leading-relaxed text-gray-900 text-xl mt-4 pr-44 text-center">Paper plane is a smart, personal and a versatile chatbot. It’s pandemic-proof.</p>

                <h5 className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-600 pr-56">
                    No one likes waiting in lines, or repeating orders on call, or rehearsing grocery lists at the cash counter. And you definitely don’t want to catch a virus while shopping for toilet paper.
                </h5>
                <p className="mb-8 leading-relaxed text-gray-600 text-xl mt-4 pr-56">Our plane swoops in these business gaps and communicates your customer’s message to you- orders, appointments, feedbacks, queries...anything at all.</p>
                
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    {/* <div className="rounded-full flex items-center justify-center bg-blue-700" style={{ width:"35rem", height:'35rem' }}> */}
                        <div className="rounded-full flex items-center justify-center p-8" style={{ width:"25rem", height:'25rem', background:'#EAF9FF' }}>
                            <img className="object-cover object-center rounded" alt="hero" src={HeroImg} style={{width:'46rem', overflow:'visible'}} />
                        </div>
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default Hero2