import React from 'react'

import HeroImg from '../../assets/Vectarytexture.png'

import {Link} from 'react-scroll'

const Hero = () =>{
    return(
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-5xl text-5xl mb-6 font-medium text-gray-900 makebold">Grow Your Business 
                </h1>
                <h1 className="title-font sm:text-5xl text-5xl mb-12 font-medium text-gray-900 makebold">
                    Faster With WhatsApp
                </h1>

                <h5 className="title-font sm:text-3xl text-5xl mb-4 font-medium text-gray-900 ">
                    Take your business digital
                </h5>
                <p className="mb-8 leading-relaxed text-lg">Increase Customer satisfaction and retention at the same time.</p>
                <div className="flex justify-center">
                    <Link className="inline-flex text-white bg-blue-700 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg" to="contact" smooth={true} duration={1000}>Get my first digital mascot</Link>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <div className="rounded-full flex items-center justify-center bg-blue-700" style={{ width:"35rem", height:'35rem' }}>
                        <div className="rounded-full flex items-center justify-center" style={{ width:"25rem", height:'25rem', background:'#6a7ef9' }}>
                            <img className="object-cover object-center rounded absolute" alt="hero" src={HeroImg} style={{width:'46rem', overflow:'visible'}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Hero