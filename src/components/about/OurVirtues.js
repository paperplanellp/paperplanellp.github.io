import React from 'react'

import HeroImg from '../../assets/Virtue.svg'

const OurVirtues = () => {
    return(
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 pb-8 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                <div className="pl-36 pr-8 pb-8 lg:w-1/2">
                                    <div className="h-full bg-white shadow-lg bg-opacity-75 px-8 py-16  rounded-xl overflow-hidden text-center ">
                                    <h1 className="title-font sm:text-2xl text-2xl font-medium text-gray-900 mb-3">Customer Retention</h1>
                                    {/* <h1 className="title-font sm:text-xl text-xl font-medium text-gray-500 mb-3">awareness </h1> */}

                                    </div>
                                </div>
                                <div className="pr-36 pl-8 pb-8 lg:w-1/2">
                                    <div className="h-full bg-white shadow-lg bg-opacity-75 px-8 py-16  rounded-xl overflow-hidden text-center ">
                                    <h1 className="title-font sm:text-2xl text-2xl font-medium text-gray-900 mb-3">&nbsp;&nbsp;&nbsp;User&nbsp;&nbsp;&nbsp; Experience</h1>

                                    </div>
                                </div>
                                <div className="pl-36 pr-8 pb-8 lg:w-1/2">
                                    <div className="h-full bg-white shadow-lg bg-opacity-75 px-8 py-16  rounded-xl overflow-hidden text-center ">
                                    <h1 className="title-font sm:text-2xl text-2xl font-medium text-gray-900 mb-3">Customer Satisfaction</h1>

                                    </div>
                                </div>
                                <div className="pr-36 pl-8 pb-8 lg:w-1/2">
                                    <div className="h-full bg-white shadow-lg bg-opacity-75 px-8 py-16  rounded-xl overflow-hidden text-center ">
                                    <h1 className="title-font sm:text-2xl text-2xl font-medium text-gray-900 mb-3">Business Revenue Growth</h1>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    {/* <div className="rounded-full flex items-center justify-center bg-blue-700" style={{ width:"35rem", height:'35rem' }}> */}
                        {/* <div className="rounded-full flex items-center justify-center p-8" style={{ width:"25rem", height:'25rem', background:'#EAF9FF' }}> */}
                            <img className="object-cover object-center rounded" alt="hero" src={HeroImg} style={{width:'46rem', overflow:'visible'}} />
                        {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </section>
    )
}

export default OurVirtues