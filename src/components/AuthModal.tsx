'use client';

import React, { useState, useEffect } from 'react';
import { FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { ShoppingBag, X } from 'lucide-react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type AuthMode = 'login' | 'signup';

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
    const [mode, setMode] = useState<AuthMode>('login');
    // Login State
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showLoginPassword, setShowLoginPassword] = useState(false);

    // Signup State
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupConfirmPassword, setSignupConfirmPassword] = useState('');
    const [showSignupPassword, setShowSignupPassword] = useState(false);
    const [showSignupConfirmPassword, setShowSignupConfirmPassword] = useState(false);

    // Reset state when modal opens/closes or mode changes
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setMode('login');
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login submitted:', { email: loginEmail, password: loginPassword });
        onClose();
    };

    const handleSignupSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Signup submitted:', { name: signupName, email: signupEmail, password: signupPassword, confirmPassword: signupConfirmPassword });
        onClose();
    };

    const handleGoogleAuth = () => {
        console.log(`Google ${mode} clicked`);
    };

    const handleFacebookAuth = () => {
        console.log(`Facebook ${mode} clicked`);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
        >
            {/* Modal Container */}
            <div
                className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden relative flex flex-col lg:flex-row max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full text-gray-500 lg:text-white transition-colors"
                >
                    <X size={20} />
                </button>

                {/* Left Side - Hero Section (Dynamic based on mode) */}
                <div className="lg:w-5/12 bg-gray-900 p-6 lg:p-8 flex flex-col justify-center items-center text-white relative overflow-hidden hidden lg:flex">
                    {/* Background Decorative Elements */}
                    <div className={`absolute top-0 left-0 w-48 h-48 bg-yellow-400 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2 blur-2xl transition-all duration-700 ${mode === 'signup' ? 'scale-110' : 'scale-100'}`}></div>
                    <div className={`absolute bottom-0 right-0 w-64 h-64 bg-yellow-500 rounded-full opacity-10 translate-x-1/3 translate-y-1/3 blur-2xl transition-all duration-700 ${mode === 'signup' ? 'scale-110' : 'scale-100'}`}></div>

                    <div className="relative z-10 text-center max-w-sm">
                        <div className="mb-6 flex justify-center">
                            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/20">
                                <ShoppingBag className="text-yellow-400 w-6 h-6 lg:w-8 lg:h-8" />
                            </div>
                        </div>

                        <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                            {mode === 'login' ? (
                                <>Welcome to <span className="text-yellow-400">AliShaidMart</span></>
                            ) : (
                                <>Join <span className="text-yellow-400">AliShaidMart</span></>
                            )}
                        </h1>

                        <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                            {mode === 'login'
                                ? "Your one-stop destination for premium fashion, footwear, and lifestyle essentials."
                                : "Create an account to unlock exclusive deals, track orders, and experience seamless shopping."
                            }
                        </p>

                        {/* Feature List */}
                        <div className="grid grid-cols-2 gap-3 mt-2 w-full text-left">
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="text-yellow-400 text-lg mb-1">
                                    {mode === 'login' ? '✨' : '🎁'}
                                </div>
                                <h3 className="font-medium text-xs">
                                    {mode === 'login' ? 'Trendsetting Styles' : 'Exclusive Offers'}
                                </h3>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm p-3 rounded-lg border border-white/10">
                                <div className="text-yellow-400 text-lg mb-1">
                                    {mode === 'login' ? '🚀' : '🚚'}
                                </div>
                                <h3 className="font-medium text-xs">
                                    {mode === 'login' ? 'Fast Delivery' : 'Easy Returns'}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form Section (Scrollable) */}
                <div className="w-full lg:w-7/12 p-6 md:p-8 flex flex-col justify-center overflow-y-auto">

                    {/* Mobile Header */}
                    <div className="mb-4 lg:hidden flex items-center gap-2 justify-center">
                        <ShoppingBag className="text-yellow-500 w-6 h-6" />
                        <span className="text-lg font-bold text-gray-900">AliShaidMart</span>
                    </div>

                    <div className="mb-6 text-center lg:text-left">
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            {mode === 'login' ? 'Sign In' : 'Create Account'}
                        </h2>
                        <p className="text-gray-500 text-sm">
                            {mode === 'login' ? 'Welcome back! Please enter your details.' : 'Join us today! Please enter your details.'}
                        </p>
                    </div>

                    {/* Forms */}
                    {mode === 'login' ? (
                        /* LOGIN FORM */
                        <form onSubmit={handleLoginSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="login-email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                <input
                                    type="email"
                                    id="login-email"
                                    value={loginEmail}
                                    onChange={(e) => setLoginEmail(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="login-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <div className="relative">
                                    <input
                                        type={showLoginPassword ? 'text' : 'password'}
                                        id="login-password"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all pr-12 text-sm"
                                        placeholder="Enter your password"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowLoginPassword(!showLoginPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        {showLoginPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="ml-2 block text-gray-700 text-xs">Remember me</label>
                                </div>
                                <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500 transition-colors text-xs">Forgot Password?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2.5 px-6 rounded-lg transition-all duration-200 shadow-md shadow-yellow-400/20 hover:shadow-yellow-400/40 transform hover:-translate-y-0.5 cursor-pointer text-sm"
                            >
                                Sign In
                            </button>
                        </form>
                    ) : (
                        /* SIGNUP FORM */
                        <form onSubmit={handleSignupSubmit} className="space-y-3">
                            <div>
                                <label htmlFor="signup-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="signup-name"
                                    value={signupName}
                                    onChange={(e) => setSignupName(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                                <input
                                    type="email"
                                    id="signup-email"
                                    value={signupEmail}
                                    onChange={(e) => setSignupEmail(e.target.value)}
                                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showSignupPassword ? 'text' : 'password'}
                                            id="signup-password"
                                            value={signupPassword}
                                            onChange={(e) => setSignupPassword(e.target.value)}
                                            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all pr-10 text-sm"
                                            placeholder="Create pass"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowSignupPassword(!showSignupPassword)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showSignupPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="signup-confirm" className="block text-sm font-medium text-gray-700 mb-1">Confirm</label>
                                    <div className="relative">
                                        <input
                                            type={showSignupConfirmPassword ? 'text' : 'password'}
                                            id="signup-confirm"
                                            value={signupConfirmPassword}
                                            onChange={(e) => setSignupConfirmPassword(e.target.value)}
                                            className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all pr-10 text-sm"
                                            placeholder="Confirm pass"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowSignupConfirmPassword(!showSignupConfirmPassword)}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                        >
                                            {showSignupConfirmPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2.5 px-6 rounded-lg transition-all duration-200 shadow-md shadow-yellow-400/20 hover:shadow-yellow-400/40 transform hover:-translate-y-0.5 cursor-pointer mt-2 text-sm"
                            >
                                Sign Up
                            </button>
                        </form>
                    )}

                    {/* Divider */}
                    <div className="relative my-4 lg:my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-xs text-gray-500">
                            <span className="px-2 bg-white">Or {mode === 'login' ? 'continue' : 'sign up'} with</span>
                        </div>
                    </div>

                    {/* Social Logic */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={handleGoogleAuth}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group transform hover:-translate-y-0.5 cursor-pointer"
                        >
                            <FcGoogle className="text-lg" />
                            <span className="font-medium text-gray-700 cursor-pointer text-sm">Google</span>
                        </button>

                        <button
                            onClick={handleFacebookAuth}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transition-all duration-200 group transform hover:-translate-y-0.5 cursor-pointer"
                        >
                            <FaFacebook className="text-blue-600 text-lg group-hover:scale-110 transition-transform" />
                            <span className="font-medium text-gray-700 text-sm">Facebook</span>
                        </button>
                    </div>

                    {/* Switch Mode Link */}
                    <p className="text-center mt-4 lg:mt-6 text-gray-600 text-sm">
                        {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
                        <button
                            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                            className="text-yellow-600 hover:text-yellow-700 font-bold transition-colors cursor-pointer"
                        >
                            {mode === 'login' ? 'Sign up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;
