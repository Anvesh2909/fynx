"use client"
import React, { useState, useEffect } from 'react';
import { Users, BarChart3, Shield, Award, HelpCircle, ChevronDown, ChevronUp, RefreshCw, Info } from 'lucide-react';
import LottieAnimation from './LottieAnimation';
import influencerWorkflow from '../public/illustrations/influencer-workflow.json';

const SocialScore = () => {
    const [expanded, setExpanded] = useState<string | null>(null);
    const [score, setScore] = useState(78); // Example score
    const [isLoading, setIsLoading] = useState(false);
    const [showTooltip, setShowTooltip] = useState<string | null>(null);

    const scoreFactors = [
        {
            id: "followers",
            name: "Audience Reach",
            icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />,
            weight: 25,
            score: 82,
            description: "Based on your follower count and audience demographics across platforms.",
            tip: "Growing your audience in targeted demographics can boost this score significantly."
        },
        {
            id: "engagement",
            name: "Engagement Rate",
            icon: <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />,
            weight: 40,
            score: 75,
            description: "Calculated from your average likes, comments, shares, and saves relative to your audience size.",
            tip: "Focus on creating content that prompts responses and interaction from your audience."
        },
        {
            id: "trust",
            name: "Trust Factor",
            icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />,
            weight: 35,
            score: 78,
            description: "Determined by audience sentiment, content authenticity, and partnership history.",
            tip: "Maintaining transparency and authentic partnerships will strengthen this metric over time."
        }
    ];

    const toggleExpanded = (id: string) => {
        setExpanded(expanded === id ? null : id);
    };

    const handleRefresh = () => {
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            // Random score between -5 and +5 of current score, capped between 0-100
            const newScore = Math.min(100, Math.max(0, score + Math.floor(Math.random() * 11) - 5));
            setScore(newScore);
            setIsLoading(false);
        }, 1500);
    };

    // Score color determination
    const getScoreColor = (value: number) => {
        if (value >= 80) return "text-emerald-600";
        if (value >= 60) return "text-blue-600";
        if (value >= 40) return "text-amber-500";
        return "text-red-500";
    };

    // Calculate weighted total (just for demonstration)
    const calculatedScore = scoreFactors.reduce((acc, factor) =>
        acc + (factor.score * factor.weight / 100), 0).toFixed(1);

    return (
        <section className="py-8 sm:py-12 md:py-16 px-3 sm:px-4 relative overflow-hidden ">
            {/* Enhanced background elements */}
            <div className="absolute top-0 right-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-tr from-purple-100 to-transparent rounded-full blur-3xl opacity-30"></div>
            <div className="absolute top-1/3 left-1/4 w-36 sm:w-48 md:w-64 h-36 sm:h-48 md:h-64 bg-gradient-to-tr from-amber-100 to-transparent rounded-full blur-3xl opacity-20"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
                        Fynx Social Score
                    </h2>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
                        Our proprietary algorithm measures influence based on real engagement, not just follower count
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch">
                    {/* Score visualization */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 flex flex-col">
                        <div className="flex items-center justify-between mb-4 sm:mb-6">
                            <h3 className="font-semibold text-base sm:text-lg text-gray-800">Your Score</h3>
                            <button
                                onClick={handleRefresh}
                                disabled={isLoading}
                                className="flex items-center text-xs sm:text-sm text-blue-600 hover:text-blue-800 transition-colors disabled:text-gray-400"
                            >
                                <RefreshCw className={`w-3 h-3 sm:w-4 sm:h-4 mr-1 ${isLoading ? 'animate-spin' : ''}`} />
                                Refresh
                            </button>
                        </div>

                        <div className="flex flex-col items-center flex-grow">
                            <div className="relative w-full max-w-[240px] sm:max-w-[280px] h-28 sm:h-36 mb-4 sm:mb-6">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
                                        {/* Background arc - light gray semi-circle */}
                                        <path
                                            d="M20,100 A80,80 0 0,1 180,100"
                                            fill="none"
                                            stroke="#e5e7eb"
                                            strokeWidth="20"
                                            strokeLinecap="round"
                                        />

                                        {/* Score arc - only fills the percentage portion with gradient */}
                                        <path
                                            d="M20,100 A80,80 0 0,1 180,100"
                                            fill="none"
                                            stroke="url(#scoreGradient)"
                                            strokeWidth="20"
                                            strokeLinecap="round"
                                            strokeDasharray={`${Math.PI * 80 * (score/100)}, ${Math.PI * 80}`}
                                            strokeDashoffset="0"
                                        />

                                        <defs>
                                            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#4f46e5" />
                                                <stop offset="100%" stopColor="#a855f7" />
                                            </linearGradient>
                                        </defs>

                                        {/* Score text in center */}
                                        <text x="100" y="70" textAnchor="middle" fill="url(#textGradient)"
                                              style={{ fontSize: "40px", fontWeight: "bold" }}>
                                            {score}
                                        </text>

                                        {/* "Out of 100" text */}
                                        <text x="100" y="95" textAnchor="middle" fill="#9ca3af"
                                              style={{ fontSize: "14px" }}>
                                            Out of 100
                                        </text>

                                        <defs>
                                            <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#4f46e5" />
                                                <stop offset="100%" stopColor="#a855f7" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>

                            <div className="text-center mb-4 sm:mb-6 w-full px-2">
                                <div className="text-xs sm:text-sm text-gray-500 mb-1">Calculated Score: {calculatedScore}</div>
                                <div className="bg-gray-100 h-1.5 sm:h-2 rounded-full w-full max-w-xs mx-auto">
                                    <div
                                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                                        style={{ width: `${score}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full mt-auto">
                                {scoreFactors.map((factor) => (
                                    <div
                                        key={factor.id}
                                        className="flex flex-col items-center p-2 sm:p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors relative"
                                        onClick={() => setShowTooltip(showTooltip === factor.id ? null : factor.id)}
                                        onMouseEnter={() => setShowTooltip(factor.id)}
                                        onMouseLeave={() => setShowTooltip(null)}
                                    >
                                        <div className="mb-1 sm:mb-2 text-blue-600">{factor.icon}</div>
                                        <div className={`text-sm sm:text-lg font-semibold ${getScoreColor(factor.score)}`}>{factor.score}</div>
                                        <div className="text-[10px] sm:text-xs text-gray-500">{factor.name}</div>

                                        {/* Mobile-friendly tooltip */}
                                        {showTooltip === factor.id && (
                                            <div className="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-36 sm:w-48 bg-gray-800 text-white text-[10px] sm:text-xs rounded p-2 shadow-lg">
                                                <div className="font-semibold mb-1">{factor.name} ({factor.weight}%)</div>
                                                <p className="line-clamp-3">{factor.tip}</p>
                                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 border-4 sm:border-8 border-transparent border-t-gray-800"></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Score explanation */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 flex flex-col">
                        <div className="flex items-center mb-4 sm:mb-6">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mr-2" strokeWidth={1.5} />
                            <h3 className="text-lg sm:text-xl font-bold">Why Social Score Matters</h3>
                        </div>

                        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                            The Fynx Social Score helps businesses identify authentic influencers who can
                            drive real engagement and conversions, not just accounts with high follower counts.
                        </p>

                        <div className="space-y-2 sm:space-y-3 flex-grow">
                            {scoreFactors.map((factor) => (
                                <div key={factor.id} className="rounded-lg border border-gray-200 overflow-hidden hover:border-gray-300 transition-colors">
                                    <button
                                        className="w-full p-3 sm:p-4 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-inset"
                                        onClick={() => toggleExpanded(factor.id)}
                                    >
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mr-2 sm:mr-3 shadow-sm">
                                                <div className="text-blue-600">{factor.icon}</div>
                                            </div>
                                            <div>
                                                <span className="text-sm sm:text-base font-medium flex items-center">
                                                    {factor.name}
                                                    <span className={`ml-2 font-semibold ${getScoreColor(factor.score)}`}>
                                                        {factor.score}
                                                    </span>
                                                </span>
                                                <span className="text-xs sm:text-sm text-gray-500 block">
                                                    {factor.weight}% of total score
                                                </span>
                                            </div>
                                        </div>
                                        {expanded === factor.id ?
                                            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> :
                                            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                        }
                                    </button>
                                    {expanded === factor.id && (
                                        <div className="p-3 sm:p-4 pt-2 border-t border-gray-100 bg-gray-50">
                                            <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                                {factor.description}
                                            </p>
                                            <div className="flex items-start bg-white p-2 sm:p-3 rounded-lg border border-gray-100">
                                                <Info className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                                                <p className="text-[10px] sm:text-xs text-gray-600">
                                                    <span className="font-medium text-blue-600">Tip:</span> {factor.tip}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional info */}
                <div className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-5 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg sm:rounded-xl flex items-start shadow-sm">
                    <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                        <h4 className="text-sm sm:text-base font-medium text-blue-800 mb-1">Score Updates</h4>
                        <p className="text-xs sm:text-sm text-blue-700">
                            Your Fynx Social Score is updated weekly based on your latest performance data. Consistently posting quality content and maintaining high engagement helps improve your score.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialScore;