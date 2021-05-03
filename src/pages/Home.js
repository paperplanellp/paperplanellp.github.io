import React from 'react'

import Navbar from '../components/Home/Navbar.js'
import Hero from '../components/Home/Hero'
import WhyUs from '../components/Home/WhyUS'
import BestPart from '../components/Home/BestPart'
import How from '../components/Home/How'
import ContactForm from '../components/Home/ContactForm'
import Clients from '../components/Home/Clients'
import ContactUs from '../components/Home/ContactUs'
import Footer from '../components/Footer'


const Home = () => {
    return(
        <div>
            <Navbar />

            <div id="home"/>

            <Hero />

            <h1 className="text-black makebold text-4xl justify-items-center items-center text-center py-auto px-6">
                Why us?
            </h1>

            <WhyUs />

            <BestPart />

            <h1 className="text-black makebold text-4xl justify-items-center items-center text-center py-auto px-6">
                How?
            </h1>

            <How />

            <h1 className="text-gray-500  text-4xl justify-items-center items-center text-center py-auto px-6" id="contact">
                Fill the form so that we can reach out to you!
            </h1>

            <ContactForm />

            <h1 className="text-black makebold text-4xl justify-items-center items-center text-center py-auto px-6" id="client">
                Our Clients
            </h1>

            <Clients />

            <h1 className="text-black makebold text-4xl justify-items-center items-center text-center py-auto px-6">
                Contact Us
            </h1>

            

            <ContactUs />

            <Footer />
        </div>
    )
}


export default Home