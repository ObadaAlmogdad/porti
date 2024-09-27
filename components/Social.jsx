import Link from "next/link";
import {FaGithub,FaLinkedinIn,FaYoutube,FaFacebook,FaTelegram,FaTwitter} from "react-icons/fa"

const so =[
    {icon:<FaGithub/>,path:"https://github.com/ObadaAlmogdad"},
    {icon:<FaLinkedinIn/>,path:"https://www.linkedin.com/in/obada-almogdad-79a090309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"},
    // {icon:<FaYoutube/>,path:""},
    {icon:<FaFacebook/>,path:"https://www.facebook.com/profile.php?id=100056847887506"},
    {icon:<FaTelegram/>,path:"https://t.me/root_2020"},
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