import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-gray-100 px-4 md:px-8 lg:px-16 py-16 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left side - Content */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                                About Us
                            </h1>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                AliShaidMart's company and culture are a lot like our products. They're crafted, not cobbled, for a delightful experience. We believe in bringing you the finest selection of fashion and footwear that combines quality, style, and affordability.
                            </p>
                        </div>

                        {/* Right side - Image */}
                        <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/alishaid.jpg"
                                alt="AliShaidMart Team"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Showcase Section */}
            <section className="bg-white px-4 md:px-8 lg:px-16 py-16 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Our Featured Products
                        </h2>
                        <p className="text-base md:text-lg text-gray-600">
                            Discover our carefully curated collection of premium fashion items
                        </p>
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {[
                            { src: '/products/1g.png', alt: 'Green Sneakers' },
                            { src: '/products/2g.png', alt: 'Fashion Sneakers' },
                            { src: '/products/3b.png', alt: 'Blue Footwear' },
                            { src: '/products/5bl.png', alt: 'Black Sneakers' },
                            { src: '/products/7g.png', alt: 'Green Fashion' },
                            { src: '/products/8b.png', alt: 'Blue Sneakers' },
                        ].map((product, index) => (
                            <div
                                key={index}
                                className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group bg-gray-50"
                            >
                                <Image
                                    src={product.src}
                                    alt={product.alt}
                                    fill
                                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="text-center mt-12">
                        <Link href="/products">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-10 py-4 rounded-lg transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
                                Explore All Products
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white px-4 md:px-8 lg:px-16 py-16 md:py-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Why Choose AliShaidMart?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="text-center space-y-4 p-6">
                            <div className="text-5xl mb-4">✨</div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                Premium Quality
                            </h3>
                            <p className="text-gray-600">
                                Every product is carefully selected to ensure the highest quality standards for our customers.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="text-center space-y-4 p-6">
                            <div className="text-5xl mb-4">💰</div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                Affordable Prices
                            </h3>
                            <p className="text-gray-600">
                                We believe great fashion should be accessible to everyone without breaking the bank.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="text-center space-y-4 p-6">
                            <div className="text-5xl mb-4">🚀</div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                Fast Delivery
                            </h3>
                            <p className="text-gray-600">
                                Quick and reliable shipping to get your favorite items to you as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
