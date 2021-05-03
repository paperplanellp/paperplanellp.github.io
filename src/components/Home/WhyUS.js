import React from 'react'

const WhyUS = () =>{
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-white shadow-xl bg-opacity-75 px-8 pt-16 pb-6 rounded-lg overflow-hidden text-center">
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 makebold">Get your Brand out there <br /> faster</h1>
                        <p className="leading-relaxed mb-3">People should be able to communicate with their favourite brands the same way they communicate with their friends.</p>
                        <br />
                        <h1 className="text-gray-300 text-right" style={{ fontSize:'72px'}}>
                            01
                        </h1>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-white shadow-xl bg-opacity-75 px-8 pt-16 pb-6 rounded-lg overflow-hidden text-center ">
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 makebold">Offer Services in <br /> Real Time</h1>
                        <p className="leading-relaxed mb-3">Build customer relationships, drive sales, and provide value-added services like updates, notifications, in-app payments and what not!</p>
                        <h1 className="text-gray-300 text-right" style={{ fontSize:'72px'}}>
                            02
                        </h1>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-white shadow-xl bg-opacity-75 px-8 pt-16 pb-6 rounded-lg overflow-hidden text-center ">
                        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3 makebold">Manage your Clients and Customers big</h1>
                        <p className="leading-relaxed mb-3">Easy to use dashboard with all your customer data at your fingertips</p>
                        <br />
                        <h1 className="text-gray-300 text-right" style={{ fontSize:'72px'}}>
                            03
                        </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhyUS