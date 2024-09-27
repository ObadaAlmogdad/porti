"use client"
import Link from "next/link";
import {BsArrowDownRight} from "react-icons/bs";
import { delay, motion } from "framer-motion";

const services =[
    {
        num:"01",
        title: "Full Stack Development.",
        description:"Is the process of developing both the frontend and the backend of a web application or website.",
        href:"https://www.linkedin.com/in/obada-almogdad-79a090309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        num:"02",
        title: "Backend Development",
        description:"Is the part of application that manages servers, databases, and processes user requests.",
        href:"https://www.linkedin.com/in/obada-almogdad-79a090309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        num:"03",
        title: "Database Management",
        description:"involves organizing, storing, and accessing data efficiently. It includes creating, maintaining, and securing databases, ensuring data is available, consistent, and reliable for users and applications.",
        href:"https://www.linkedin.com/in/obada-almogdad-79a090309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
        num:"04",
        title: "FrontEnd Development",
        description:"is the part of a website or application that users see and interact with. It involves designing the layout, buttons, and visuals, to create a smooth and responsive user experience.",
        href:"https://www.linkedin.com/in/obada-almogdad-79a090309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
];

const Services = () =>{
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity:0 }}
                    animate={{ 
                        opacity:1,
                        transition:{ delay:2.4, duration: 0.4, ease:"easeIn"},
                        }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"

                >
                    {services.map((services,index)=>{
                        return (
                            <div 
                                key={index} 
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
                                    <Link 
                                        href={services.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl"/>
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leanding-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>
                                <p className="text-white/80 ">{services.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services