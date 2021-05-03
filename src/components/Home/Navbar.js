import React from 'react'

import {Link} from 'react-scroll'

const Navbar = () => {

    return(
        <div className="">
            <div className="bg-blue-700 fixed z-10 top-0 left-0 right-0 opacity-100">
                <header className="text-white body-font makebold">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
                            <svg width={60} height={35} viewBox="0 0 85 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.6402 4.5C40.7949 2.5 43.6817 2.5 44.8364 4.5L65.188 39.75C66.3427 41.75 64.8993 44.25 62.5899 44.25H21.8867C19.5773 44.25 18.1339 41.75 19.2886 39.75L39.6402 4.5Z" fill="white" />
                                <path d="M44.4234 51.393C43.3099 52.3234 41.6901 52.3234 40.5766 51.393L12.0404 27.5523C9.88857 25.7545 11.1599 22.25 13.9639 22.25L71.0361 22.25C73.8401 22.25 75.1114 25.7545 72.9596 27.5523L44.4234 51.393Z" fill="white" fillOpacity="0.56" />
                            </svg>

                            <span className="ml-3 text-2xl text-white makebold">PaperPlane</span>
                        </a>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <Link className="mr-5 hover:text-gray-900" to="home" smooth={true} duration={1000}>Home</Link>
                            <a className="mr-5 hover:text-gray-900" href="/about">About Us</a>
                            <Link className="mr-5 hover:text-gray-900" to="client" smooth={true} duration={1000}>Our Clients</Link>
                            <Link className="mr-5 hover:text-gray-900" to="contact" smooth={true} duration={1000}>Contact Us</Link>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    )
}


export default Navbar