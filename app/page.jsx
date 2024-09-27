import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"

const Home =() => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8  xl:pb-16">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer </span>
      
            <h1 className="h1 mb-6 pt-4">
              Hello I'm <br /><span className="text-accent">Obada Almogdad</span>
            </h1>
            <p className="max-w-[500px] mb-6 text-white/80">
            As a Software Engineer, I am passionate about creating efficient and innovative software solutions. I continuously hone my skills in various programming languages and technologies, driven by a desire to learn and adapt in this evolving field.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="xl:mb:0">
                <Social 
                  containerStyles="flex gap-6" 
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          <div className="order-1 xl:oreder-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
