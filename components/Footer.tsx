"use client"
import React from 'react'
import Link from 'next/link'
import {
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaGithub
} from 'react-icons/fa'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-2xl font-bold">
                Fynx
              </span>
                        </Link>
                        <p className="text-gray-600 mb-4 text-sm">
                            Connecting brands with authentic influencers for impactful marketing campaigns.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://twitter.com" className="text-gray-500 hover:text-blue-500 transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="https://instagram.com" className="text-gray-500 hover:text-purple-500 transition-colors">
                                <FaInstagram size={20} />
                            </a>
                            <a href="https://linkedin.com" className="text-gray-500 hover:text-blue-700 transition-colors">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://facebook.com" className="text-gray-500 hover:text-blue-800 transition-colors">
                                <FaFacebook size={20} />
                            </a>
                            <a href="https://github.com" className="text-gray-500 hover:text-gray-900 transition-colors">
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links columns */}
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
                            <li><Link href="/careers" className="text-gray-600 hover:text-blue-600">Careers</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link></li>
                            <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
                            <li><Link href="/cookies" className="text-gray-600 hover:text-blue-600">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Copyright bar */}
                <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} Fynx. All rights reserved.
                    </p>
                    <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                        <Link href="/terms" className="text-xs text-gray-500 hover:text-blue-600">Terms</Link>
                        <Link href="/privacy" className="text-xs text-gray-500 hover:text-blue-600">Privacy</Link>
                        <Link href="/contact" className="text-xs text-gray-500 hover:text-blue-600">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer