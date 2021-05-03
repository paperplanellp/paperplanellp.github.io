import React from 'react'

import Navbar from '../components/about/Navbar2'
import Hero2 from '../components/about/Hero2'
import OurMission from '../components/about/OurMission'
import OurVirtues from '../components/about/OurVirtues'
import Footer from '../components/Footer'



const About = () => {
    return(
        <div>
            <Navbar />

            <div id="about"/>

            <Hero2 />

            <div id="mission"></div>
            <h1 className="text-black makebold text-4xl justify-items-center items-center text-center py-auto px-6" >
                Our Mission
            </h1>

            <div className="container px-5 py-6 mx-auto">
                <div className="flex flex-wrap -mx-4 -my-8">
                    <div className="py-8 px-4 lg:w-1/5">

                    </div>
                    <div className="py-8 px-4 lg:w-3/5">
                        <p className="text-gray-600 text-lg justify-items-center items-center text-center py-auto">
                            Messaging apps have taken the world by storm and changed how we communicate. We’re here to make chats between businesses and customers as easy as chats between friends.
                        </p>
                    </div>
                    <div className="py-8 px-4 lg:w-1/5">

                    </div>
                </div>
            </div>

            <OurMission />

            <h1 className="text-black makebold text-4xl justify-items-center items-center text-center pt-20 px-6" id="virtue">
                Our Success Metrics
            </h1>

            <OurVirtues />

            <Footer />
        </div>
    )
}


export default About