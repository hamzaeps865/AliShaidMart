'use client';

import React, { useState } from 'react';
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const SignupPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle signup logic here
        console.log('Signup submitted:', { name, email, password, confirmPassword });
    };

    const handleGoogleSignup = () => {
        // Handle Google OAuth signup
        console.log('Google signup clicked');
    };

    const handleFacebookSignup = () => {
        // Handle Facebook OAuth signup
        console.log('Facebook signup clicked');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    {/* Left Side - Hero Section */}
                    <div className="lg:w-1/2 bg-gray-900 p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
                        {/* Background Decorative Elements */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full opacity-10 translate-x-1/3 translate-y-1/3 blur-3xl"></div>

                        <div className="relative z-10 text-center max-w-md">
                            <div className="mb-8 flex justify-center">
                                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                    <ShoppingBag className="text-yellow-400 w-10 h-10" />
                                </div>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Join <span className="text-yellow-400">AliShaidMart</span>
                            </h1>
                            <p className="text-gray-300 text-lg mb-8">
                                Create an account to unlock exclusive deals, track orders, and experience seamless shopping.
                            </p>

                            {/* Feature List */}
                            <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-yellow-400 text-2xl mb-2">🎁</div>
                                    <h3 className="font-semibold">Exclusive Offers</h3>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                                    <div className="text-yellow-400 text-2xl mb-2">🚚</div>
                                    <h3 className="font-semibold">Easy Returns</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Side - Signup Form */}
                    <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        {/* Logo and Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-6 lg:hidden">
                                <ShoppingBag className="text-yellow-500 w-8 h-8" />
                                <span className="text-2xl font-bold text-gray-900">AliShaidMart</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                Create Account
                            </h2>
                            <p className="text-gray-500">Join us today! Please enter your details.</p>
                        </div>

                        {/* Signup Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Password Input */}
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all pr-12"
                                        placeholder="Create a password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password Input */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all pr-12"
                                        placeholder="Confirm your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Signup Button */}
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-yellow-400/20 hover:shadow-yellow-400/40 transform hover:-translate-y-0.5 cursor-pointer mt-2"
                            >
                                Sign Up
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or sign up with</span>
                            </div>
                        </div>

                        {/* Social Signup Buttons */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={handleGoogleSignup}
                                className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-200 group transform hover:-translate-y-0.5 cursor-pointer"
                            >
                                <FcGoogle className="text-xl" />
                                <span className="font-medium text-gray-700 cursor-pointer">Google</span>
                            </button>

                            <button
                                onClick={handleFacebookSignup}
                                className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:shadow-md transition-all duration-200 group transform hover:-translate-y-0.5 cursor-pointer"
                            >
                                <FaFacebook className="text-blue-600 text-xl group-hover:scale-110 transition-transform" />
                                <span className="font-medium text-gray-700">Facebook</span>
                            </button>
                        </div>

                        {/* Login Link */}
                        <p className="text-center mt-8 text-gray-600">
                            Already have an account?{' '}
                            <Link href="/login" className="text-yellow-600 hover:text-yellow-700 font-bold transition-colors">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
