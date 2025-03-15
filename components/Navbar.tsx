"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="py-5 px-4 sm:px-6 lg:px-8 w-full fixed top-0 left-0 right-0 z-50 ">
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Text Logo */}
                <Link href="/" className="group">
                    <div className="flex items-center">
                        <span className="text-4xl font-extrabold tracking-tighter">
                            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-blue-400 bg-clip-text text-transparent">F</span>
                            <span className="relative inline-block -ml-0.5 transform group-hover:scale-110 transition-transform">
                                <span className="bg-gradient-to-br from-blue-500 to-indigo-600 bg-clip-text text-transparent">y</span>
                            </span>
                            <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 bg-clip-text text-transparent">nx</span>
                        </span>
                        <span className="ml-1 text-xs font-light tracking-wide opacity-80">™</span>
                    </div>
                </Link>

                {/* CTA Button - Desktop */}
                <div className="hidden md:block">
                    <Link href="/register" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 text-white px-8 py-3 rounded-lg text-sm font-medium transition-all shadow-sm">
                        Register
                    </Link>
                </div>

                <button
                    className="md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden mt-2  backdrop-blur-sm rounded-lg shadow-lg p-4 absolute left-4 right-4 z-50">
                    <Link href="/register" className="block bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-md text-sm font-medium text-center">
                        Register
                    </Link>
                </div>
            )}
        </header>
    )
}
export default Navbar