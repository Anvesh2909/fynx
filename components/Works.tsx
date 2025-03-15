"use client"
import React, { useState } from 'react';
import LottieAnimation from "@/components/LottieAnimation";
import bussiness from "@/public/illustrations/business-workflow.json";
import influencer from "@/public/illustrations/influencer-workflow.json";
import { Store, Users, TrendingUp, User, Megaphone, Award, ArrowRight } from 'lucide-react';

const Works = () => {
    const [activeTab, setActiveTab] = useState<'business' | 'influencer'>('business');

    const businessSteps = [
        {
            title: "List your brand",
            description: "Create your profile and set your marketing goals",
            icon: "store"
        },
        {
            title: "Get matched with influencers",
            description: "Our algorithm finds the perfect influencers for your brand",
            icon: "connect"
        },
        {
            title: "Watch your brand grow",
            description: "Track performance and see your business expand",
            icon: "growth"
        }
    ];

    const influencerSteps = [
        {
            title: "Sign up",
            description: "Create your profile and connect your social accounts",
            icon: "profile"
        },
        {
            title: "Promote brands",
            description: "Choose brands that match your audience and values",
            icon: "promote"
        },
        {
            title: "Earn rewards",
            description: "Get compensated based on your Fynx Social Score",
            icon: "reward"
        }
    ];

    const renderIcon = (iconType: string) => {
        switch (iconType) {
            case 'store':
                return <Store className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" strokeWidth={1.5} />;
            case 'connect':
                return <Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" strokeWidth={1.5} />;
            case 'growth':
                return <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" strokeWidth={1.5} />;
            case 'profile':
                return <User className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" strokeWidth={1.5} />;
            case 'promote':
                return <Megaphone className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" strokeWidth={1.5} />;
            case 'reward':
                return <Award className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" strokeWidth={1.5} />;
            default:
                return <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full"></div>;
        }
    };

    return (
        <section className="py-16 md:py-24 relative overflow-hidden">
            {/* Dynamic background blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: "1s", animationDuration: "5s" }}></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">How Fynx Works</h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Our platform connects businesses with influencers for powerful marketing partnerships
                    </p>
                </div>

                {/* Tab switcher for mobile */}
                <div className="flex rounded-full p-1 bg-gray-100 max-w-xs mx-auto mb-8 md:hidden">
                    <button
                        onClick={() => setActiveTab('business')}
                        className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
                            activeTab === 'business'
                                ? 'bg-white text-blue-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        For Business
                    </button>
                    <button
                        onClick={() => setActiveTab('influencer')}
                        className={`flex-1 py-2 px-4 rounded-full text-sm font-medium transition-all ${
                            activeTab === 'influencer'
                                ? 'bg-white text-purple-600 shadow-sm'
                                : 'text-gray-500 hover:text-gray-700'
                        }`}
                    >
                        For Influencers
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                    {/* For Businesses */}
                    <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 backdrop-blur-sm ${
                        activeTab !== 'business' ? 'hidden md:block' : ''
                    }`}>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 flex items-center">
                                    For Businesses
                                    <ArrowRight className="h-5 w-5 ml-2 text-blue-400 animate-bounce-x" />
                                </h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2"></div>
                            </div>
                            <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">3 Simple Steps</div>
                        </div>

                        {/* Main illustration for businesses */}
                        <div className="mb-8 bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-xl p-4">
                            <div className="aspect-[16/9] relative">
                                <LottieAnimation animationData={bussiness} className="w-full h-full" autoplay={true} />
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            {businessSteps.map((step, index) => (
                                <div key={index} className="flex items-start group p-3 hover:bg-blue-50/80 rounded-xl transition-all duration-200">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 mr-4 flex-shrink-0">
                                        <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-full w-full h-full flex items-center justify-center group-hover:shadow-blue-200 transition-all duration-300 shadow-md group-hover:shadow-lg">
                                            <div className="animate-icon">
                                                {renderIcon(step.icon)}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center bg-blue-100 text-blue-600 w-6 h-6 rounded-full text-xs font-bold mr-2">{index + 1}</span>
                                            <h4 className="text-lg sm:text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">
                                                {step.title}
                                            </h4>
                                        </div>
                                        <p className="text-gray-600 mt-1">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* For Influencers */}
                    <div className={`bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 backdrop-blur-sm ${
                        activeTab !== 'influencer' ? 'hidden md:block' : ''
                    }`}>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-2xl sm:text-3xl font-bold text-purple-600 flex items-center">
                                    For Influencers
                                    <ArrowRight className="h-5 w-5 ml-2 text-purple-400 animate-bounce-x" />
                                </h3>
                                <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-2"></div>
                            </div>
                            <div className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">3 Simple Steps</div>
                        </div>

                        {/* Main illustration for influencers */}
                        <div className="mb-8 bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-xl p-4">
                            <div className="aspect-[16/9] relative">
                                <LottieAnimation animationData={influencer} className="w-full h-full" autoplay={true} />
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            {influencerSteps.map((step, index) => (
                                <div key={index} className="flex items-start group p-3 hover:bg-purple-50/80 rounded-xl transition-all duration-200">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 mr-4 flex-shrink-0">
                                        <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-full w-full h-full flex items-center justify-center group-hover:shadow-purple-200 transition-all duration-300 shadow-md group-hover:shadow-lg">
                                            <div className="animate-icon">
                                                {renderIcon(step.icon)}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center">
                                            <span className="flex items-center justify-center bg-purple-100 text-purple-600 w-6 h-6 rounded-full text-xs font-bold mr-2">{index + 1}</span>
                                            <h4 className="text-lg sm:text-xl font-semibold group-hover:text-purple-600 transition-colors duration-300">
                                                {step.title}
                                            </h4>
                                        </div>
                                        <p className="text-gray-600 mt-1">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-icon {
                    transform-origin: center;
                    transition: transform 0.3s ease;
                }

                .animate-icon:hover {
                    transform: scale(1.2);
                }

                @keyframes bounce-x {
                    0%, 100% {
                        transform: translateX(0);
                    }
                    50% {
                        transform: translateX(3px);
                    }
                }

                .animate-bounce-x {
                    animation: bounce-x 1s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default Works;