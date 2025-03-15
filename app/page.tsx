import React from 'react'
import Hero from "@/components/Hero";
import Works from "@/components/Works";
import SocialScore from "@/components/SocialScore";
import Why from "@/components/Why";
import CTA from "@/components/CTA";

const Page = () => {
    return (
        <div>
            <Hero/>
            <Works/>
            <SocialScore/>
            <Why/>
            <CTA/>
        </div>
    )
}
export default Page