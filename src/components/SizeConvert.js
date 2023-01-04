import { useEffect, useState } from "react";
import { isMobile, isBrowser } from 'react-device-detect';
export const vw = (width) =>{
    var result;
    isMobile ? 
    result = (0.267 * width)+"vw":
    result = width+"px";
    return result;
};

export const vh = (height) =>{
    var result;
    isMobile ? 
    result = (0.129 * height)+"vh":
    result = height+"px";
    return result;
};

export const useResize = () =>{
    const [resize, setResize] = useState();

    const handleResize = () => {
        setResize(window.innerWidth);
        console.log(resize);
        window.location.reload();
      };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    return;
}
