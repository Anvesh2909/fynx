"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), {
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-200 rounded-full w-full h-full" />
});

const LottieAnimation = ({
                             animationData,
                             className = "",
                             autoplay = true
                         }: {
    animationData: any,
    className?: string,
    autoplay?: boolean
}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <>
            {!isLoaded && <div className="animate-pulse bg-gray-200 rounded-full w-full h-full" />}
            <Lottie
                animationData={animationData}
                loop
                className={className}
                autoplay={autoplay}
                onDOMLoaded={() => setIsLoaded(true)}
            />
        </>
    );
};
export default LottieAnimation;