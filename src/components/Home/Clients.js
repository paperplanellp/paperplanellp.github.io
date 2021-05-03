import React from 'react';

import Client1 from '../../assets/client1.png'
import Client2 from '../../assets/client2.png'


const Clients = () => {
    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                <div className="p-4 md:w-1/4">
                    
                </div>
                <div className="p-4 md:w-1/4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Client2} alt="blog" />
                    <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 makebold">MUMBAI METRO</h1>
                        
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/4">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg overflow-hidden">
                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={Client1} alt="blog" />
                    <div className="p-6">
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3 makebold">RELIANCE</h1>
                        
                    </div>
                    </div>
                </div>
                <div className="p-4 md:w-1/4">
                    
                </div>
                </div>
            </div>
        </section>

    )
}

export default Clients