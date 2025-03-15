import '@/styles/globals.css';
import { ReactNode } from 'react';
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: 'Fynx',
    description: 'Fynx – Empowering Small Businesses with Influencer-Driven Growth',
    icons: '/logo.png',
};

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen bg-hero-gradient text-foreground">
        <div className="relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-50 via-transparent to-transparent rounded-full opacity-70 blur-md"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-blue-50 via-transparent to-transparent rounded-full opacity-70 blur-md"></div>

            <Navbar />

            <main className="relative z-10 max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 pb-16">
                {children}
            </main>

            <Footer />
        </div>
        </body>
        </html>
    );
}