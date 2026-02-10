import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
                        <p className="text-gray-600">Last updated: February 9, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        {/* Introduction */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Introduction</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Welcome to AliShaidMart. We respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you about how we look after your personal data when you visit our
                                website and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may collect, use, store and transfer different kinds of personal data about you:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li><strong>Identity Data:</strong> First name, last name, username or similar identifier</li>
                                <li><strong>Contact Data:</strong> Email address, telephone numbers, billing address, delivery address</li>
                                <li><strong>Financial Data:</strong> Payment card details</li>
                                <li><strong>Transaction Data:</strong> Details about payments and products you have purchased from us</li>
                                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, operating system</li>
                                <li><strong>Usage Data:</strong> Information about how you use our website and products</li>
                                <li><strong>Marketing Data:</strong> Your preferences in receiving marketing from us</li>
                            </ul>
                        </section>

                        {/* How We Use Your Information */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We will only use your personal data when the law allows us to. Most commonly, we will use your
                                personal data in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>To process and deliver your orders</li>
                                <li>To manage payments, fees and charges</li>
                                <li>To collect and recover money owed to us</li>
                                <li>To send you marketing communications (with your consent)</li>
                                <li>To improve our website, products/services, marketing or customer relationships</li>
                                <li>To protect against fraud and ensure website security</li>
                            </ul>
                        </section>

                        {/* Cookies */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our website uses cookies to distinguish you from other users. This helps us to provide you with a
                                good experience when you browse our website and also allows us to improve our site. A cookie is a
                                small file of letters and numbers that we store on your browser or the hard drive of your computer.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                You can set your browser to refuse all or some browser cookies, or to alert you when websites set
                                or access cookies. If you disable or refuse cookies, please note that some parts of this website
                                may become inaccessible or not function properly.
                            </p>
                        </section>

                        {/* Data Security */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Security</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We have put in place appropriate security measures to prevent your personal data from being
                                accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We limit access
                                to your personal data to those employees, agents, contractors and other third parties who have a
                                business need to know.
                            </p>
                        </section>

                        {/* Your Rights */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Legal Rights</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Under certain circumstances, you have rights under data protection laws in relation to your personal data:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Request access to your personal data</li>
                                <li>Request correction of your personal data</li>
                                <li>Request erasure of your personal data</li>
                                <li>Object to processing of your personal data</li>
                                <li>Request restriction of processing your personal data</li>
                                <li>Request transfer of your personal data</li>
                                <li>Right to withdraw consent</li>
                            </ul>
                        </section>

                        {/* Third-Party Links */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Links</h2>
                            <p className="text-gray-600 leading-relaxed">
                                This website may include links to third-party websites, plug-ins and applications. Clicking on
                                those links or enabling those connections may allow third parties to collect or share data about
                                you. We do not control these third-party websites and are not responsible for their privacy statements.
                            </p>
                        </section>

                        {/* Contact Us */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about this privacy policy or our privacy practices, please contact us:
                            </p>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <p className="text-gray-600"><strong>Email:</strong> info@loremipsum.se</p>
                                <p className="text-gray-600"><strong>Phone:</strong> (+48) 833-112233</p>
                                <p className="text-gray-600"><strong>Address:</strong> Germany</p>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
