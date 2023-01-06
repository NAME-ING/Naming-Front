import { Simonetta } from "./Text"
import { vw, vh } from "../components/SizeConvert";

const Footer = () =>{
    return (
        <>
            <Simonetta style={{
                fontSize: vw(8),
                color: "#FFFFFF",
               }}>ⓒ 2022. likelion_ewha All rights reserved.</Simonetta>
        </>
    )
}

export default Footer;