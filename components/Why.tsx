"use client"
import React from 'react';
import { CheckCircle, Award, ShieldCheck, BarChart2, ArrowRight } from 'lucide-react';

const Why = () => {
    const benefits = [
        {
            id: "matching",
            icon: <BarChart2 className="h-6 w-6 text-blue-500" />,
            title: "AI-Powered Matching",
            description: "Our algorithm connects you with the perfect influencers for your brand and audience."
        },
        {
            id: "affordable",
            icon: <Award className="h-6 w-6 text-purple-500" />,
            title: "Affordable Marketing for Small Brands",
            description: "Access quality influencer marketing without enterprise-level budgets."
        },
        {
            id: "engagement",
            icon: <CheckCircle className="h-6 w-6 text-green-500" />,
            title: "Real Influencer Engagement",
            description: "No fake followers or bots — only authentic creators with genuine audiences."
        },
        {
            id: "payments",
            icon: <ShieldCheck className="h-6 w-6 text-amber-500" />,
            title: "Secure & Transparent Payments",
            description: "Protected transactions with clear pricing and no hidden fees."
        }
    ];

    return (
        <section className="py-12 md:py-20 px-4 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-gradient-to-tr from-amber-100 to-transparent rounded-full blur-3xl opacity-20 -z-10"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4">
                        Trust & Credibility
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Why Choose <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fynx</span>?
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Building trust between brands and creators is our top priority
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col hover:translate-y-[-5px]"
                        >
                            <div className="rounded-full bg-gradient-to-br from-blue-50 to-purple-50 w-12 h-12 flex items-center justify-center mb-4 shadow-sm group-hover:shadow transition-shadow">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                            <p className="text-gray-600 text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <p className="text-blue-600 font-medium">Join thousands of brands and creators already on Fynx</p>
                        <a
                            href="#"
                            className="flex items-center text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                        >
                            Get started now <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;