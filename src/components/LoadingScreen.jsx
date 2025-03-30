import { useEffect, useState } from "react";
import { useLanguage } from "./context/useLanguage";
import PropTypes from "prop-types";


export const LoadingScreen = ({onComplete}) => {
    const { trl } = useLanguage(); // Obtenemos las traducciones
    const [text, setText] = useState("");
    const fullText = trl.greeting || "< Hola!/>"; // Usar la traducción o valor por defecto
    const [loadingProgress, setLoadingProgress] = useState(0);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            setLoadingProgress((index / fullText.length) * 100);
            index++;
            if(index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete();
                }, 100)
            }
        }, 100)

        return () => clearInterval(interval);
    }, [onComplete, fullText]);

    return (
        <div className="fixed inset-0 z-50 bg-gradient-to-r from-[#0B1120] to-[#083344] flex flex-col items-center justify-center">
            <div className="mb-8 text-5xl font-mono font-bold relative">
                {text}<span className="animate-blink ml-1 opacity-0 animate-[blink_1s_infinite]">|</span> 
            </div>
            <div className="w-[280px] h-[3px] rounded-full relative overflow-hidden">
                <div 
                    className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] absolute left-0 transition-all duration-100 ease-out"
                    style={{ width: `${loadingProgress}%` }}
                ></div>
            </div>
            <p className="text-gray-500 mt-4 text-sm">{trl.loading || "Cargando..."}</p>
        </div>
    )
}


LoadingScreen.propTypes = {
    onComplete: PropTypes.func.isRequired, 
}