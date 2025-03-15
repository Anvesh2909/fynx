"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { FaEye, FaEyeSlash, FaArrowRight, FaBell } from 'react-icons/fa'

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState<{[key: string]: string}>({})
    const [showPassword, setShowPassword] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        // Clear error when typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }))
        }
    }

    const validate = () => {
        const newErrors: {[key: string]: string} = {}

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Name is required'
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid'
        }

        if (!formData.password) {
            newErrors.password = 'Password is required'
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        }

        return newErrors
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        const formErrors = validate()
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }

        setIsSubmitting(true)
        setErrors({})

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500))

            // Handle successful registration
            setIsSuccess(true)
        } catch (error) {
            setErrors({ form: 'Registration failed. Please try again.' })
            console.error(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            {/* Background decorative elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Logo/branding */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block">
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl font-bold">
                            Fynx
                        </span>
                    </Link>
                    <h1 className="text-2xl font-bold mt-4 text-gray-800">Get Early Access</h1>
                    <p className="text-gray-600 mt-2">Be the first to experience the future of influencer marketing</p>
                </div>

                {!isSuccess ? (
                    <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100">
                        {errors.form && (
                            <div className="mb-6 bg-red-50 p-4 rounded-lg border border-red-100 text-red-600">
                                {errors.form}
                            </div>
                        )}

                        <div className="flex items-center justify-center bg-blue-50 text-blue-600 p-3 rounded-lg mb-6">
                            <FaBell className="mr-2 h-4 w-4" />
                            <p className="text-sm font-medium">Limited spots available for early access</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                        placeholder="Enter your name"
                                    />
                                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                                        placeholder="you@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? "text" : "password"}
                                            value={formData.password}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10`}
                                            placeholder="Create a strong password"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                        </button>
                                    </div>
                                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center disabled:opacity-70"
                                >
                                    {isSubmitting ? 'Submitting...' : (
                                        <>
                                            Secure My Early Access <FaArrowRight className="ml-2 h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-500">
                                Join hundreds of brands and creators already on the waitlist
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-100 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 mb-2">You're In!</h2>
                        <div className="space-y-3 mb-6">
                            <p className="text-gray-700">Thank you for joining Fynx's early access list.</p>
                            <p className="text-gray-600 text-sm">We'll notify you as soon as we launch so you can be one of the first to experience the revolution in influencer marketing.</p>
                            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mt-2">
                                <span>Early Access Confirmed</span>
                            </div>
                        </div>
                        <Link href="/" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-2 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center">
                            Return to Home <FaArrowRight className="ml-2 h-3 w-3" />
                        </Link>
                    </div>
                )}

                <div className="mt-8 text-center">
                    <p className="text-xs text-gray-500">
                        By signing up, you agree to our{' '}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-blue-600 hover:underline">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register