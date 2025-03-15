"use client"
import React, { useState } from 'react'
import { ArrowRight, Rocket, X } from 'lucide-react';
import {useRouter} from "next/navigation";

const Cta = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showFloatingButton, setShowFloatingButton] = useState(true);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.trim() || !email.includes('@')) {
            setError('Please enter a valid email');
            return;
        }

        setIsSubmitting(true);
        setError(null);

        // try {
        //     // Placeholder for Supabase integration
        //     // const { error } = await supabase.from('earlyaccess').insert([{ email }]);
        //
        //     // Simulate API call
        //     await new Promise(resolve => setTimeout(resolve, 1000));
        //
        //     setIsSuccess(true);
        //     setEmail('');
        // } catch (err) {
        //     setError('Something went wrong. Please try again.');
        //     console.error(err);
        // } finally {
        //     setIsSubmitting(false);
        // }
    };

    return (
        <>
            <section className="relative py-16 sm:py-24 overflow-hidden ">
                {/* Background effects */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full opacity-20 blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
                    <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 rounded-full opacity-20 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 text-sm font-medium mb-6">
                            <Rocket className="h-4 w-4 mr-2" />
                            <span>Limited Early-Access</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                            🚀 Join the Revolution in
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Influencer Marketing</span>
                        </h2>

                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                            Be among the first to experience our AI-powered platform that connects brands with authentic influencers for maximum impact.
                        </p>
                    </div>

                    <div className="max-w-md mx-auto">
                        {!isSuccess ? (
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                                <div className="flex-grow">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 rounded-lg sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        disabled={isSubmitting}
                                    />
                                    {error && (
                                        <p className="mt-2 text-sm text-red-600">{error}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-lg sm:rounded-l-none hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center disabled:opacity-70"
                                >
                                    {isSubmitting ? 'Submitting...' : (
                                        <>
                                            Get Early Access <ArrowRight className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-700 text-center">
                                <p className="font-medium">Thank you for joining our waitlist!</p>
                                <p className="text-sm mt-1">We'll notify you when early access is available.</p>
                            </div>
                        )}

                        <p className="text-gray-500 text-sm text-center mt-4">
                            Join hundreds of brands and creators already on the waitlist
                        </p>
                    </div>
                </div>
            </section>

            {/* Floating registration button - always visible */}
            {showFloatingButton && (
                <div className="fixed bottom-6 right-6 z-50">
                    <div className="relative">
                        <button
                            onClick={() => router.push('/register')}  // Changed to direct navigation
                            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg p-4 flex items-center gap-2 group hover:shadow-xl transition-all duration-200"
                        >
                            <span className="hidden sm:inline">Get Early Access</span>
                            <Rocket className="h-4 w-4" />
                        </button>

                        <button
                            onClick={() => setShowFloatingButton(false)}
                            className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                            aria-label="Close"
                        >
                            <X className="h-3 w-3 text-gray-500" />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Cta