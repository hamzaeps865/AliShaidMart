import Image from 'next/image';
import Link from 'next/link';

interface FeatureSectionProps {
  heading?: string;
  paragraph?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function FeatureSection({
  heading = "Discover Your Perfect Style",
  paragraph = "At AliShaidMart, we bring you the latest trends in fashion and footwear. Our carefully curated collection features premium quality products that combine style, comfort, and affordability. Whether you're looking for casual wear or statement pieces, we have something special for everyone.",
  imageSrc = "/alishaid.jpg",
  imageAlt = "Fashion collection"
}: FeatureSectionProps) {
  return (
    <section className="px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              {heading}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {paragraph}
            </p>
            <Link href="/products">
            <button className="bg-yellow-400 cursor-pointer hover:bg-yellow-500 text-gray-800 font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
              Shop Now
            </button>
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="relative h-[350px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="cursor-pointer object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}