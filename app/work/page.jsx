"use client"

import { motion } from "framer-motion"
import React ,{useState}from "react"

import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/css"

import {BsArrowUpRight,BsGithub} from "react-icons/bs"

import {Tooltip, TooltipContent, TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

const projects =[
    {
        num:"01",
        category:"Backend",
        title:"School Mangment System",
        description:"Developed a school management system using Laravel to provide a robust backend architecture and RESTful API. The system streamlines essential administrative tasks, including student and teacher management, attendance tracking, curriculum planning, and exam management. The project demonstrates strong skills in backend development, database management, and API design.",
        stack:[
            {name:"Laravel"},  {name:"API"}, {name:"Database"},
        ],
        image:"/assets/work/12.png",
        live:"",
        githup:"",
    },
    {
        num:"02",
        category:"Backend",
        title:"Pharma",
        description:"Designed and developed a Pharmacy Management System using Laravel to create a robust backend with a RESTful API. The system supports core pharmacy operations, including inventory management, prescription handling, supplier tracking, and sales processing. The API enables secure and efficient data management, ensuring smooth integration with front-end applications and third-party systems. ",
        stack:[
            {name:"Laravel"},  {name:"API"}, {name:"Database"},
        ],
        image:"/assets/work/11.png",
        live:"",
        githup:"",
    },

    {
        num:"03",
        category:"Game",
        title:"Math game",
        description:"Created a game in a website using HTML, CSS, and JavaScript. The game is beneficial in both educational and recreational fields, as it improves the user's speed in performing mathematical operations and creates a competitive atmosphere for breaking records.",
        stack:[
            {name:"Html 5"},  {name:"Css 3"}, {name:"Js"},
        ],
        image:"/assets/work/thumb2.png",
        live:"",
        githup:"",
    },
    {
        num:"04",
        category:"AI",
        title:"soko farmar",
        description:"",
        stack:[
            {name:"Java"},  {name:"AI"},
        ],
        image:"/assets/work/thumb3.png",
        live:"",
        githup:"",
    },
    {
        num:"05",
        category:"Frontend",
        title:"Tic Tac Toe",
        description:"Create game with Next.js.",
        stack:[
            {name:"Next.js"},  {name:"Css 3"},
        ],
        image:"/assets/work/xo.png",
        live:"",
        githup:"",
    },
    {
        num:"06",
        category:"Frontend",
        title:"Dashboard",
        description:"I completed this project by applying what I learned from Osama Elzero's channel and refining my skills in HTML, CSS, and JavaScript..",
        stack:[
            {name:"Html 5"},  {name:"Css 3"}, {name:"Js"},
        ],
        image:"/assets/work/d1.png",
        live:"",
        githup:"",
    },
    {
        num:"07",
        category:"frontend",
        title:"project 1",
        description:"Created a fully responsive and interactive website using HTML, CSS, and JavaScript.",
        stack:[
            {name:"Html 5"},  {name:"Css 3"}, {name:"Js"},
        ],
        image:"/assets/work/thumb1.png",
        live:"",
        githup:"",
    },

];

const Work = () =>{
    const [project,setProjct] = useState(projects[0]);

    const handleSlideChange= (swiper)=>{

        const currentIndex = swiper.activeIndex;

        setProjct(projects[currentIndex])
    }
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 ,transition:{delay:2.1,duration:0.4, ease:"easeIn"}}}
         className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[25px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                           <h2 className="text-[42px] font-blod leadinng-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                            {project.category} project
                           </h2>
                           <p className="text-white/60 ">{project.title}</p>
                           <p className="text-white/60 ">{project.description}</p>

                           <ul className="flex gap-4 ">
                                {project.stack.map((item,index)=>{
                                    return(
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length-1 && ","}
                                        </li>
                                    )
                                })}
                           </ul>
                            {/*  */}
                           <div className="border border-white/20"></div>
                           {/* buttons */}
                           <div className=" flex items-center gap-4">
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>

                            <Link href={project.githup}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Githup repo</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                           </div>

                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project,index)=>{
                                return(
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black"></div>
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover"/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work