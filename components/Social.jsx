import Link from "next/link";
import {FaGithub,FaLinkedinIn,FaYoutube,FaFacebook,FaTelegram,FaTwitter} from "react-icons/fa"

const so =[
    {icon:<FaGithub/>,path:""},
    {icon:<FaLinkedinIn/>,path:""},
    // {icon:<FaYoutube/>,path:""},
    {icon:<FaFacebook/>,path:""},
    {icon:<FaTelegram/>,path:""},
]
const Social =({containerStyles, iconStyles})=> {
    return (
        <div className={containerStyles}>
            {so.map((item,index)=>{
                return(
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                ); 
            })}
    </div>
    );
};
export default Social