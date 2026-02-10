import React from 'react';

const TermsOfService = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Terms of Service</h1>
                        <p className="text-gray-600">Last updated: February 9, 2026</p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg max-w-none">

                        {/* Agreement to Terms */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">1. Agreement to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing and using AliShaidMart, you accept and agree to be bound by the terms and provision
                                of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </section>

                        {/* Use License */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">2. Use License</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Permission is granted to temporarily access the materials (information or software) on AliShaidMart's
                                website for personal, non-commercial transitory viewing only. This is the grant of a license, not a
                                transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose or for any public display</li>
                                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                            </ul>
                        </section>

                        {/* Product Information */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">3. Product Information</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We strive to provide accurate product descriptions and pricing. However, we do not warrant that
                                product descriptions, pricing, or other content on this site is accurate, complete, reliable,
                                current, or error-free. If a product offered by us is not as described, your sole remedy is to
                                return it in unused condition.
                            </p>
                        </section>

                        {/* Pricing and Payment */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">4. Pricing and Payment</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                All prices are subject to change without notice. We reserve the right to:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Modify or discontinue any product without notice</li>
                                <li>Limit the quantity of any products or services we offer</li>
                                <li>Refuse any order you place with us</li>
                                <li>Require verification of information prior to acceptance of any order</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                Payment must be received by us before we dispatch your order. We accept major credit cards,
                                debit cards, and other payment methods as displayed on our website.
                            </p>
                        </section>

                        {/* Shipping and Delivery */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">5. Shipping and Delivery</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We will arrange for shipment of ordered products to you. Please check the individual product
                                pages for specific delivery options. Title and risk of loss pass to you upon our transfer of
                                the products to the carrier. Shipping and handling charges are non-refundable.
                            </p>
                        </section>

                        {/* Returns and Refunds */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">6. Returns and Refunds</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We want you to be completely satisfied with your purchase. Our return policy:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>Products must be returned within 30 days of delivery</li>
                                <li>Items must be unused and in original packaging</li>
                                <li>Proof of purchase is required</li>
                                <li>Refunds will be processed within 7-10 business days</li>
                                <li>Original shipping charges are non-refundable</li>
                                <li>Customer is responsible for return shipping costs unless the item is defective</li>
                            </ul>
                        </section>

                        {/* User Accounts */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">7. User Accounts</h2>
                            <p className="text-gray-600 leading-relaxed">
                                When you create an account with us, you must provide information that is accurate, complete, and
                                current at all times. Failure to do so constitutes a breach of the Terms. You are responsible for
                                safeguarding the password and for all activities that occur under your account.
                            </p>
                        </section>

                        {/* Prohibited Uses */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">8. Prohibited Uses</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                You may not use our site:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                                <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
                                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                                <li>To submit false or misleading information</li>
                                <li>To upload or transmit viruses or any other type of malicious code</li>
                            </ul>
                        </section>

                        {/* Intellectual Property */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">9. Intellectual Property</h2>
                            <p className="text-gray-600 leading-relaxed">
                                The service and its original content, features, and functionality are and will remain the exclusive
                                property of AliShaidMart and its licensors. The service is protected by copyright, trademark, and
                                other laws. Our trademarks may not be used in connection with any product or service without prior
                                written consent.
                            </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">10. Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                In no event shall AliShaidMart, nor its directors, employees, partners, agents, suppliers, or
                                affiliates, be liable for any indirect, incidental, special, consequential or punitive damages,
                                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                                resulting from your access to or use of or inability to access or use the service.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">11. Governing Law</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms shall be governed and construed in accordance with the laws of Germany, without regard
                                to its conflict of law provisions. Our failure to enforce any right or provision of these Terms
                                will not be considered a waiver of those rights.
                            </p>
                        </section>

                        {/* Changes to Terms */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">12. Changes to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a
                                revision is material, we will try to provide at least 30 days' notice prior to any new terms taking
                                effect. What constitutes a material change will be determined at our sole discretion.
                            </p>
                        </section>

                        {/* Contact Information */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">13. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about these Terms, please contact us:
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

export default TermsOfService;
