import React from 'react'

const Footer = () => {
    return(
        <footer className="text-white body-font">
            <div className="bg-gradient-to-b from-blue-600 to-blue-900 mt-12">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="/">
                    <svg width={60} height={35} viewBox="0 0 85 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.6402 4.5C40.7949 2.5 43.6817 2.5 44.8364 4.5L65.188 39.75C66.3427 41.75 64.8993 44.25 62.5899 44.25H21.8867C19.5773 44.25 18.1339 41.75 19.2886 39.75L39.6402 4.5Z" fill="white" />
                        <path d="M44.4234 51.393C43.3099 52.3234 41.6901 52.3234 40.5766 51.393L12.0404 27.5523C9.88857 25.7545 11.1599 22.25 13.9639 22.25L71.0361 22.25C73.8401 22.25 75.1114 25.7545 72.9596 27.5523L44.4234 51.393Z" fill="white" fillOpacity="0.56" />
                    </svg>

                    <span className="ml-3 text-2xl  text-white makebold">PaperPlane</span>
                </a>
                <p className="text-sm sm:ml-6 sm:mt-0 mt-4">© 2021 PaperPlane - 
                    <a href="/" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@twitterhandle</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-white" href="/">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                    </a>
                    <a className="ml-3 text-white" href="/">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                    </a>
                    <a className="ml-3 text-white" href="/">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                    </a>
                    <a className="ml-3 white-500" href="/">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                    </a>
                </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer