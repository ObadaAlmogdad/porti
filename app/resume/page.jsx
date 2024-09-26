"use client";
import {FaHtml5,FaCss3,FaJs ,FaLaravel,FaReact, FaNodeJs,FaPhp,FaJava} from "react-icons/fa";
import {
    SiTailwindcss,SiNextdotjs,SiLaravel
} from "react-icons/si";

const about={
        title:"Abot me",
        description: "asd asd asd asd asd",
        info:[
            {
                fieldName:"Name",
                fieldValue:"Obada almogdad"
            },
            {
                fieldName:"Phone",
                fieldValue:"(+963) 995 882 681"
            },
            {
                fieldName:"Exrerience",
                fieldValue:"3+ Years"
            },
            {
                fieldName:"Linked in",
                fieldValue:"Obada Almogdad"
            },
            {
                fieldName:"Nationality",
                fieldValue:"Syrian"
            },
            {
                fieldName:"Email",
                fieldValue:"obadaalmogdad@gmail.com"
            },
            {
            fieldName:"Languages",
            fieldValue:"English, Arabic"
            },
        ]
};

const ex ={
    icon:"/public/assets/resume/badge.svg",
    title:"My experience",
    description:"asd asdff asdf asdf asdf asdf.",
    items:[
        {
            company:"Free Lanser",
            position:"Full Stack Developer",
            duration:"2022 -2024"
        },
        // {
        //     company:"teac.",
        //     position:"Full Stack Developer",
        //     duration:"2022 -2023"
        // },
        // {
        //     company:"teac.",
        //     position:"Full Stack Developer",
        //     duration:"2022 -2023"
        // },
        // {
        //     company:"teac.",
        //     position:"Full Stack Developer",
        //     duration:"2022 -2023"
        // },
        
    ]
}

const education ={
    icon:"/public/assets/resume/badge.svg",
    title:"My education",
    description:"asd asdff asdf asdf asdf asdf.",
    items:[
        {
            inst:"teac.",
            degree:"Data Analyst",
            duration:"2023 -2024"
        },
        {
            inst:"teac.",
            degree:"Full Stack Developer",
            duration:"2022 -2023"
        },
        {
            inst:"teac.",
            degree:"Full Stack Developer",
            duration:"2022 -2023"
        },
        {
            inst:"teac.",
            degree:"Full Stack Developer",
            duration:"2022 -2023"
        },
        {
            inst:"teac.",
            degree:"Full Stack Developer",
            duration:"2022 -2023"
        },

    ]
}

const skills ={
    title:"My skills",
    description:"asd asd asd asd asd ",
    skillList:[
        {
            icon: <FaHtml5 />,
            name:"html 5",
        },
        {
            icon: <FaCss3 />,
            name:"css 3",
        },
        {
            icon: <FaJs />,
            name:"javascript",
        },
        {
            icon: <FaReact />,
            name:"React ",
        },
        {
            icon: <FaLaravel />,
            name:"Laravel",
        },
        {
            icon: <FaPhp />,
            name:"PHP",
        },
        {
            icon: <FaJava />,
            name:"Java",
        },
        {
            icon: <SiTailwindcss />,
            name:"Tailwind.css",
        },
     

    ]
}

import {Tabs ,TabsContent,TabsList,TabsTrigger} from "@/components/ui/tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () =>{
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition:{delay:"2.4",duration:0.4,ease:"easeIn"},}}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        > 

            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {ex.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{ex.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {ex.items.map((item,index)=>{
                                            return(
                                                <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[50px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                                        {education.items.map((item,index)=>{
                                            return(
                                                <li 
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-2xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-h-[60px] max-w-[260px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className="w-[6px] h-[50px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.inst}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col text-center gap-[30px] xl:text-left">
                                    <h3 className="text-4xl font-bold ">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[30px]">
                                    {skills.skillList.map((skill,index)=>{
                                        return(
                                            <li key={index}>
                                                <TooltipProvider>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-2xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                        {/* education */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map((item,index)=>{
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-accent/60">{item.fieldName}</span>
                                                <span className="text-l">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume