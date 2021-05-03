import React,{useState} from 'react'

import Rocket from '../../assets/rocket.svg'

const ContactForm = () => {

    const [data,setData] = useState({
        name:'',
        industry:'',
        number:'',
        email:''
    })

    const {name,industry,number,email} = data

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const response = await fetch(
                'https://v1.nocodeapi.com/shobitpuri/google_sheets/bSeVOksTLVInoKDU?tabId=Sheet1',{
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([
                        [name, industry, number, email, new Date().toLocaleString()],
                    ])
                }
            )
            await response.json()
            setData({...data, name:"",industry:"", number:"", email:""})
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/12">

                    </div>
                    <div className="p-4 lg:w-10/12">
                        <div className="h-full bg-white shadow-lg bg-opacity-75  rounded-lg overflow-hidden text-left ">
                            <div className="container mx-auto flex md:flex-row flex-col items-center">
                                <div className="w-2/5 mb-10 md:mb-0 bg-gradient-to-b from-blue-600 to-blue-900">
                                    <div style={{height:'35rem'}} className="p-24">
                                        <img src={Rocket} alt="img" className="pt-12"></img>
                                    </div>
                                </div>
                                <div className="w-3/5 mb-10 md:mb-0">
                                    <div className="px-16 py-16">
                                            <form onSubmit={handleSubmit}>
                                                <div className=" mb-4">
                                                    <label htmlFor="name" className="leading-7 text-sm text-gray-900 makebold">FULL NAME</label>
                                                    <input placeholder="Enter your full name" type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} onChange={handleChange} />
                                                </div>
                                                <div className=" mb-4">
                                                    <label htmlFor="industry" className="leading-7 text-sm text-gray-900 makebold">INDUSTRY YOU’RE IN</label>
                                                    <input placeholder="EX. Retail, Gym, Fitness " type="text" id="industry" name="industry" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={industry} onChange={handleChange}/>
                                                </div>
                                                <div className=" mb-4">
                                                    <label htmlFor="number" className="leading-7 text-sm text-gray-900 makebold">WE CAN CONTACT YOU AT</label>
                                                    <input placeholder="Enter your number" type="text" id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={number} onChange={handleChange}/>
                                                </div>
                                                <div className=" mb-8">
                                                    <label htmlFor="email" className="leading-7 text-sm text-gray-900 makebold">EMAIL</label>
                                                    <input placeholder="Enter your email address" type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={email} onChange={handleChange}/>
                                                </div>
                                                <button type="submit" className="inline-flex makebold text-white bg-blue-700 border-0 py-3 px-8 focus:outline-none hover:bg-blue-500 rounded-lg text-lg">
                                                        Let's Get in Touch &nbsp;
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                </button>
                                            </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/12">

                    </div>
                </div>
            </div>
        </section>


    )
}

export default ContactForm